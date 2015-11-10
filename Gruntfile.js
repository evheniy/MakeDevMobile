module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        /* Check code style */
        jshint: {
            js: ['Gruntfile.js', './src/*.js'],
            options: {
                reporter: require('jshint-stylish')
            }
        },
        jslint: {
            client: {
                src: ['Gruntfile.js', './src/*.js'],
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
                    './src/*.html'
                ]
            }
        },
        lesslint: {
            src: ['./src/**/*.less']
        },
        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ['./src/css/*.css']
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
                files: ['./src/**.js'],
                options: {
                    livereload: true
                }
            },
            /* Watching for .less files changes */
            less: {
                files: [
                    './src/less/*.less'
                ],
                tasks: ['lesslint', 'less:development', 'concat_css', 'cssmin'],
                options: {
                    reload: true
                }
            },
            css: {
                files: [
                    './src/css/*.css'
                ],
                tasks: ['csslint', 'concat_css', 'cssmin'],
                options: {
                    reload: true
                }
            },
            html: {
                files: [
                    './src/index.html'
                ],
                tasks: ['htmllint', 'htmlmin'],
                options: {
                    reload: true
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
                tasks: ['build'],
                options: {
                    reload: true
                }
            }
        },
        copy: {
            backbone: {
                src: './bower_components/backbone/backbone.js',
                dest: './web/js/backbone.js'
            },
            jquery: {
                src: './bower_components/jquery/dist/jquery.min.js',
                dest: './web/js/jquery.min.js'
            },
            jquery_map: {
                src: './bower_components/jquery/dist/jquery.min.map',
                dest: './web/js/jquery.min.map'
            },
            underscore: {
                src: './bower_components/underscore/underscore-min.js',
                dest: './web/js/underscore-min.js'
            },
            underscore_map: {
                src: './bower_components/underscore/underscore-min.map',
                dest: './web/js/underscore-min.map'
            },
            materialize_css: {
                src: './bower_components/materialize/dist/css/materialize.min.css',
                dest: './web/css/materialize.min.css'
            },
            materialize_font: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: './bower_components/materialize/dist/font/material-design-icons/*',
                        dest: './web/font/material-design-icons/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: './bower_components/materialize/dist/font/roboto/*',
                        dest: './web/font/roboto/',
                        filter: 'isFile'
                    }
                ]

            },
            materialize_js: {
                src: './bower_components/materialize/dist/js/materialize.min.js',
                dest: './web/js/materialize.min.js'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    './web/index.html': './src/index.html'
                }
            }
        },
        /* images packing */
        pngmin: {
            src: [
                './src/*.png',
                './src/img/*.png'
            ],
            dest: './web'
        },
        gifmin: {
            src: ['./src/**/*.gif'],
            dest: './web'
        },
        jpgmin: {
            src: ['./src/**/*.jpg'],
            dest: './web',
            quality: 80
        },
        /* LESS compiling */
        less: {
            development: {
                files: [
                    /* Compile components' less stylesheets */
                    {
                        expand: true,
                        cwd: './src/less',
                        src: ['*.less'],
                        dest: './tmp/css',
                        ext: '.css'
                    }
                ]
            }
        },
        /* Concatenating all styles into single file*/
        concat_css: {
            all: {
                src: ['./src/css/*.css', './tmp/css/*.css'],
                dest: "./tmp/css/style.min.css"
            }
        },
        cssmin: {
            target: {
                files: {
                    './web/css/style.min.css': ['./tmp/css/style.min.css']
                }
            }
        },
        webpack: {
            app: {
                // webpack options
                entry: "./src/js/main.js",
                output: {
                    path: './tmp/js',
                    filename: 'app.js'
                },
                stats: {
                    // Configure the console output
                    colors: false,
                    modules: true,
                    reasons: true
                },
                inline: true
            }
        },
        uglify: {
            app: {
                files: {
                    './web/js/app.min.js': ['./tmp/js/app.js']
                }
            }
        },
        /* Cleaning build results */
        clean: {
            build: [
                './web',
                './tmp'
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
    grunt.loadNpmTasks('grunt-lesslint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-casperjs');
    //grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('lint', ['htmllint', 'jshint', 'jslint', 'lesslint', 'csslint']);
    grunt.registerTask('build', ['clean', 'lint', 'copy', 'htmlmin', 'pngmin', 'gifmin', 'jpgmin', 'less:development', 'concat_css', 'cssmin', 'webpack', 'uglify']);
    grunt.registerTask('serve', ['build', 'connect:server', 'watch']);
    grunt.registerTask('default', 'serve');
    //grunt.registerTask('test', ['build', 'casperjs']);
};