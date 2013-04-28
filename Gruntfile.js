/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    bower: {
      target: {
        rjsConfig: 'public/scripts/main.js',
        baseUrl: '/scripts/vendor'
      }
    },
    jshint: {
      options: {
        boss: true,
        browser: true,
        curly: true,
        devel: true,
        eqeqeq: true,
        eqnull: true,
        force: true,
        globals: {},
        immed: true,
        jquery: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        "predef": [
          "define",
          "require"]
      },
      gruntfile: {
        src: ['public/scripts/**/*js', '!public/scripts/vendor/**']
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    less: {
      development: {
        options: {
          dumpLineNumbers: "all"
        },
        files: {
          "public/stylesheets/less.css": "assets/less/main.less"
        }
      }
    },
    parallel: {
      tasks: ['server', 'nodemon', 'watch']
    },
    server: {
      port: 3000,
      app: "public",
      livereload: true,
      openBrowser: "Google Chrome Canary" // Google Chrome Canary, Google Chrome, Safari, Firefox , or false
    },
    watch: {
      less: {
        files: 'assets/less/**/*less',
        tasks: ['less']
      },
      jshint: {
        files: 'public/scripts/**/*js',
        tasks: ['jshint']
      },
      handlebars: {
        files: 'assets/templates/**/*hbs',
        tasks: ['handlebars']
      }
    },
    nodemon: {
        development: {
          options: {
            file: 'server/app.js',
            ignoredFiles: ['README.md', 'node_modules/**'],
            watchedFolders: ['server'],
            debug: true,
            delayTime: 1
          }
        }
      },
      todos: {
        options: {},
        src: ['server/**/*js', 'public/scripts/**/*js', '!public/scripts/vendor/**']
      },

      handlebars: {
        dist: {
          options: {
            amd: true
          },
          files: {
            "public/scripts/templates.js": ["assets/templates/**/*.hbs"]
          }
        }
      }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-todos');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadTasks('tasks');

  grunt.registerTask('startDev', ['todos', 'less', 'handlebars', 'parallel']);

  // Default task.
  grunt.registerTask('default', ['startDev']);

};