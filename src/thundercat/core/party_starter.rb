require 'fileutils'

class PartyStarter

  def initialize(webapp)
    @webapp = webapp
  end

  def run(command_property)
    FileUtils.chdir(@webapp[:location])
    Bundler.clean_system("./#{@webapp[command_property]}")
  end

  def remove
   FileUtils.rm_rf(@webapp[:location])
  end

end