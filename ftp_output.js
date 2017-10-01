var Client = require('ftp');
var fs = require('fs');

var c = new Client();
c.on('ready', function() {
    c.put('./resource/foo.txt', 'foo.remote-copy.txt', function(err) {
      if (err) throw err;
      c.end();
    });
  });
// connect to localhost:21 as anonymous
 
var config = {
    host: 'ftp.totalwine.com',
    OK: 2,
    user: 'jhung',
    password: '110160Hhj@',
  }

c.connect(config);