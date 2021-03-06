require 'rake'
require 'jeweler'
require 'rappa'
require 'fileutils'
require 'yaml'
require 'sys/proctable'

Jeweler::Tasks.new do |gem|

  gem.name = 'thundercat'
  gem.homepage = 'https://github.com/masterthought/thundercat'
  gem.license = 'Apache 2.0'
  gem.email = 'kingsley@masterthought.net'
  gem.authors = ['Kingsley Hendrickse']

  gem.summary = %Q{Thundercat Rack deployment and monitoring}
  gem.description = <<-EOF
Easy way to deploy and monitor Rack applications as .rap archives
  EOF

  gem.executables = ['/thundercat']
  gem.files = Dir.glob('src/app/**/*')
end
Jeweler::RubygemsDotOrgTasks.new

namespace :thin do

  desc "Start The Application"
  task :start do
    puts "Restarting The Application..."
    system("thin start -e production -p 9998 -s 2 -d")
  end

  desc "Stop The Application"
  task :stop do
    puts "Stopping The Application..."
    Dir.new(File.dirname(__FILE__) + '/tmp/pids').each do |file|
      prefix = file.to_s
      if prefix[0, 4] == 'thin'
        str = "thin stop -P#{File.dirname(__FILE__)}/tmp/pids/#{file}"
        puts "Stopping server on port #{file[/\d+/]}..."
        system(str)
      end
    end
  end

  desc "Restart The Application"
  task :restart do
    puts "Restarting The Application..."
    Rake::Task["thin:stop"].execute
    Rake::Task["thin:start"].execute
  end

end

namespace :tc do

  desc "Increment Version"
  task :version do
    rap_file = File.open(File.dirname(__FILE__) + '/src/thundercat/rap.yml')
    rap = YAML::load(rap_file)
    digit = rap[:version].split('.')[-1].to_i + 1
    rap[:version] = '0.0.' + digit.to_s
    File.open(rap_file, 'w') { |f| f.puts rap.to_yaml }
  end

  desc "Rappup Thundercat"
  task :rap do
    FileUtils.rm_rf(File.dirname(__FILE__) + '/src/rap/thundercat.rap')
    Rake::Task["tc:version"].execute
    Rappa.new(:input_directory => File.dirname(__FILE__) + '/src/thundercat', :output_directory => File.dirname(__FILE__) + '/src/rap').package
  end

  desc "Deploy Latest Monitor and Dev Thundercat locally"
  task :dev do
    Rake::Task["tc:rap"].execute
    dev_instance = File.dirname(__FILE__) + '/devthunder/'
    FileUtils.rm_rf(dev_instance) if File.exists?(dev_instance)
    `bin/thundercat #{dev_instance}`
  end

  desc "Deploy latest Dev Thundercat into existing monitor"
  task :deploy do
    Rake::Task["tc:rap"].execute
    FileUtils.cp(File.dirname(__FILE__) + '/src/rap/thundercat.rap', File.dirname(__FILE__) + '/devthunder/webapps')
  end

end

namespace :karma do

  desc "Start Karma Test Server"
  task :start do
    command = "karma start #{File.dirname(__FILE__) + '/angular-test/config/karma.conf.js'} &"
    puts "Starting Karma Test Server with command: #{command}"
    system(command)
  end

  desc "Stop Karma Test Server"
  task :stop do
    include Sys
    pid = nil
    ProcTable.ps{|pr| pid = pr.pid.to_s if pr.cmdline.match('usr/local/bin/karma start')}
    puts "Killing Karma Test Server running with pid: #{pid}"
    system("sudo kill -9 #{pid}")
  end

end
