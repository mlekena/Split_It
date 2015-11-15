//ROUTER
var express = require('express');
var router = express.Router();

router.get('/', function(request,response){
	response.render('index');
});

router.route('/register')
	.get(function(request,response){
	response.send('<h1>Register...coming soon</h1>');
})
	.post(function(request, response){
		response.send('request.params.');
	});

router.route('/login')
	.get(function(request,response){
	response.render('login');
})
	.post(function(request,response){
	response.send(request.params.password);	
});

router.get('/dashboard', function(request,response){
	response.render('dashboard');
});

//receive the create request form and send it to the dashboard with an updated request array.
router.route('/requestform')
	.get(function(request,response){
	response.render('requestform');
})
	.post(function(request,response){
	response.send('Got the post');
});


/*router.get('/requestform', function(request,response){
	response.render('requestform');
});*/

module.exports = router;