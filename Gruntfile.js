module.exports = function(grunt) {

    grunt.initConfig({
        osdetect: {
            noconfig: {},
            
            troll: {
                taskMap: {
                    'linux': 'troll:linux',
                    'windows': 'troll:windows',
                    'osx': 'troll:other'
                }
            }
        },
        
        troll: {
            linux: {
                awesome: true
            },
            windows: {
                awesome: false
            },
            other: {
                name: null,
                awesome: null
            }
        }
    });

    grunt.task.loadTasks('./tasks');

};