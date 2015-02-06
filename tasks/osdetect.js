
module.exports = function(grunt) {
    
    grunt.registerMultiTask('osdetect', 'Detect OS and run different task based on it', function() {
        var tasksToRun = [];
        
        grunt.config.requires(['osdetect', this.target, 'taskMap']);
        
        grunt.log.writeln('Detected OS: ' + process.platform);
        
        if (/linux/.test(process.platform)) {
            if (this.data.taskMap.linux) {
                tasksToRun = this.data.taskMap.linux;
            }
            
        } else if (/win32/.test(process.platform)) {
            if (this.data.taskMap.windows) {
                tasksToRun = this.data.taskMap.windows;
            }
            
        } else if (/darwin/.test(process.platform)) {
            grunt.fail.warn('OSX isn\'t officially supported! You can use --force to try anyway.');
            
            // This task will only be added if --force is used
            tasksToRun = ['someothertask:osx'];
        }
        
        grunt.task.run(tasksToRun);
        
        grunt.log.ok('OS detected, tasks added to queue: ', tasksToRun || 'none');
    });
    
};
