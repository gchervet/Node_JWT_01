var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

process.env.SECRET_KEY = "mybadasskey";

var app = express();
var secureRoutes = express.Router();

//Controllers
var authenticateController = require('./server/controllers/authenticate-controller');
var dataController = require('./server/controllers/data-controller');
var alumnoController = require('./server/controllers/alumno-controller');

//App uses
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/secure-api', secureRoutes);

//Service Routes
app.get('/api/authenticate', authenticateController.authenticate);

//Validation middleware
secureRoutes.use(function(req, res, correctCallbackFunction){
    var token = req.body.token || req.headers['token'];

    if(token){
        //res.send("we have a token");
        jwt.verify(token, process.env.SECRET_KEY, function(err, decode){
            if(err){
                res.status(500).send("Invalid token");
            } else {
                correctCallbackFunction();
            }
        });
    } else {
        res.send("please send a token");
    }

});

// data-controller routes
secureRoutes.get('/get-data', dataController.getData);
secureRoutes.post('/post-data', dataController.postData);
secureRoutes.post('/GetAlumnoByLegajo', alumnoController.GetAlumnoByLegajo);


app.listen(9000, function(){
    console.log("server running on port 9000");
})  