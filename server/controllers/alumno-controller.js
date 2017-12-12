var Alumno = require('../model/alumno.js');

module.exports.GetAlumnoByLegajo = function(req, res){
    
    Alumno.getByLegajo(req.params.id)
    .then(result => {
        res.json({data: result.recordset});
    });
}