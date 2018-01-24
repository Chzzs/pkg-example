import SerialPort from 'serialport';

const run = async () => {
  const ports = await SerialPort.list();
  console.log(ports);
}

run();
