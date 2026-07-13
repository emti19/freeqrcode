const express = require('express');
const bodyParser = require('body-parser');
const qr_code = require('qrcode');

const app = express();
const DEFAULT_PORT = Number(process.env.PORT) || 3000;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/', function(req, res){
	res.render('index',{QR_code:''});
});

app.post('/', function(req, res){
	const url = req.body.url;
	console.log(url);
	if(url){
		qr_code.toDataURL(url, function(err, src){
			if(err){res.send(err); console.log(err);}
			var file_path = "store/"+ Date.now() +".png";
			qr_code.toFile(file_path,url, {
			  color: {
			    dark: '#000',  // Black dots
			    light: '#0000' // Transparent background
			  }
			});
			res.render('index',{QR_code:src,img_src:file_path}); 
		});

	}else{
		res.send('URL Not Set!');
	}

});

app.get('/download',function(req,res){
	res.download(req.query.file_path);
})

function startServer(port) {
	const server = app.listen(port, function(){
		console.log('Server listening on ' + port);
	});

	server.on('error', function(err) {
		if (err.code === 'EADDRINUSE' && !process.env.PORT) {
			console.log('Port ' + port + ' is in use. Trying ' + (port + 1) + '...');
			startServer(port + 1);
			return;
		}

		throw err;
	});
}

startServer(DEFAULT_PORT);
