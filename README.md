bootstrap
=========

Straight Razor is a bootstrap framework that cuts out lots of time setting up new projects :barber:

This is a bootstrap framework that is takes care of setting up all the boring parts of a new project

Get started in just 3 easy steps

  	git clone https://github.com/ninjakttty/straightrazor.git

		cd straightrazor  ( This doesn't count as a step )

		npm install && bower install

		grunt

this will setup a basic frame work witha simple static server for the front end

* Backbone
* Marionette
* Underscore
* JQuery
* Handlebars precompiled and nice
* Twitter bootstrap for CSS

All part of the package out of the box and loaded with requirejs, but easily replacable if you want

		bower install <*package name*>

		grunt bower

##  There's more

* a restify backend server as well


to see a list of grunt tasks that Straight Razor has

	grunt --help


Things of interest
===
	/assets  Less and Handlebar templates go here
	/public/views/app.js  This is the starting point for your app
	/server this is the backend server directory
	/server/app.js starting point for restify server
  
## License

Copyright 2013 Yuri A. Parsons

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.  
