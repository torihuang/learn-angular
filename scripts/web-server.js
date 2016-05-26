var express = require('express');
var path = require('path');
var app = express();
// takes me to rootpath
var rootPath = path.normalize(__dirname + '/../')

// static serve pages in path without calling them at all
// install all files in app directory without processing them at all, just pass out as they are
app.use(express.static(rootPath + '/app'));

app.listen(8080);
console.log('nihao from port 8080...')