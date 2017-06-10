var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelper = require('./http-helpers');

// require more modules/folders here!

exports.handleRequest = function (req, res) {
  // If request method = post
  // if (req.method === 'POST') {
    // if request url in url list (isUrlInList)
      // if request url in archive list (isUrlArchived)
        // ***Somehow display the archived site***
        // archive.paths.archivedSites + '/'
      // else
        // *** Somehow display the loading.html ***
    // else 
      // *** Somehow display the loading.html ***
      // add url to archive list (addUrlToList)
    // Set status code to 200
    // write response head
    // write response end   
  // }
  
  // If request method = get
    // set status code to 200
    // write response head
    // write response end with the message
  // res.writeHead(200, httpHelper.headers);
  res.writeHead(302, {Location: archive.paths.archivedSites + '/' + './public/index.html'}); 
  res.end();
  // res.end(archive.paths.list);
};
    