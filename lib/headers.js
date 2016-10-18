const CORS_HEADERS = [
	{
		reqHeader: 'origin',
		resHeader: 'Access-Control-Allow-Origin'
	},
	{
		reqHeader: 'access-control-request-headers',
		resHeader: 'Access-Control-Allow-Headers'
	},
	{
		reqHeader: 'access-control-request-method',
		resHeader: 'Access-Control-Allow-Methods'
	}
];

exports.CORS_HEADERS = CORS_HEADERS;