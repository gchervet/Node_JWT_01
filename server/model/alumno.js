var sql = require('../config/db');

exports.getByLegajoPromise = function(legajo) {
    
        try {

            sql.request('select * from uniAlumnos where legdef = ' + legajo)
            .then(result => {
                return result.recordset;
            });
            
        } catch (err) {
            throw err;
        }

};

// Get a particular alumno
exports.getByLegajo = function(legajo) {
   
  var promiseGetByLegajo = new Promise(function(resolve, reject) {
    exports.getByLegajoPromise(legajo);
  });
  
  promiseGetByLegajo.then(function(val) {
    return val;
  }).catch(function(err){
    return err;
  });

}

// Get all alumnos
exports.all = function(cb) {
  cb(null, [])
}

// Get all alumnos by a particular user
exports.allByUser = function(user, cb) {
  cb(null, [])
}