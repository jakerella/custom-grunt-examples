
module.exports = function(grunt) {
    
    grunt.registerMultiTask('osdetect', 'Detect OS and run different task based on it', function() {
        var tasksToRun = [],
            done = this.async();
        
        // Use the Node process.platform unless the user specifies an "--os" CLI option
        var os = grunt.option('os') || process.platform;
        
        
        // Audit our 'taskMap' config option...
        
        // This is ok, but doesn't give us any fine grain control on the message
        // grunt.config.requires(['osdetect', this.target, 'taskMap']);
        
        if (!this.data.taskMap) {
            grunt.log.error();
            grunt.log.error('You MUST specify a "taskMap" option for this task!');
            grunt.fail.warn('(NOTE: using --force will NOT help in this case!)');
            done(false);
            return;
        }
        
        grunt.verbose.writeln('Detected OS: ' + os);
        
        
        // Now we can check the OS and add the correct tasks
        if (/linux/.test(os)) {
            if (this.data.taskMap.linux) {
                tasksToRun = this.data.taskMap.linux;
            }
            
        } else if (/win32/.test(os)) {
            if (this.data.taskMap.windows) {
                tasksToRun = this.data.taskMap.windows;
            }
            
        } else if (/darwin/.test(os)) {
            // In this case we want to warn people that this setting is unsupported
            // (but not if they used --force)
            if (grunt.option('force')) {
                grunt.log.error('OSX isn\'t officially supported!');
            } else {
                grunt.fail.warn('OSX isn\'t officially supported!');
                done(false);
            }
            
            // without --force the code will never reach this line, but if it does
            // we'll update the config for the desired task.
            
            var targetConfig = this.data.taskMap.osx.replace(/:/, '.');
            grunt.config(targetConfig + '.name', 'OSX');
            grunt.config(targetConfig + '.awesome', true);
            
            // This task will only be added if --force is used
            tasksToRun = this.data.taskMap.osx;
        }
        
        grunt.task.run(tasksToRun);
        
        grunt.log.ok('OS detected, tasks added to queue: ', tasksToRun || 'none');
        done();
    });
    
};

