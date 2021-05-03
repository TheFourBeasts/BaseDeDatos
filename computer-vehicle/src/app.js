var express = require('express');
const bodyParser = require('body-parser');

//<import-routes>
const vehiculoRouter = require('./routes/vehiculoRouter')

//</import-routes>
const app = express();

//middleware
//body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/vehiculos', vehiculoRouter)

//</routes>

//erros
app.use((req, res, next) => {
    //broadcastManager.attendHttp(req, mqttService.pub)
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