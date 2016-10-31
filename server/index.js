var app = require('./app'),
  http = require('http'),
  config = require('./config'),
  twitter = require('twitter'),
  streamHandler = require('./utils/streamHandler');

var PORT = process.env.PORT || 9001;

// Create http server
var server = http.createServer(app).listen(PORT, function() {
  console.log('Express server listening on port ' + PORT);
});

// Initialize socket io
var io = require('socket.io').listen(server);

// Create a new twitter instance using credentials from your Twitter apps
var tweet = new twitter(config.twitter);

// Set a stream listener for tweets matching tracking keywords
tweet.stream('statuses/filter', { track : 'tolong, #tolong'}, function(stream) {
  streamHandler(stream, io);
});