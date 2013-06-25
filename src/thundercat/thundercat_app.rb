require 'sinatra'
require 'sinatra/form_helpers'
require 'sinatra/simple_auth'
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
  redirect '/admin'
end

get '/services/stop/:id' do
  protected!
  PartyStarter.new(discover_webapps[params[:id].to_i]).run(:stop_script)
  redirect '/admin'
end

get '/services/remove/:id' do
  protected!
  PartyStarter.new(discover_webapps[params[:id].to_i]).remove
  redirect '/admin'
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
