var http=require('http');

//create server
http.createServer(function(req,res){
    //http header
    //200 - is the OK message
    //to respond with html content, 'Content-Type' should be
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('Node.js says hello!');//write a responce to client
    res.end();
}).listen(9000);//the server object listens on port