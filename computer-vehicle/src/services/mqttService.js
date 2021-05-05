//const socketService = require('./socketService');
const mqtt = require('mqtt');
//const DispatcherFilter = require('../filters/dispatcherFilter');
const match = require('mqtt-match');
const config = require('../../config/config.json');
//const broadcastManager =  require('./cross/broadcastManager');
require('dotenv').config();

var client;

const host = 'mqtt://node02.myqtthub.com'
const port = 1883 
const username = "lucas_vehiculo"
const password ="vehiculo"
const clientId = 'mqttjs_' + 'lucas.capponi@gmail.com'
const TOPIC_SUBSCRIBE = 'esp/led'
const TOPIC_PUBLISH = 'esp/led'
const parametrosConexion = [host,port,username,password,clientId]


const init = () => {
    client = mqtt.connect(parametrosConexion);
    client.on('connect', () => {
        console.log("[MQTTSERVICE][CONNECTED]");
    // Aca entra donde se suscribió computer-vehicle
        subscribeTopic();
        publishTopic("Hola");
    });
    console.log(parametrosConexion)
    
}

const subscribeTopic = () => {
    client.subscribe(`${TOPIC_SUBSCRIBE}`, err => {
        if (!err) {
            console.log("[MQTTSERVICE][SUSCRIBE]", TOPIC_SUBSCRIBE)
        }
    })
}

const unregisterTopic = (topic) => {
    client.unsubscribe(topic, err => {
        if (!err) {
            console.log("[MQTTSERVICE][UNSUSCRIBE]", topic)
        }
    })
}

const publishTopic = (message) => {
    console.log("[MQTTSERVICE][PUB]", TOPIC_SUBSCRIBE)
    client.publish(`${TOPIC_SUBSCRIBE}`, message)
    console.log("[MQTTSERVICE][PUB MESSAGE]", message)
}
/*
const loadSuscriptions = () => {
    console.log("[MQTTSERVICE][LOADSUSCRIPTIONS]")
    const filter = new DispatcherFilter()
    filter.fillData({})
    SuscriptionService.find(filter)
    .then((suscriptions) => {
        suscriptions.forEach(suscription => {
            if(suscription.active){
                registerTopic(suscription.topic)
            }
        })
    })
    .catch((err) => console.log("[MQTTSERVICE][ERROR]", err))
}
const loadDispatchers = () => {
    console.log("[MQTTSERVICE][LOADDISPATCHERS]")
    const filter = new DispatcherFilter()
    filter.fillData({})
    DispatcherService.find(filter)
    .then((dispatchers) => {
        dispatchers.forEach(dispatcher => {
            if(dispatcher.active){
                registerTopic(dispatcher.topicsuscribe)
            }
        })
    })
    .catch((err) => console.log("[MQTTSERVICE][ERROR]", err))
}
const onMessageHandler = (topic, message) => {
    console.log("[MQTTSERVICE][LISTEN]", topic);
    socketService.sendMessage("IOT", topic + " " + message);
    
    // BroadcastManager
    broadcastManager.attendMqtt(topic, message);
    // Dispatch Service
    dispatchMessage(topic, message);
    
    try {
        // Check the message is json formatted
        JSON.parse(message)
        // Save message from device
        saveMessage(message);
    } 
    catch (error) {
        console.log("El mensaje no es JSON");
    }
};
const saveMessage = message => {
    let messageJson = JSON.parse(message.toString());
    console.log("Recibiendo medicion dispositivo:", messageJson.uid);
    let uid = messageJson.uid;
    
    let deviceFilter = new DeviceFilter();
    deviceFilter.fillData({ uid });
    DeviceService
        .find(deviceFilter) // Busco el ÚNICO device por UID
        .then(devices => {
            if(devices.length == 1) {
                let device = devices[0];
                let measures = messageJson.measures;
                console.log("MEASURES", measures)
                // Guarda todas las mediciones para el device encontrado
                saveMeasuresAsync(device, measures, messageJson.timestamp);
            }
            if(devices.length == 0) {
                console.error(`El dispositivo ${messageJson.uid} no se encuentra registrado en el sistema`);
            }
        });        
}
const dispatchMessage = (topic, message) => {
    const filter = new DispatcherFilter()
    filter.fillData({onmessage:message.toString()})
    DispatcherService.find(filter)
    .then((dispatchers)=>{
        dispatchers.forEach((dispatcher)=>{
            if(match(dispatcher.topicsuscribe, topic)){
                dispatcher.topicspublic.forEach(topicPuc => {
                    client.publish(topicPuc, dispatcher.message)
                })
            }
        });
    })
    .catch((err)=>console.log("[MQTTSERVICE][ERROR]", err));
}
const saveMeasuresAsync = async (device, measures, timestamp) => {
    let newMeasures = [];
    await MeasureService.saveMeasures(measures, device, newMeasures, timestamp);
}
*/

module.exports = {
    init,
    subscribeTopic,
    unregisterTopic,
    publishTopic,
}