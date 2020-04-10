const express=require('express');
const path = require('path');
const app=express();

const htmlPort = process.env.PORT || 4003;
app.use(express.static('client'));
app.get('*', function (req, res) {

  res.sendfile(__dirname+'/index.html');

});

var server = app.listen(htmlPort, function (req, res) {
    var host = server.address().address
    var port = server.address().port
    console.log("app listening at", host, port)
});