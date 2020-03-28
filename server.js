var express = require("express");

var app = express();

app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));

var Array=[];
app.get('/add',function(req,res){
    
    Array.push(req.body.todo);
    for (var i = 0; i < Array.length; i++) {
        res.send(Array[i]+"<br>");
    }
      
});

var server = app.listen(9005, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});