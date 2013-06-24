class PartyStarter

  def initialize(webapp)
    @webapp = webapp
  end

  def run(command_property)
    `cd #{@webapp[:location]} ; ./#{@webapp[command_property]}`
  end

  def remove

  end

end