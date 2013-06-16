require File.dirname(__FILE__) + '/../core/pid_info'
require 'yaml'

class WebAppStatus

  def initialize(webapps_path)
    @webapps_path = append_trailing_slash(webapps_path)
  end

  def discover
    get_status(find_rap_data)
  end

  private

  def get_status(rap_data)
    webapps = []
    rap_data.each do |data|
      pids = data[:pids]
      webapps << PidInfo.new(pids).discover.merge(data)
    end
    webapps
  end

  def find_rap_data
    webapps = []
    if File.exists?(@webapps_path)
      Dir.entries(@webapps_path).each do |entry|
        #p entry
        if File.directory?(@webapps_path + entry) and !%w(. ..).include?(@webapps_path + entry)
          contents = Dir.entries(@webapps_path + entry)
          #p contents
          if contents.include?('rap.yml')
            webapps << YAML::load_file(@webapps_path + entry + '/rap.yml')
          end
        end
      end
    end
    webapps
  end

  def append_trailing_slash(path)
    path = "#{path}/" if path[-1] != '/'
    path
  end

end

