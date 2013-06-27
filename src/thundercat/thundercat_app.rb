require 'sinatra'
require 'sinatra/form_helpers'
require 'sinatra/simple_auth'
require 'sinatra/flash'
require 'sinatra/redirect_with_flash'
require 'yaml'
require File.dirname(__FILE__) + '/core/web_app_status'
require File.dirname(__FILE__) + '/core/party_starter'

enable :sessions
set :password, 'password'
set :home, '/admin'
set :views, settings.root + '/views'
set :public_folder, settings.root + '/public'
helpers Sinatra::FormHelpers

get '/login' do
  erb :login
end

get '/admin' do
  protected!
  @webapps = discover_webapps
  erb :admin
end

get '/services/start/:id' do
  protected!
  PartyStarter.new(discover_webapps[params[:id].to_i]).run(:start_script)
  redirect '/admin', :notice => 'Started Application'
end

get '/services/stop/:id' do
  protected!
  PartyStarter.new(discover_webapps[params[:id].to_i]).run(:stop_script)
  redirect '/admin', :notice => 'Stopped Application'
end

get '/services/remove/:id' do
  protected!
  PartyStarter.new(discover_webapps[params[:id].to_i]).remove
  redirect '/admin', :notice => 'Removed Application'
end

post '/upload' do
  if params.empty?
    redirect '/admin', :notice => 'ERROR You must supply a valid .rap archive!'
  else
    tempfile = params['rapfile'][:tempfile]
    filename = params['rapfile'][:filename]
    if !filename.nil? and filename.match(/.rap$/)
      File.open(File.dirname(__FILE__) + '/../' + filename, "w") do |f|
        f.write(tempfile.read)
      end
      redirect '/admin', :notice => "Uploaded: #{filename}"
    else
      redirect '/admin', :notice => 'ERROR You must supply a valid .rap archive!'
    end
  end

end


get '/' do
  if authorized?
    redirect '/admin'
  else
    erb :login
  end
end

private

def discover_webapps
  webapps_path = File.dirname(__FILE__) + '/../'
  WebAppStatus.new(webapps_path).discover
end
