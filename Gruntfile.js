module.exports = function(grunt) {

    grunt.initConfig({
        osdetect: {
            troll: {
                taskMap: {
                    'linux': ['troll:linux'],
                    'windows': ['troll:windows']
                }
            },
            
            noconfig: {}
        },
        
        troll: {
            linux: {
                awesome: true
            },
            windows: {
                awesome: false
            }
        }
    });

    grunt.task.loadTasks('./tasks');

};