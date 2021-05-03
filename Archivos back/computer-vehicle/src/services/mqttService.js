/*const socketService = require('./socketService');
const mqtt = require('mqtt');
const DispatcherFilter = require('../filters/dispatcherFilter');
const match = require('mqtt-match');
const broadcastManager =  require('./cross/broadcastManager');
require('dotenv').config();

var client;

const DeviceFilter = require('../filters/deviceFilter');
const DeviceService = require('./deviceService');
const DispatcherService = require('./dispatcherService');
const SuscriptionService = require('./suscriptionService');
const MeasureService = require('./measureService');
const MeasurePacketService = require('./measurepacketService');

const init = () => {
    client = mqtt.connect(process.env.MOSQUITTO_SV);
    client.on('connect', () => {
        console.log("[MQTTSERVICE][CONNECTED]");
        loadSuscriptions();
        loadDispatchers();
    });

    // Aca entra donde se suscribió el bondiot
    client.on('message', onMessageHandler)
}

const registerTopic = (topic) => {
    client.subscribe(topic, err => {
        if (!err) {
            console.log("[MQTTSERVICE][SUSCRIBE]", topic)
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

const pub = (topic, message) => {
    console.log("[MQTTSERVICE][PUB]", topic)
    client.publish(topic, message)
}

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

module.exports = {
    init,
    registerTopic,
    unregisterTopic,
    pub,
}*/