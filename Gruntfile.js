module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        /* Check code style */
        jshint: {
            js: ['Gruntfile.js', 'src/*.js'],
            options: {
                reporter: require('jshint-stylish')
            }
        },
        jslint: {
            client: {
                src: ['Gruntfile.js', 'src/*.js'],
                directives: {
                    browser: true,
                    predef: [
                        'module',
                        'require'
                    ]
                }
            }
        },
        htmllint: {
            index: {
                src: [
                    'src/*.html'
                ]
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
                files: ['src/**.js'],
                options: {
                    livereload: true
                }
            },
            /* Watching for scripts changes */
            scripts: {
                files: [
                    './src/app.js'
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
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'web/index.html': 'src/index.html'
                }
            }
        },
        pngmin: {
            src: [
                'src/*.png',
                'src/img/*.png'
            ],
            dest: 'web/img'
        },
        gifmin: {
            src: ['src/**/*.gif'],
            dest: 'web/img'
        },
        jpgmin: {
            src: ['src/**/*.jpg'],
            dest: 'web/img',
            quality: 80
        },
        /* Cleaning build results */
        clean: {
            build: [
                'web',
                'tmp'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-htmllint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-imagine');
    //grunt.loadNpmTasks('grunt-lesslint');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-less');
    //grunt.loadNpmTasks('grunt-concat-css');
    //grunt.loadNpmTasks('grunt-casperjs');
    //grunt.loadNpmTasks('grunt-webpack');
    //grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('default', ['clean', 'htmllint', 'jshint', 'jslint', 'copy', 'htmlmin', 'pngmin', 'gifmin', 'jpgmin']);
    grunt.registerTask('serve', ['default', 'connect:server', 'watch']);
    grunt.registerTask('lint', ['htmllint', 'jshint', 'jslint']);
    //grunt.registerTask('build', ['clean', 'lint', 'less:development', 'concat_css']);
    //grunt.registerTask('test', ['build', 'casperjs']);
};