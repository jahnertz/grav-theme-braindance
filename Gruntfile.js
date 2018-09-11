module.exports = function(grunt) {
    const Fiber = require('fibers');
    const sass = require('node-sass');
    
    //require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	sass: {
	    options: {
		implementation: sass,
		fiber: Fiber,
		sourceMap: true,
		includePaths: [ '../antimatter/scss' ],
	    },
	    dist: {
		files: {
		    'css-compiled/template.css': 'scss/template.scss',
		},
	    },
	},
	watch: {
	    sass: {
		files: ['scss/**/*.scss'],
		tasks: ['sass'],
		options: {
		    spawn: false,
		},
	    },
	},
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
	
    grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['build']);
};
