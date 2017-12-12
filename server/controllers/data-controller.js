module.exports.getData = function(req, res){
    
    //if(err){
    //    return res.status(500).send("Couldn't run the query");
    //}

    var people = {
        firstName: 'Hola',
        lastName: 'Chau'
    };

    res.json({data: people});
}

module.exports.GetAlumnoByLegajo = function(req, res){
    
    //if(err){
    //    return res.status(500).send("Couldn't run the query");
    //}

    var people = {
        firstName: 'Hola',
        lastName: 'Chau'
    };

    res.json({data: people});
}


module.exports.postData = function(req, res){
    
    //if(err){
    //    return res.status(500).send("Could not save the user");
    //}
    res.status(200).send("You have added a new person");
}