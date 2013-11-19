#!/usr/bin/env ruby
require 'fssm'
require 'dante'
require 'yaml'
require 'rappa'

class Decision

  def decide(option, base, relative, type)
    rap_file = base + '/' + relative
    rap_dir = path_without_ext(rap_file, base)
    if option == :create
      clean_rap(rap_dir, rap_file, base) if rap_already_deployed?(rap_dir)
      deploy_rap(rap_file, rap_dir, base)
    end
  end

  def initial(webapps_dir)
    Dir.entries(webapps_dir).each do |entry|
      if entry.match(/.rap$/)
        decide(:create, webapps_dir, entry, 'file')
      end
    end
    `cd #{webapps_dir}/thundercat; ./start.sh`
  end

  def standalone_decide(option, base, relative, type)
    zip_file = base + '/' + relative
    zip_dir = path_without_ext(zip_file, base)
    if option == :create
      clean_standalone(zip_dir, zip_file, base) if rap_already_deployed?(zip_dir)
      deploy_standalone(zip_file, zip_dir, base)
    end
  end

  def standalone_initial(standalone_dir)
    Dir.entries(standalone_dir).each do |entry|
      if entry.match(/.zip$/)
        decide(:create, standalone_dir, entry, 'file')
      end
    end
  end

  private

  def deploy_rap(rap_file, rap_dir, base)
    Rappa.new(:input_archive => rap_file, :output_archive => base).expand
    rap_config = rap_dir + '/rap.yml'
    if File.exists?(rap_config)
      rap = YAML.load_file(rap_config)
      start_script = rap[:start_script]
      stop_script = rap[:stop_script]
      bootstrap_script = rap[:bootstrap]
      p "1. found boostrap script: #{bootstrap_script}"
      `cd #{rap_dir} ; chmod +x #{start_script}`
      `cd #{rap_dir} ; chmod +x #{stop_script}`
      if !bootstrap_script.nil?
        p "2. found boostrap script: #{bootstrap_script}"
        `cd #{rap_dir} ; chmod +x #{bootstrap_script}`
        puts "[Thundercat] executing boostrap: #{bootstrap_script}"
        puts `cd #{rap_dir} ; ./#{bootstrap_script}`
      end
      `cd #{rap_dir} ; ./#{start_script}`
      puts "[ThunderCat] Successfully deployed and started app at: #{rap_file}"
      archive_rap(rap_file, base)
    else
      puts '[ThunderCat] no rap file found so could not start app'
    end

  end

  def deploy_standalone(zip_file, zip_dir, base)
    Rappa.new(:input_archive => zip_file, :output_archive => base).standalone_expand
    puts "[ThunderCat] Successfully deployed standalone zip archive at: #{zip_file}"
    archive_zip(zip_file, base)
  end

  def stop_app(rap_dir)
    rap_file = rap_dir + '/rap.yml'
    if File.exists?(rap_file)
      rap = YAML.load_file(rap_file)
      stop_script = rap[:stop_script]
      `cd #{rap_dir} ; chmod +x #{stop_script}`
      `cd #{rap_dir} ; ./#{stop_script}`
    else
      puts '[ThunderCat] no rap file found so could not stop app'
    end
  end

  def archive_existing_app(rap_dir, rap_file, base)
    FileUtils.mv(rap_dir, "#{base}/../archive/#{file_without_ext(rap_file)}.#{Time.now.to_i}")
  end

  def archive_existing_standalone(zip_dir, zip_file, base)
    FileUtils.mv(zip_dir, "#{base}/../standalone_archive/#{file_without_ext(zip_file)}.#{Time.now.to_i}")
  end

  def archive_rap(rap_file, base)
    FileUtils.mv(rap_file, "#{base}/../archive/#{file_without_ext(rap_file)}.#{Time.now.to_i}.rap")
    puts "[ThunderCat] archived rap file: #{rap_file}"
  end

  def archive_zip(zip_file, base)
    FileUtils.mv(zip_file, "#{base}/../standalone_archive/#{file_without_ext(zip_file)}.#{Time.now.to_i}.zip")
    puts "[ThunderCat] archived standalone zip file: #{zip_file}"
  end

  def rap_already_deployed?(rap_dir)
    File.exists?(rap_dir)
  end

  def clean_rap(rap_dir, rap_file, base)
    stop_app(rap_dir)
    archive_existing_app(rap_dir, rap_file, base)
  end

  def clean_standalone(zip_dir, zip_file, base)
    archive_existing_standalone(zip_dir, zip_file, base)
  end

  def path_without_ext(file, base)
    base_name = File.basename(file)
    base + '/' + base_name.chomp(File.extname(base_name))
  end

  def file_without_ext(file)
    base_name = File.basename(file)
    base_name.chomp(File.extname(base_name))
  end

end


class Monitor

  def self.go
    begin
      webapps_dir = File.dirname(__FILE__) + '/webapps'
      standalone_dir = File.dirname(__FILE__) + '/standalone'
      Decision.new.initial(webapps_dir)
      Decision.new.standalone_initial(standalone_dir)
      FSSM.monitor(webapps_dir, '**/*.rap', :directories => true) do
        update { |base, relative, type| puts "updated #{base}, #{relative}, #{type}" }
        delete { |base, relative, type| puts "delete #{base}, #{relative}, #{type}" }
        create { |base, relative, type| Decision.new.decide(:create, base, relative, type) }

        FSSM.monitor(standalone_dir, '**/*.zip', :directories => true) do
        update { |dir, relative, type| puts "updated #{dir}, #{relative}, #{type}" }
        delete { |dir, relative, type| puts "delete #{dir}, #{relative}, #{type}" }
        create { |dir, relative, type| Decision.new.standalone_decide(:create, dir, relative, type) }
      end

      end

    rescue => e
      puts "[ThunderCat] Monitor encountered an error: #{e}"
    end
  end

end

Dante.run('monitor') do |opts|
  Monitor.go
end



