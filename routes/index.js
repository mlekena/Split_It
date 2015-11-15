//ROUTER
var express = require('express');
var router = express.Router();

router.get('/', function(request,response){
	response.render('index');
});

router.get('/register', function(request,response){
	response.send('<h1>Register...coming soon</h1>');
});

router.get('/login', function(request,response){
	response.send('<h1>login...coming soon</h1>');
});
router.get('/dashboard', function(request,response){
	response.render('dashboard');
});

router.get('/requestform', function(request,response){
	response.render('requestform');
});

module.exports = router;