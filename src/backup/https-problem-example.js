var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

// --------------------------------------------------------------------------------
//  document
// --------------------------------------------------------------------------------
/*
    'ignore-certificate-errors': true
        - 忽略 https certificate 所造成的問題

*/
// --------------------------------------------------------------------------------
//  start
// --------------------------------------------------------------------------------
var Nightmare = require('nightmare');
var nightmare = new Nightmare({
        show: true,
        switches: {
            'ignore-certificate-errors': true
        }
    })

nightmare
    .goto('https://xxxxxxxxxx')
    .type('form[action*="/search"] [name=p]', 'github nightmare')
    .click('form[action*="/search"] [type=submit]')
    .wait('#main')
    .evaluate(function () {
        return document.querySelector('#main .searchCenterMiddle li a').href
    })
    .end()
    .then(function (result) {
        console.log(result)
    })
    .catch(function (error) {
        console.error('Search failed:', error);
    });
