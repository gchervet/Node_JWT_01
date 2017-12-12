var Alumno = require('../model/alumno.js');

module.exports.GetAlumnoByLegajo = function(req, res){
    //req.params.id
    Alumno.getByLegajo(149958).then(function(val) {        
        resolve(res.json({data: val}));
    }).catch(function(err){
        res.json({data: err});
    });

}