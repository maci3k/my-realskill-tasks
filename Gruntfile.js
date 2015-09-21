(function ()
{
    'use strict';

    module.exports = function (grunt)
    {
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-karma');

        grunt.initConfig({
            karma: {
                options: {
                    configFile: 'test/karma.conf.js'
                },
                verify: {
                    singleRun: true
                },
                default: {
                    singleRun: false
                }
            },
            jshint: {
                options: {
                    jshintrc: true,
                    src: ['**/*.js']
                },
                default: ['<%=jshint.options.src%>'],
                verify: {
                    options: {
                        reporter: 'checkstyle',
                        reporterOutput: 'target/jshint.xml'
                    }
                }
            }
        });

        grunt.registerTask('verify', ['jshint:verify', 'karma:verify']);
        grunt.registerTask('default', ['jshint:default', 'karma:default']);
    };
})();
