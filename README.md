# cors-connect

Accept the CORS requests from AJAX clients (i.e., a front-end web app which runs in a browser)


## Example

### Express
	
```javascript
var cors = require('cors-connect').accept;
...

//Add the CORS middleware to Express
app.use(cors.acceptNext);

//Response the options request of CORS validation from AJAX client
app.options('*', function(req, res){
	return res.end();
});

//Your another routings
app.get('/another_paths', function(req, res){
	...
});
```

### http(s) package
```javascript
var cors = require('cors-connect').accept;
...

http.createServer(function(req, res){
	cors.accept(req, res, function(err, req, res){
		...
	});
}).listen(3000, '127.0.0.1');
```


