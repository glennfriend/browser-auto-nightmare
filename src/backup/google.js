'use strict';

//var Xvfb = require('xvfb');
//var xvfb = new Xvfb({
//    silent: true
//});
//xvfb.startSync();




var Nightmare = require('nightmare');
var google = new Nightmare({
    show: true,
    webPreferences: {
        partition: 'custom'
    }
  })
  .viewport(1024, 768)
  .useragent("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36")
  //.useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
  .goto('http://google.com')
  .wait()
  .screenshot('google.png')
  .run(function(err, nightmare) {
    if (err) {
      console.log(err);
    }
    console.log('Done.');
  });

//xvfb.stopSync();