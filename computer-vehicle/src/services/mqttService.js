const mqtt = require('mqtt');
const match = require('mqtt-match');

// Próximamente
const config = require('../../config/config.json');
require('dotenv').config();

var client;

//Parámetros de Conexión Mqtt
const host = 'mqtt://node02.myqtthub.com'
const port = 1883 
const username = "lucas_vehiculo"
const password ="vehiculo"
const clientId = 'mqttjs_' + 'lucas.capponi@gmail.com'
const TOPIC_SUBSCRIBE = 'esp/led'
const TOPIC_PUBLISH = 'esp/led'
const parametrosConexion = {
    port: 1883,
    host: 'mqtt://node02.myqtthub.com',
    clientId: 'lucas.capponi@gmail.com',
    username: 'lucas_vehiculo',
    password: 'vehiculo',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
};//[host,port,username,password,clientId]

// Conexion Mqtt
const init = () => {
    client = mqtt.connect(host,parametrosConexion);
    client.on('connect', () => {
        console.log("[MQTTSERVICE][CONNECTED]");
    // Donde se suscribió computer-vehicle
        subscribeTopic();
    // Donde y que mensaje publica computer-vehicle
        publishTopic("Hola");
    });
}
//Suscripción
const subscribeTopic = () => {
    client.subscribe(`${TOPIC_SUBSCRIBE}`, err => {
        if (!err) {
            console.log("[MQTTSERVICE][SUSCRIBE]", TOPIC_SUBSCRIBE)
        }
    })
}

// Desuscripción de tópico
const unsubscribeTopic = (topic) => {
    client.unsubscribe(topic, err => {
        if (!err) {
            console.log("[MQTTSERVICE][UNSUSCRIBE]", topic)
        }
    })
}

// Publicación
const publishTopic = (message) => {
    console.log("[MQTTSERVICE][PUB]", TOPIC_SUBSCRIBE)
    client.publish(`${TOPIC_SUBSCRIBE}`, message)
    console.log("[MQTTSERVICE][PUB MESSAGE]", message)
}

module.exports = {
    init,
    subscribeTopic,
    unsubscribeTopic,
    publishTopic,
}