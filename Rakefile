require 'rake'
require 'jeweler'

Jeweler::Tasks.new do |gem|

  gem.name        = 'thundercat'
  gem.homepage    = 'https://github.com/masterthought/thundercat'
  gem.license     = 'Apache 2.0'
  gem.email       = 'kingsley@masterthought.net'
  gem.authors     = ['Kingsley Hendrickse']

  gem.summary     = %Q{Thundercat Rack deployment and monitoring}
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
