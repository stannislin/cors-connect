# cors-connect
Response the CORS requests to the AJAX clients (i.e., a front-end web app which runs in a browser)


# Example

## Express
	
	var cors = require('cors-connect').accept;
	app.use(cors.acceptNext);
	
	app.options('*', function(req, res){
		return res.end();
	});
	
	app.get('/another_paths', function(req, res){
		return res.end();
	});


## http(s) package
	
	var cors = require('cors-connect').accept;
	...
	http.createServer(function(req, res){
		cors.accept(req, res, function(err, req, res){
			...
		});
	}).listen(3000, '127.0.0.1');


