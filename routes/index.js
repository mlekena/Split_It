//ROUTER
var express = require('express');
var router = express.Router();
//var appUsers = require('../testusers.json');

router.get('/', function(request,response){
	response.render('index');
});

router.route('/register')
	.get(function(request,response){
	response.send('register');
})
	.post(function(request, response){
		var currentUser = {
			firstname: request.body.first,
			lastname: request.body.last,
			emailaddress: request.body.emailaddress,
			password: request.body.password,
			birthday: request.body.birthday,
			collegename: request.body.college
		};

		response.render('dashboard',{currentUser: currentUser, worldUser: worldUser});
	});

router.route('/login')
	.get(function(request,response){
		response.render('login');
	})
	.post(function(request,response){
		var currentUser = {
			firstname: "Theko Test",
			emailaddress: request.body.emailaddress,
			password: request.body.password
			};
		response.render('dashboard',{currentUser: currentUser} );	
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
		var newRequest = {
			name: request.body.name,
			orderby: request.body.orderby,
			deliverypoint: request.body.deliverypoint
		};
		response.render('dashboard', {requestsent: true, newRequest: newRequest});
});


/*router.get('/requestform', function(request,response){
	response.render('requestform');
});*/

module.exports = router;