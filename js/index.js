var http, htmlHeader, jsonHeader, fileSystem, 
url, dJSONPath, path, jsonFilePath, indexFilePath;

http = require('http');
fileSystem = require('fs');
url = require('url');

dJSONPath = '/getJSON'; // The async path/function to the JSON file
jsonFilePath = 'json/dataPointsSum.json';
indexFilePath = 'index.htm';

htmlHeader = {'Content-Type': 'text/html'};
jsonHeader = {'Content-Type': 'application/json'};

function sHeader(response){ // Set headers
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Methods', 'GET');
	response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	console.log('Headers set');
};

http.createServer(function(request, response){ 
	path = url.parse(request.url).pathname;
	if(path == dJSONPath){ // Serve the JSON resource via HTTP
		fileSystem.readFile(jsonFilePath, 'UTF8', function(error, dJSON){
			sHeader(response);
			response.writeHead(200, jsonHeader);
			response.end(dJSON);			
		});		
	}
	else{ // Serve index.htm via HTTP
		fileSystem.readFile(indexFilePath, function(error, data){
			sHeader(response);
			response.writeHead(200, htmlHeader);
			response.end(data);
		});
	}
}).listen(8080);

console.log('1- The server is running');