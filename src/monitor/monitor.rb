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

  def deploy_rap(rap_file, rap_dir, base)
    Rappa.new(:input_archive => rap_file, :output_archive => base).expand
    rap_config = rap_dir + '/rap.yml'
    if File.exists?(rap_config)
      rap = YAML.load_file(rap_config)
      start_script = rap[:start_script]
      stop_script = rap[:stop_script]
      `cd #{rap_dir} ; chmod +x #{start_script}`
      `cd #{rap_dir} ; chmod +x #{stop_script}`
      `cd #{rap_dir} ; ./#{start_script}`
      puts "[ThunderCat] Successfully deployed and started app at: #{rap_file}"
      archive_rap(rap_file,base)
    else
      puts '[ThunderCat] no rap file found so could not start app'
    end

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

  def archive_rap(rap_file,base)
    FileUtils.mv(rap_file, "#{base}/../archive/#{file_without_ext(rap_file)}.#{Time.now.to_i}.rap")
    puts "[ThunderCat] archived rap file: #{rap_file}"
  end

  def rap_already_deployed?(rap_dir)
    File.exists?(rap_dir)
  end

  def clean_rap(rap_dir, rap_file, base)
    stop_app(rap_dir)
    archive_existing_app(rap_dir, rap_file, base)
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
      FSSM.monitor(File.dirname(__FILE__) + '/webapps', '**/*.rap', :directories => true) do
        update { |base, relative, type| p "updated #{base}, #{relative}, #{type}" }
        delete { |base, relative, type| p "delete #{base}, #{relative}, #{type}" }
        create { |base, relative, type| p "create #{base}, #{relative}, #{type}"; Decision.new.decide(:create, base, relative, type) }
      end
    rescue => e
      puts "[ThunderCat] Monitor encountered an error: #{e}"
    end
  end

end

Dante.run('monitor') do |opts|
  Monitor.go
end



