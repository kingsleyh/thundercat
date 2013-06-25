#!/usr/bin/env ruby
require 'fssm'
require 'dante'
require 'yaml'

class Decision

  def decide(option, base, relative, type)
    rap_file = base + '/' + relative
    rap_dir = path_without_ext(rap_file,base)
    if option == :create
      clean_rap(rap_dir,file) if rap_already_deployed?(rap_dir)
      deploy_rap(rap_file)
    end

  end

  def deploy_rap(rap_file)

  end

  def stop_app(rap_dir)
    rap_file = rap_dir + '/rap.yml'
    if File.exists?(rap_file)
      rap = YAML.load_file(rap_file)
      stop_script = rap[:stop_script]
      `chmod +x #{stop_script}`
      `cd #{rap_dir} ; ./#{stop_script}`
    end
  end

  def archive_existing_app(rap_dir,file)
    FileUtils.mv(rap_dir,"/../archive/#{file_without_ext(file)}.#{Time.now.to_i}")
  end

  def rap_already_deployed?(rap_dir)
    File.exists?(rap_dir)
  end

  def clean_rap(rap_dir,file)
    stop_app(rap_dir)
    archive_existing_app(rap_dir,file)
  end

  def path_without_ext(file,base)
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
        create { |base, relative, type| p "create #{base}, #{relative}, #{type}"; Decision.decide(:create, base, relative, type) }
      end
    rescue => e
      puts "[ThunderCat] Monitor encountered an error: #{e}"
    end
  end

end

Dante.run('monitor') do |opts|
  Monitor.go
end




