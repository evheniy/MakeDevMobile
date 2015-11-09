module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        /* Check code style */
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
        },
        /* Running http server */
        connect: {
            server: {
                options: {
                    middleware: function (connect) {
                        return [
                            connect.static('web')
                        ];
                    },
                    open: true,
                    hostname: 'localhost'
                }
            }
        },
        /* Watching for changes in project directory */
        watch: {
            /*
             * Watching targets of preprocessors(dest) for livereload
             */
            targets: {
                files: ['app/scripts/**/dest/**.js',
                    'app/app.js',
                    'app/scripts/router.js',
                    'app/styles/dest/styles.css'
                    ],
                options: {
                    livereload: true
                }
            },
            /* Watching for scripts changes */
            scripts: {
                files: [
                    './app/scripts/controllers/src/**/**.jsx',
                    './app/scripts/ui-components/src/**/**.jsx',
                    './app/app.js',
                    './app/scripts/router.js'
                ],
                tasks: ['build', 'test'],
                options: {
                    spawn: true,
                    reload: true
                }
            },
            /* Watching for Gruntfile changes */
            gruntfile: {
                files: ['./Gruntfile.js'],
                options: {
                    reload: true
                }
            }
        },
        copy: {
            backbone: {
                src: 'bower_components/backbone/backbone.js',
                dest: 'web/js/backbone.js'
            },
            jquery: {
                src: 'bower_components/jquery/dist/jquery.min.js',
                dest: 'web/js/jquery.min.js'
            },
            jquery_map: {
                src: 'bower_components/jquery/dist/jquery.min.map',
                dest: 'web/js/jquery.min.map'
            },
            underscore: {
                src: 'bower_components/underscore/underscore-min.js',
                dest: 'web/js/underscore-min.js'
            },
            underscore_map: {
                src: 'bower_components/underscore/underscore-min.map',
                dest: 'web/js/underscore-min.map'
            },
            materialize_css: {
                src: 'bower_components/materialize/dist/css/materialize.min.css',
                dest: 'web/css/materialize.min.css'
            },
            materialize_font: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: 'bower_components/materialize/dist/font/material-design-icons/*',
                        dest: 'web/font/material-design-icons/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'bower_components/materialize/dist/font/roboto/*',
                        dest: 'web/font/roboto/',
                        filter: 'isFile'
                    }
                ]

            },
            materialize_js: {
                src: 'bower_components/materialize/dist/js/materialize.min.js',
                dest: 'web/js/materialize.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-lesslint');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-less');
    //grunt.loadNpmTasks('grunt-concat-css');
    //grunt.loadNpmTasks('grunt-contrib-clean');
    //grunt.loadNpmTasks('grunt-casperjs');
    //grunt.loadNpmTasks('grunt-webpack');
    //grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('default', ['jshint', 'jslint', 'copy']);
    grunt.registerTask('serve', ['default', 'connect:server', 'watch']);
    //grunt.registerTask('lint', ['jshint', 'jslint']);
    //grunt.registerTask('build', ['clean', 'lint', 'less:development', 'concat_css']);
    //grunt.registerTask('serve', ['build', 'connect:server', 'watch']);
    //grunt.registerTask('test', ['build', 'casperjs']);
};