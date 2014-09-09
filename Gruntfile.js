"use strict";

module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha')

  grunt.initConfig({
    jshint: {
      files:[ 
        'app/js/**/*.js'
        ],
      options: {
        jshintrc: true
      }
    },
    mocha: {
      test: {
        options: {
          reporter: "Nyan",
          run: true
        },
        src: 'test/**/*.html'
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'mocha']);

};
