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
                }, unit: {
                    singleRun: true
                }, dev: {
                    singleRun: false
                }
            }, jshint: {
                options: {
                    jshintrc: true,
                    reporter: 'checkstyle',
                    reporterOutput: 'target/jshint.xml'
                }, all: ['**/*.js']
            }
        });

        grunt.registerTask('verify', ['jshint', 'karma:unit']);
    };
})();
