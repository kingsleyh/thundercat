require File.dirname(__FILE__) + '/../core/pid_info'
require 'yaml'
require 'json'

class WebAppStatus

  def initialize(webapps_path,file=File,pid_info=PidInfo,dir=Dir,yaml=YAML)
    @file = file
    @pid_info = pid_info
    @dir = dir
    @yaml = yaml
    @webapps_path = append_trailing_slash(webapps_path)
  end

  def discover
    get_status(find_rap_data)
  end

  def discover_as_json
    discover.to_json
  end

  private

  def get_status(rap_data)
    webapps = []
    rap_data.each do |data|
      pids = @webapps_path + data[:webapp] + '/' + data[:pids]
      webapps << @pid_info.new(pids).discover.merge(data)
    end
    webapps
  end

  def find_rap_data
    counter = 0
    webapps = []
    if @file.exists?(@webapps_path)
      @dir.entries(@webapps_path).each do |entry|
        #p entry
        if @file.directory?(@webapps_path + entry) and !%w(. ..).include?(@webapps_path + entry)
          contents = @dir.entries(@webapps_path + entry)
          #p contents
          if contents.include?('rap.yml')
            data = {:webapp => entry, :location => @webapps_path + entry, :id => counter}
            webapps << data.merge(@yaml::load_file(@webapps_path + entry + '/rap.yml'))
            counter+=1
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

