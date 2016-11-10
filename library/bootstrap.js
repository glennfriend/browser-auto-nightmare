var path    = require('path');
var config  = require('../config/config.json');
var php     = require('../library/php.js');

module.exports = {

    getProjectPath: function(tailPath='')
    {
        var root = php.dirname(path.resolve(__dirname));
        if (tailPath) {
            return root + tailPath;
        }
        return root;
    },

    getConfig: function()
    {
        return config;
    }

};