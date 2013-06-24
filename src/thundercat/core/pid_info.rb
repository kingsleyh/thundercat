require 'sys/proctable'

class PidInfo

  include Sys

  def initialize(pid_path)
    @pid_path = pid_path
  end

  def discover
    {:pid_data => get_pid_status(get_pids)}
  end

  private

  def get_pids
    pids = []
    if File.exists?(@pid_path)
      Dir.entries(@pid_path).each do |entry|
        extension = File.extname(File.basename(entry))
        if extension == '.pid'
          pids << File.read(@pid_path + '/' + entry)
        end
      end
    end
    pids
  end

  def get_pid_status(pids)
    pid_data = []
    pids.each do |pid|
      pid_info = {}
      process = ProcTable.ps(pid.to_i)
      pid_info[:pid] = pid
      pid_info[:port] = get_port_from_pid(process)
      pid_info[:start_time] = get_start_time(process)
      pid_data << pid_info
    end
    pid_data
  end

  def get_port_from_pid(process)
    port = 'unknown'
    if ProcTable.fields.include?('cmdline')
      process.cmdline.split(':')[-1].to_s.strip.match(/(\d+)/)
      port = $1
    end
    port
  end

  def get_start_time(process)
    time = 'unknown'
    if ProcTable.fields.include?('starttime')
      time = process.starttime.to_s.strip
    end
    time
  end

end
