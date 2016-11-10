'use strict';

var fs      = require('fs');
var boot     = require('../library/bootstrap.js');
var config   = boot.getConfig();
var tempPath = boot.getProjectPath('/var');

// --------------------------------------------------------------------------------
//  create temp folder
// --------------------------------------------------------------------------------
(function() {
    var tempPath = boot.getProjectPath('/var');
    if (!fs.existsSync(tempPath)){
        fs.mkdirSync(tempPath);
    }
})();

// --------------------------------------------------------------------------------
//  start
// --------------------------------------------------------------------------------
var Nightmare = require('nightmare');
var google = new Nightmare({
        show: true,
        webPreferences: {
            partition: 'custom'
        }
    })
    .viewport(config.screen.width, config.screen.height)
    .useragent(config.browser.chrome.useragent)
    .goto('http://google.com')
    .wait()
    .screenshot(getTempPath('/google.png'))
    .run(function(err, nightmare) {
        if (err) {
            console.log(err);
        }
        console.log('Done.');
  });













// --------------------------------------------------------------------------------
//  helper function
// --------------------------------------------------------------------------------
function getTempPath(tailPath='')
{
    var temp = '/var';
    if (tailPath) {
        return boot.getProjectPath(temp + tailPath);
    }
    return boot.getProjectPath(temp);
};
