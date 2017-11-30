#Basado en:

https://www.youtube.com/watch?v=FV-x9mmnwyY



0. Abrir consola de comandos dentro de la carpeta del proyecto
1. npm init
2. npm install express
3. npm install body-parser
4. npm install jsonwebtoken

#Para probar con Postman:

GET: 
    http://localhost:9000/api/authenticate

    {
        "success": true,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE1MTE4OTQyMjQsImV4cCI6MTUxMTg5ODIyNH0.DaLyWUcB9P1GFBBp3bjOWI8TM1mYAT5DllIdE4IXr9o"
    }

POST: 
usando el token del request anterior como header
    http://localhost:9000/secure-api/post-data


