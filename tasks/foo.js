
module.exports = function(grunt) {
    
    grunt.registerMultiTask('troll', 'Troll people', function() {
        if (this.data.awesome) {
            grunt.log.ok('You are AWESOME!');
        } else {
            grunt.fail.warn('You are ... less than awesome.');
        }
    });
    
};
