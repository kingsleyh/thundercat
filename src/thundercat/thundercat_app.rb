require 'sinatra'
require 'sinatra/form_helpers'
require 'sinatra/simple_auth'
require 'sinatra/flash'
require 'sinatra/redirect_with_flash'
require 'yaml'
require File.dirname(__FILE__) + '/core/web_app_status'
require File.dirname(__FILE__) + '/core/party_starter'

def config_file
  YAML::load_file(settings.root + '/config.yml')
end

enable :sessions
set :username, config_file[:username]
set :password, config_file[:password]
set :home, '/admin'
set :views, settings.root + '/views'
set :public_folder, settings.root + '/public'
helpers Sinatra::FormHelpers

get '/login' do
  erb :login
end

get '/admin' do
  protected!
  erb :admin
end

get '/services/apps' do
  protected!
  webapps_path = File.dirname(__FILE__) + '/../'
  WebAppStatus.new(webapps_path).discover_as_json
end

get '/services/start/:id' do
  protected!
  app = discover_webapps[params[:id].to_i]
  PartyStarter.new(app).run(:start_script)
end

get '/services/stop/:id' do
  protected!
  app = discover_webapps[params[:id].to_i]
  PartyStarter.new(app).run(:stop_script)
end

get '/services/remove/:id' do
  protected!
  app = discover_webapps[params[:id].to_i]
  PartyStarter.new(app).remove
end

# curl -X PUT -i -F file=@sinatra_app.rap http://127.0.0.1:8089/api/deploy?key=api_key
put '/api/deploy' do
  error 401 unless valid_key?(params[:key])
  tempfile = params['file'][:tempfile]
  filename = params['file'][:filename]
  if !filename.nil? and filename.match(/.rap$/)
    File.open(File.dirname(__FILE__) + '/../' + filename, "w") do |f|
      f.write(tempfile.read)
    end
    'SUCCESS'
  else
    'ERROR You must supply a valid .rap archive!'
  end
end

post '/upload' do
  protected!
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

def valid_key?(key)
  key == config_file[:key]
end


