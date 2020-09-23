const net = require('net');
const { IP, PORT, ENCODE} = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    console.log('Connected');
    conn.write("Name: MAK");
  });
  // interpret incoming data as text
  conn.setEncoding(ENCODE); 
  return conn;
}

module.exports = {
  connect
}; 