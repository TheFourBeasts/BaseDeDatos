var express = require('express');
const bodyParser = require('body-parser');
//<import-routes>
const conductorRouter = require('./routes/conductorRouter')
const { isAuth } = require('./middlewares/authMiddleware')
const vehiculoRouter = require('./routes/vehiculoRouter')
const recorridoRouter = require('./routes/recorridoRouter')
//</import-routes>
const app = express();
const cors = require('cors')
const mqttService = require('./services/mqttService')
//cors
app.use(cors())

//middleware
    //body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//<routes>
app.use('/conductors', conductorRouter)
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
    const status = err.status || 500;
    if (status >= 500) console.log(err);
    res.status(status).send({
        error: err.message
    })
})

//Conexión mqtt
mqttService.init()
//mqttService.subscribeTopic()
//mqttService.publishTopic("Hola")

module.exports = app;