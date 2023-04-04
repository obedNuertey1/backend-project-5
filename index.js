var express = require('express');
var cors = require('cors');
require('dotenv').config()
const multer = require('multer');
const path = require('path');

//Create a multer middleware with the destination and filename functions
const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, cb){
			//Specify the directory where you want to save the file
			cb(null, __dirname + "/assets");
		},
		filename(req, file, cb){
			//Specify the filename for the uploaded file
			const [uniqueSuffix, ext] = [`${(new Date().toDateString()).replace(/\s+/g, "-")}-${Math.round(Math.random() * 9E9)}`, path.extname(file.originalname)];
			cb(null, `${file.fieldname}-${uniqueSuffix+ext}`);
		}
	})
});


var app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post("/api/fileanalyse", upload.single('upfile'), (req, res)=>{
	
	const {originalname: name, mimetype: type, size} = req.file;

	res.json({name, type, size});
	console.log("Successful");
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
