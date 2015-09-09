module.exports = function(grunt) {

    grunt.registerTask('build', ['sass', 'imagemin', 'cssmin', 'replace:build']);
    grunt.log.writeln("Custom task log");
};
