module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        jshint: {
            js: ['Gruntfile.js', 'app/*.js'],
            options: {
                reporter: require('jshint-stylish')
            }
        },
        jslint: {
            client: {
                src: ['Gruntfile.js', 'app/*.js'],
                directives: {
                    browser: true,
                    predef: [
                        'module',
                        'require'
                    ]
                },
                options: {
                    junit: 'out/client-junit.xml'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jslint');
    //grunt.loadNpmTasks('grunt-lesslint');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-connect');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-less');
    //grunt.loadNpmTasks('grunt-concat-css');
    //grunt.loadNpmTasks('grunt-contrib-clean');
    //grunt.loadNpmTasks('grunt-casperjs');
    //grunt.loadNpmTasks('grunt-webpack');
    //grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('default', ['jshint', 'jslint']);
    //grunt.registerTask('lint', ['jshint', 'jslint']);
    //grunt.registerTask('build', ['clean', 'lint', 'less:development', 'concat_css']);
    //grunt.registerTask('serve', ['build', 'connect:server', 'watch']);
    //grunt.registerTask('test', ['build', 'casperjs']);
};