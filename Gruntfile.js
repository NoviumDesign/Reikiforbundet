module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                process: function(src, filepath) {
                    return '\n/* -------- ' + filepath + ' -------- */ \n\n' + src;
                },
            },
            js: {
                src: [
                    '_System/assets/js/*.js',
                    '_System/assets/js/**/*.js',
                    '!_System/assets/js/vendor/*.js',
                    '!_System/assets/js/application.js',
                ],
                dest: '_System/assets/js/application.js'
            }
        },

        sass: {
            development: {
                files: {
                    '_System/assets/css/application.css': '_System/assets/sass/application.sass',
                }
            },
            build: {
                options: {
                    style: 'compressed'
                },
                files: {
                    '_System/assets/css/application.css': '_System/assets/sass/application.sass',
                }
            }
        },

        watch: {
            js: {
                files: ['_System/assets/js/*.js', '_System/assets/js/**/*.js', '!_System/assets/js/application.js'],
                tasks: ['concat']
            },
            sass: {
                files: ['_System/assets/sass/*', '_System/assets/sass/**/*'],
                tasks: ['sass:development']
            }
        },

        copy: {
          main: {
            files: [
              { expand: true,
              src: [
              '**',
              '!**/sass/**',
              '!**/node_modules/**',
              '!Gruntfile.js',
              '!package.json',
              '!bower.json',
              '!**/bower_components/**',
              ],
              dest: 'build' },
            ],
          },
        },

        uglify: {
            build: {
                files: {
                    'build/_System/assets/js/application.js': ['/_System/assets/js/application.js']
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['sass:build','concat','copy','uglify:build']);
};