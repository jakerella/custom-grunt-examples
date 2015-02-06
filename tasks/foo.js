
module.exports = function(grunt) {
    
    grunt.registerMultiTask('troll', 'Troll people', function() {
        var name = this.data.name || this.target;
        
        if (this.data.awesome) {
            grunt.log.ok(name + ' is AWESOME!');
        } else {
            grunt.fail.warn(name + ' is ... less than awesome.');
        }
    });
    
};
