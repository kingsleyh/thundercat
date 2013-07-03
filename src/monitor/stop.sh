#!/usr/bin/env ruby
require 'fileutils'

begin

pid = File.read(File.dirname(__FILE__) + '/log/monitor.pid').strip
`kill -9 #{pid}`
FileUtils.rm(File.dirname(__FILE__) + '/log/monitor.pid')
puts "[ThunderCat] stopped thundercat monitor with process: #{pid}"

thunder_dir = File.dirname(__FILE__) + '/webapps/thundercat'
`cd #{thunder_dir} ; chmod +x ./stop.sh`
puts `cd #{thunder_dir} ; ./stop.sh`

puts "[ThunderCat] stopped thundercat webapp"

rescue => e
 puts "[ThunderCat] Oops something went wrong: #{e}"
end