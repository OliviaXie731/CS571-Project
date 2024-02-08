var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/api/currenttime') {
    var currentTime = new Date();
    var response = {
      year: currentTime.getFullYear(),
      month: currentTime.getMonth() + 1, // Months are zero-based, so add 1
      date: currentTime.getDate(),
      hour: currentTime.getHours(),
      minute: currentTime.getMinutes()
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(8000);
