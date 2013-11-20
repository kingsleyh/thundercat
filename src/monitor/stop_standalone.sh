#!/usr/bin/env ruby
require 'fileutils'

begin

pid = File.read(File.dirname(__FILE__) + '/log/standalone.pid').strip
`kill -9 #{pid}`
FileUtils.rm(File.dirname(__FILE__) + '/log/standalone.pid')
puts "[ThunderCat] stopped thundercat standalone with process: #{pid}"

rescue => e
 puts "[ThunderCat] Oops something went wrong: #{e}"
end