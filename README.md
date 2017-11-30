# Basado en

https://www.youtube.com/watch?v=FV-x9mmnwyY



0. Abrir consola de comandos dentro de la carpeta del proyecto
1. npm init
2. npm install express
3. npm install body-parser
4. npm install jsonwebtoken

# Para probar con Postman

## Token (GET): 

URL: 
    
    http://localhost:9000/api/authenticate

Respuesta:

    {
        "success": true,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE1MTE4OTQyMjQsImV4cCI6MTUxMTg5ODIyNH0.DaLyWUcB9P1GFBBp3bjOWI8TM1mYAT5DllIdE4IXr9o"
    }

## GET:

URL:
usando el token del request anterior como header

    http://localhost:9000/secure-api/post-data

Respuesta:

    {
        "data": {
            "firstName": "Hola",
            "lastName": "Chau"
        }
    }

## POST:

URL:
usando el token del request anterior como header

    http://localhost:9000/secure-api/post-data


# Definición de rutas

## En app.js

Declaración necesaria de variables

    var express = require('express');
    var app = express();

Declaración de controladores:

    var authenticateController = require('./server/controllers/authenticate-controller');
    var dataController = require('./server/controllers/data-controller');

Definición de rutas básica:

    //Usando authenticateController.authenticate como método de entrada
    app.get('/api/authenticate', authenticateController.authenticate);

Definición de rutas seguras:

    var secureRoutes = express.Router();
    app.use('/secure-api', secureRoutes);

    //Usando dataController como proveedor de métodos
    secureRoutes.get('/get-data', dataController.getData);
    secureRoutes.post('/post-data', dataController.postData);

Middleware que solicita token, para las rutas seguras:

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
