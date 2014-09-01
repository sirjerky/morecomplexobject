"use strict";

module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    jshint: {
      files:[ 
        'app/js/**/*.js'
        ],
      options: {
        jshintrc: true
      }
    }
  });

  grunt.registerTask('default', ['jshint']);

};
