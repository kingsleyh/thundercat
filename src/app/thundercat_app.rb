require 'sinatra'
require 'sinatra/form_helpers'
require 'sinatra/simple_auth'
require 'yaml'
require File.dirname(__FILE__) + '/core/web_app_status'

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

  webapps_path = File.dirname(__FILE__) + '/webapps/'
  @webapps = WebAppStatus.new(webapps_path).discover

  erb :admin
end

get '/' do
  if authorized?
    redirect '/admin'
  else
    erb :login
  end
end
