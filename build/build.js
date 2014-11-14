var marked = require('marked');
var request = require('request');
var fs = require('fs');
var _ = require('lodash');

var readmeUrl = 'https://raw.githubusercontent.com/any2api/any2api-cli/master/README.md';
var tplPath = './index.tpl.html';
var indexPath = '../index.html';

request(readmeUrl, function(err, res, body) {
  if (err || res.statusCode !== 200) {
    console.error('response code:', res.statusCode);
    console.error('error:', err);

    return;
  }

  var html = marked(body);

  html = _.rest(html.split('\n'), 3).join('\n');

  fs.readFile(tplPath, 'utf8', function(err, tpl) {
    if (err) return console.error('error:', err);

    fs.writeFile(indexPath, _.template(tpl, { content: html }), function(err) {
      if (err) return console.error('error:', err);
    });
  });
})
