
module.exports = function(grunt) {
    
    grunt.registerMultiTask('osdetect', 'Detect OS and run different task based on it', function() {
        grunt.log.writeln('Detecting OS: ' + process.platform);

        if (/linux/.test(process.platform)) {
            grunt.task.run( ['sometask:linux'] );

        } else if (/darwin/.test(process.platform)) { // This is what Grunt returns for OSX
            grunt.task.run( ['sometask:osx'] );

        } else if (/win32/.test(process.platform)) {
            grunt.log.ok('Windows, eh?')

        }
    });

};
