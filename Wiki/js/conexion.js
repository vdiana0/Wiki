//CONEXIÓN A LA BASE DE DATOS LOCAL
let bdTGP = require("mysql");
let conexion = bdTGP.createConnection({
    host: "localhost",
    database: "bd_tgp_col",
    user: "root",
    password: ""
});

conexion.connect(function(err){
    if(err){
        throw err;
    } else{
        console.log("Conexión éxitosa")
    }
});

conexion.end();
