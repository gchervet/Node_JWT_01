var Alumno = require('../model/alumno.js');

module.exports.GetAlumnoByLegajo = function(req, res){
    
    Alumno.getByLegajo(149958)
    .then(result => {
        res.json({data: result.recordset});
    });
}