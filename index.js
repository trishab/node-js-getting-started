var express = require('express');
var app = express.createServer(express.logger());
var fs. = require('fs');

app.get('/', function(request, response) {
  var string_var = fs.readFileSync('index.html').toString();
  response.send(string_var);
}

app.set('port',(process,env.PORT || 500));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
