const mqtt = require('mqtt');
const match = require('mqtt-match');
const config = require('../../config/config.json');
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

module.exports = {
    init,
    subscribeTopic,
    unregisterTopic,
    publishTopic,
}