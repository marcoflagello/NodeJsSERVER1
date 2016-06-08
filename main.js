/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var fs = require('fs') ;
var http = require('http') ;
var dispatcher = require('./module-02') ;
dispatcher.addListener("get", "/", function(req, res) {
  fs.readFile(__dirname + '/prova.html', function (err, content) {
    if (err) {
      res.writeHead(500) ;
      return res.end('Error loading file') ;
    }
    res.writeHead(200) ;
    res.end(content) ;
  }) ;
}) ;
dispatcher.addListener("get", "/page1", function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'}) ;
  res.end('Page One') ;
}) ;
dispatcher.addListener("get", "/page2", function(req, res) { 
  res.writeHead(200, {'Content-Type': 'text/plain'}) ;
  res.end('Page Two') ;
}) ;
dispatcher.addListener("post", "/login", function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'}) ;
  res.end('Post one') ;
}) ;

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var address = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

http.createServer(function (req, res) {
  dispatcher.dispatch(req, res) ;
}).listen(port, address, function () {
  console.log( "Listening on " + address + ", port " + port )
}) ;
console.log("Server is up and running") ;
