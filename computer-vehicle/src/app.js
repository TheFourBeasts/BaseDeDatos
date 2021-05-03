var express = require('express');
const bodyParser = require('body-parser');
//<import-routes>
const usuarioRouter = require('./routes/usuarioRouter')
const vehiculoRouter = require('./routes/vehiculoRouter')
const recorridoRouter = require('./routes/recorridoRouter')
//</import-routes>
const app = express();
const cors = require('cors')

//cors
app.use(cors())

//middleware
    //body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//<routes>
app.use('/usuarios', usuarioRouter)
app.use('/vehiculos', vehiculoRouter)
app.use('/recorridos', recorridoRouter)
//</routes>

//erros
app.use((req, res, next) => {
    var error = new Error('Not found.')
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send({
        error: err.message
    })
})

module.exports = app;