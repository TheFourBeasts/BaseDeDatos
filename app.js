// Conexion con la instancia
var mongo = require('mongodb');
// Conexion con Cliente
var MongoClient = require('mongodb').MongoClient;
// Url donde se tiene la base
var url = "mongodb://localhost:27017/computer-vehicle";

// Conexion a la base
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  // Crear una nueva base o usar una ya existente en la base de Mongodb
  var dbo = db.db("computer-vehicle");
  // Crear coleccion
  dbo.createCollection("Vehicle", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
	// Cierra la conexion en si
    db.close();
  });
});