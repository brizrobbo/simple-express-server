/******************************************************************************

Script: index.js

Purpose: Provides a simple web server skeleton to serve whatever is needed at
the time.

******************************************************************************/

// Using express as web server framework
var express = require('express');

// Initialise the express app
var app = express();

// Set some express options
app.use('/static', express.static('static')); //make all files under /static serve-able.

// GET route
app.get('/', function (req, res) {

    //Some HTML

    var thisHtml = `
<html>
<head>
    <title>Simple web server</title>
</head>
<body>
    <p>Simple web server - /</p>
</body>
</html>
`;

    res.send(thisHtml);
});

// Web server listening on nominated port
var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    //console.log('Example app listening at http://%s:%s', host, port);
});