var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public/'),
  archivedSites: path.join(__dirname, '../archives/'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  fs.readFile(this.paths.list, (err, data) => {
    if (err) { 
      throw err;
    }
    callback(data.toString().split('\n'));
  });
};

exports.isUrlInList = function(url, callback) {
  fs.readFile(this.paths.list, (err, data) => { 
    if (err) { 
      throw err;
    }
    var flag = false; 
    data.toString().split('\n').forEach(website => { 
      if (website === url) {
        flag = true;
      }
    });
    callback(flag);
  });
};

exports.addUrlToList = function(url, callback) {
  fs.appendFile(this.paths.list, url, (err) => {
    if (err) { 
      throw err;
    }
  });
  callback(url);
};

exports.isUrlArchived = function(url, callback) {
  // use a FS method on paths archive sites.
  // check if there is an error
    // throw an error
  // else 
    // check if the url is inside the archive site
      // callback(boolean)
  
};

exports.downloadUrls = function(urls) {
  
};


