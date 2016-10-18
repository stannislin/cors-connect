var CORS_HEADERS = require('./headers').CORS_HEADERS
const WRONG_MSG = 'Wrong type of request/response';

function accept(req, res, cbk){
	CORS_HEADERS.forEach(function(elm, i, a){
		try{
			let reqValue = req.headers[elm.reqHeader];
			if(reqValue)
				res.setHeader(elm.resHeader, reqValue);
			if(i == a.length - 1)
				return cbk(undefined, req, res);
		}catch(e){
			return cbk(WRONG_MSG, e);
		}
	});
}

exports.accept = accept;

exports.acceptNext = function(req, res, next){
	accept(req, res, function(err, req, res){
		if(err)
			throw new Error(WRONG_MSG);
		else
			next();
	});
}