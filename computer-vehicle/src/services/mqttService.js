const mqtt = require('mqtt');
const match = require('mqtt-match');

// Próximamente
const config = require('../../config/config.json');
require('dotenv').config();

var client;

//Parámetros de Conexión Mqtt
//const host = 'mqtt://node02.myqtthub.com'
const host = 'wss://zc482089.en.emqx.cloud:8084/mqtt'
const topic = 'esp/led'
/*const parametrosConexion = {
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
};*///[host,port,username,password,clientId]

const parametrosConexion = {
    port: 8084,
    host: 'wss://zc482089.en.emqx.cloud:8084/mqtt',
    clientId: 'pepito@gmail.com',
    username: 'vehiculo123',
    password: 'emqxd123',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
};

// Conexion Mqtt
const init = () => {
    client = mqtt.connect(host,parametrosConexion);
    client.on('connect', () => {
        console.log("[MQTTSERVICE][CONNECTED]");
        // Donde se suscribió computer-vehicle
        subscribeTopic();
        // Obtencion del mensaje del topico suscripto
        messageTopic();
        // Donde y que mensaje publica computer-vehicle
        publishTopic("off");
    });
}
//Suscripción
const subscribeTopic = () => {
    client.subscribe(`${topic}`, err => {
        if (!err) {
            console.log("[MQTTSERVICE][SUSCRIBE]", topic)
        }
    })
}

//Obtencion del mensaje
const messageTopic = () => {
    client.on('message',function(topic, message, packet){
        if(message)
        console.log(topic,": ", message.toString());
        //console.log("message is "+ message.toString());
        //console.log("topic is "+ topic);
    });
}
// Desuscripción de tópico
const unsubscribeTopic = (topic_aux) => {
    client.unsubscribe(topic, err => {
        if (!err) {
            console.log("[MQTTSERVICE][UNSUSCRIBE]", topic)
        }
    })
}

// Publicación
const publishTopic = (message) => {
    console.log("[MQTTSERVICE][PUB]", topic)
    client.publish(`${topic}`, message)
    console.log("[MQTTSERVICE][PUB MESSAGE]", message)
}

module.exports = {
    init,
    subscribeTopic,
    //unsubscribeTopic,
    messageTopic,
    publishTopic,
}