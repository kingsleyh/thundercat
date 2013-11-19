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

def version
   rap_file = File.open(File.dirname(__FILE__) + '/rap.yml')
   rap = YAML::load(rap_file)
   rap[:version]
 end

$context = config_file[:context_root]
$version = version
home_path = $context.empty? ? '/admin' : "#{$context}admin"
context_path = $context.empty? ? '/' : $context

set :protection, :except => [:http_origin]
enable :sessions
set :username, config_file[:username]
set :password, config_file[:password]
set :home, home_path
set :context, context_path
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

# curl -X PUT -i -F file=@standalone_folder.zip http://127.0.0.1:8089/api/standalone_deploy?key=api_key
put '/api/standalone_deploy' do
  error 401 unless valid_key?(params[:key])
  tempfile = params['file'][:tempfile]
  filename = params['file'][:filename]
  if !filename.nil? and filename.match(/.zip$/)
    File.open(File.dirname(__FILE__) + '/../../standalone/' + filename, "w") do |f|
      f.write(tempfile.read)
    end
    'SUCCESS'
  else
    'ERROR You must supply a valid .zip archive!'
  end
end

post '/upload' do
  protected!
  if params.empty?
    redirect settings.home, :notice => 'ERROR You must supply a valid .rap archive!'
  else
    tempfile = params['rapfile'][:tempfile]
    filename = params['rapfile'][:filename]
    if !filename.nil? and filename.match(/.rap$/)
      File.open(File.dirname(__FILE__) + '/../' + filename, "w") do |f|
        f.write(tempfile.read)
      end
      redirect settings.home, :notice => "Uploaded: #{filename}"
    else
      redirect settings.home, :notice => 'ERROR You must supply a valid .rap archive!'
    end
  end

end

get '/' do
  if authorized?
    redirect settings.home
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


