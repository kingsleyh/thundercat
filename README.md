# Deploy & Monitor RAP Packaged Rack Applications

ThunderCat is a ruby application container for Rack based applications. It is very similar in concept to war files and Tomcat. When you drop a .rap file into ThunderCats webapps directory it will auto expand and start the webapp.
There is a web admin panel which lets you upload a .rap archive and also see which webapps are running and start/stop/remove them.

[![Build Status](https://travis-ci.org/masterthought/thundercat.png?branch=master)](https://travis-ci.org/masterthought/thundercat)
[![thundercat Downloads](http://www.gemetric.me/images/thundercat.gif)](https://rubygems.org/gems/thundercat)

## Background

ThunderCat aims to be a sort of rack application container. It's not really a container but more of a place to deploy all your sinatra/rails/rack applications in one place and start/stop/remove them. The core
philosophy is to have a single artifact (a .rap archive) which can be dropped into ThunderCat and auto startup to make deployment extremely simple.

It might not suit everyone but it could be very useful for deploying internal applications inside a big corporation or even just your blog up to your website if you control the server it lives on. Instead of using something
like capistrano you just drop a .rap archive into ThunderCat and it does the rest.

Currently thin and unicorn are supported but raise and issue if you want any others supported.

ThunderCat is designed to be used in conjunction with [Rappa](https://github.com/masterthought/rappa). Using Rappa you create your .rap archive and then upload it to ThunderCat via the admin panel or use the rappa deploy command.

## Install

gem install thundercat

## Usage

First you need to create your ThunderCat file structure:

     thundercat my_apps

This will create a directory structure with the path you provide it - the structure is as follows:

![file structure]
(https://github.com/masterthought/thundercat/raw/master/.README/thundercat_structure.jpg)

The start.sh and stop.sh scripts are used to start and stop ThunderCat. Logs go into the logs directory and webapps go into the webapps directory. The archive directory holds backups when you deploy/remove apps via the admin panel.
The monitor.rb file is what gets started and monitors the webapps directory for changes.

When you start ThunderCat for the first time it starts on port 9898 with the following credentials:

     username: thundercat
     password: thundercat

## Config

You can configure the username and password and the port ThunderCat starts on in the config.yml in webapps/thundercat. You have to startup thundercat first in order for the thundercat.rap to be expanded and installed - but after that you can go and edit the config.yml and restart thundercat.
You can also set the api_key - this is what you need in order to deploy from the rappa command as shown below.

### deploy

This deploys a rap archive to a thundercat server e.g.

     rappa deploy -r myapp.rap -u http://thundercat/api/deploy -k your_api_key

-r is to specify your rap archive and -u is the url of the deploy api where your thundercat instance is running. -k is your api_key which is configured in your
thundercat server.

## Upgrading

There is a very crude upgrade script starting from thundercat-0.0.8 - This is the process:

   * stop your exising monitor using ./stop.sh
   * copy your webapps/thundercat/config.yml somewhere safe
   * thundercat-upgrade your_thundercat_install_folder
   * start the monitor again using ./start.sh
   * replace webapps/thundercat/config.yml with your original one
   * restart monitor - ./stop.sh && ./start.sh
   * check everything is ok

## Screenshots

### Admin Page

![admin page]
(https://github.com/masterthought/thundercat/raw/master/.README/thundercat_admin.jpg)

### Login Page

![login page]
(https://github.com/masterthought/thundercat/raw/master/.README/thundercat_login.jpg)

## Additional Info

The bootstrap.sh could be used to set an environment variable like RAILS_ENV and the start.sh could contain a rake command in which the rakefile contains a start command that uses the environment variable to deploy with the correct environment.
This does mean you will have to expand the rap, update the bootstrap script and then package again if deploying to different environments needs different config. Any suggestions around this area are welcome and since this is
in the early stages it's fairly experimental.


## Develop

Interested in contributing? Great just let me know how you want to help.

