const { usb } = require('usb');

waitingForConnectionsDisplay()
usb.on('attach', attachDeviceHandler);
usb.on('detach', detachDeviceHandler);

function waitingForConnectionsDisplay() {
    console.log('Esperando por conexões...')
}

function detachDeviceHandler() {
    console.log('Conexão interrompida...')
    waitingForConnectionsDisplay()
}

function attachDeviceHandler(device) {
    console.log('Nova conexão encontrada...')
    console.log(device)
}
