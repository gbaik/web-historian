var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

exports.handleRequest = function (req, res) {
  // If request method = post
    // if request url in archive list (isUrlArchived)
      // ***Somehow display the archived site***
    // else 
      // *** Somehow display the loading.html ***
      // add url to archive list (addUrlToList)
    // Set status code to 200
    // write response head
    // write response end
    
  // If request method = get
    // set status code to 200
    // write response head
    // write response end with the message
  
  // res.end(archive.paths.list);
};
    