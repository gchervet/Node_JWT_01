var sql = require('../config/db');

// Get a particular alumno
exports.getByLegajo = function(legajo) {
   try
   {
    sql.close();
    return sql.request('select * from uniAlumnos where legdef = ' + legajo)
   }
   catch(err){
     throw err;
   }

}

// Get all alumnos
exports.all = function(cb) {
  cb(null, [])
}

// Get all alumnos by a particular user
exports.allByUser = function(user, cb) {
  cb(null, [])
}