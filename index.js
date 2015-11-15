//This is the entry point for the application
var express = require('express');
var app = express();

//define our render engine. It will allow use to embed Javascript in our HTML page. file extention is .ets
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.get('/splitit', function(request,response){
	response.render('index');
});

app.get('/splitit/register', function(request,response){
	response.send('<h1>Register...coming soon</h1>');
});

app.get('/splitit/login', function(request,response){
	response.send('<h1>login...coming soon</h1>');
});
//SHOULD BE THE LAST ROUTE IN FILE

/*app.get('*', function(request,response){
	console.log("incorrect address passed")
	response.render('Bad route. Go to http://localhost:3000/');
});*/

var server = app.listen(3000, function(){
	console.log("Listening... go to http://localhost:3000/splitit")
});