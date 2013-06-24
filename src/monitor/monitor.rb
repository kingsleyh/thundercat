#!/usr/bin/env ruby
require 'fssm'
require 'dante'

class Monitor

  def self.go
    begin
      FSSM.monitor(File.dirname(__FILE__) + '/webapps', '**/*', :directories => true) do
        update { |base, relative, type| p "updated #{base}, #{relative}, #{type}" }
        delete { |base, relative, type| p "delete #{base}, #{relative}, #{type}" }
        create { |base, relative, type| p "create #{base}, #{relative}, #{type}" }
      end
    rescue => e
      puts "[ThunderCat] Monitor encountered an error: #{e}"
    end
  end

end

Dante.run('monitor') do |opts|
 Monitor.go
end

#command = ARGV[0]
#if command.nil? or command.empty?
#  puts '[ThunderCat] You must supply either start or stop'
#elsif command == "start"
#  puts '[ThunderCat] Starting ThunderCat monitor at: ' + File.dirname(__FILE__) + '/../app/webapps'
#  Monitor.go
#elsif command == "stop"
#  puts '[ThunderCat] Stopping ThunderCat monitor at: ' + File.dirname(__FILE__) + '/../app/webapps'
#  exit 0
#end




