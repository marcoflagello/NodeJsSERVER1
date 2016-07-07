var http = require('http');


function processa(req, res){
    var corpo = "Ciao, sono qui! Mi hai chiamato!? \n";
    
    var content_length =  corpo.length;//dimensione contenuto response che ci serve per generare l'head http per la response
    res.writeHead(200, {'Content-Length': content_length, "Content-Type": 'text/plain'});
    res.end(corpo);  //con il metodo end si dice cosa fare qwuando la response è disponibile
        
    }



var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var address = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

var s = http.createServer(processa)
s.listen(port, address, function () {
  console.log( "Listening on " + address + ", port " + port )
}) ;
console.log("Server is up and running") ;
