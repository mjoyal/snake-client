
const {ENCODE} = require('./constants');

let connection; 

const handleUserInput = function (key) {
  if(key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write('Move: up'); 
  } else if (key === 's') {
    connection.write('Move: down'); 
  } else if (key === 'a') {
    connection.write('Move: left'); 
  } else if (key === 'd') {
    connection.write('Move: right'); 
  } else if (key === '1') {
    connection.write("Say: Eat my dust");
  } else if (key === '2') {
    connection.write("Say: Watch out");
  } else if (key === '3') {
    connection.write("Say: Im a snek");
  }
}; 

const setupInput = function (conn) {
  connection = conn; 
  const stdin = process.stdin; 
  stdin.setRawMode(true); 
  stdin.setEncoding(ENCODE); 
  stdin.resume(); 
  stdin.on('data', handleUserInput); 
  return stdin; 
}; 

module.exports = {
  setupInput
}