var Alumno = require('../model/alumno.js');

module.exports.GetAlumnoByLegajo = function(req, res){
    
    
    var promise = new Promise(function(resolve, reject) {
        //resolve(Alumno.getByLegajo(req.params.id));
        Alumno.getByLegajo(149958);
    });

    promise.then(function(val) {
        
        resolve(res.json({data: val}));
    }).catch(function(err){
        res.json({data: err});
    });

}