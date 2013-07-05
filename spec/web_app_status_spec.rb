require 'rspec'
require File.dirname(__FILE__) + '/../src/thundercat/core/web_app_status'

describe "IntegrationTests" do

  it 'should list all the available apps in the webapps directory' do
    webapps = File.dirname(File.expand_path(__FILE__)) + '/../integration/webapps'
    WebAppStatus.new(webapps).discover.should == [{:pid_data => [], :has_pids => "no", :webapp => "sinatra_app_1", :location => "/Users/kings/development/projects/thundercat/spec/../integration/webapps/sinatra_app_1", :id => 0, :name => "My Sinatra App", :version => "0.0.1", :server_type => "thin", :start_script => "start.sh", :stop_script => "stop.sh", :pids => "tmp/pids", :description => "Cool App", :is_thundercat => "no"}, {:pid_data => [], :has_pids => "no", :webapp => "sinatra_app_2", :location => "/Users/kings/development/projects/thundercat/spec/../integration/webapps/sinatra_app_2", :id => 1, :name => "My Sinatra App", :version => "0.0.2", :server_type => "thin", :start_script => "start.sh", :stop_script => "stop.sh", :pids => "tmp/pids", :description => "Cool App", :is_thundercat => "no"}]
  end

  it 'should list all the available apps in the webapps directory as json' do
    webapps = File.dirname(File.expand_path(__FILE__)) + '/../integration/webapps'
    WebAppStatus.new(webapps).discover_as_json.should == '[{"pid_data":[],"has_pids":"no","webapp":"sinatra_app_1","location":"/Users/kings/development/projects/thundercat/spec/../integration/webapps/sinatra_app_1","id":0,"name":"My Sinatra App","version":"0.0.1","server_type":"thin","start_script":"start.sh","stop_script":"stop.sh","pids":"tmp/pids","description":"Cool App","is_thundercat":"no"},{"pid_data":[],"has_pids":"no","webapp":"sinatra_app_2","location":"/Users/kings/development/projects/thundercat/spec/../integration/webapps/sinatra_app_2","id":1,"name":"My Sinatra App","version":"0.0.2","server_type":"thin","start_script":"start.sh","stop_script":"stop.sh","pids":"tmp/pids","description":"Cool App","is_thundercat":"no"}]'
  end

end

describe "UnitTests" do

  it 'should list all the available apps in the webapps directory' do
    file=mock('File')
    pid_info=mock('PidInfo')
    pid_info_instance_1=mock('PidInfoInstance1')
    pid_info_instance_2=mock('PidInfoInstance2')
    dir=mock('Dir')
    yaml=mock('YAML')

    rap1 = {:name => 'My Sinatra App 1',
            :version => '0.0.2',
            :server_type => 'thin',
            :start_script => 'start.sh',
            :stop_script => 'stop.sh',
            :pids => 'tmp/pids',
            :description => 'Cool App'}

    rap2 = {:name => 'ThunderCat',
            :version => '0.0.2',
            :server_type => 'thin',
            :start_script => 'start.sh',
            :stop_script => 'stop.sh',
            :pids => 'tmp/pids',
            :description => 'ThunderCat'}

    file.should_receive(:exists?).with('webapps_dir/').and_return(true)
    dir.should_receive(:entries).with('webapps_dir/').and_return(['app1', 'app2'])

    file.should_receive(:directory?).with('webapps_dir/app1').and_return(true)
    file.should_receive(:directory?).with('webapps_dir/app2').and_return(true)

    dir.should_receive(:entries).with('webapps_dir/app1').and_return(['rap.yml'])
    yaml.should_receive(:load_file).with('webapps_dir/app1/rap.yml').and_return(rap1)

    dir.should_receive(:entries).with('webapps_dir/app2').and_return(['rap.yml'])
    yaml.should_receive(:load_file).with('webapps_dir/app2/rap.yml').and_return(rap2)

    pid_info.should_receive(:new).with('webapps_dir/app1/tmp/pids').and_return(pid_info_instance_1)
    pid_info.should_receive(:new).with('webapps_dir/app2/tmp/pids').and_return(pid_info_instance_2)
    pid_info_instance_1.should_receive(:discover).and_return({:pid_data => ['1111', '2222']})
    pid_info_instance_2.should_receive(:discover).and_return({:pid_data => ['3333', '4444']})
    WebAppStatus.new('webapps_dir', file, pid_info, dir, yaml).discover.should == [{:pid_data => ["1111", "2222"], :webapp => "app1", :location => "webapps_dir/app1", :id => 0, :name => "My Sinatra App 1", :version => "0.0.2", :server_type => "thin", :start_script => "start.sh", :stop_script => "stop.sh", :pids => "tmp/pids", :description => "Cool App", :is_thundercat => "no"}, {:pid_data => ["3333", "4444"], :webapp => "app2", :location => "webapps_dir/app2", :id => 1, :name => "ThunderCat", :version => "0.0.2", :server_type => "thin", :start_script => "start.sh", :stop_script => "stop.sh", :pids => "tmp/pids", :description => "ThunderCat", :is_thundercat => "yes"}]
  end


end