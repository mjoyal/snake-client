const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    console.log('Connected');
    conn.write("Name: MAK");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 500);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  return conn;
}


module.exports = {
  connect
}; 