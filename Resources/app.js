var Tinkerforge = require('vendor/tinkerforge/index');

var HOST = 'localhost';
var PORT = 4223;

var self = Ti.UI.createWindow({
	exitOnClose : true
});
var connectbutton = Ti.UI.createButton({
	top : 10,
	title : 'Connect'
});


connectbutton.addEventListener('click', function() {
	var connectbutton = Ti.UI.createButton({
		top : 10,
		title : 'Connect'
	});
	ipcon = new Tinkerforge.IPConnection();
	// Create IP connection
	ipcon.connect(HOST, PORT, function(error) {
		console.log('Error: ' + error);
	});
	// Connect to brickd

	// Register Connected Callback
	ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, function(connectReason) {
		// Trigger Enumerate
		ipcon.enumerate();
	});

	// Register Enumerate Callback
	ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE,
	// Print incoming enumeration
	function(uid, connectedUid, position, hardwareVersion, firmwareVersion, deviceIdentifier, enumerationType) {
		console.log('UID:               ' + uid);
		console.log('Enumeration Type:  ' + enumerationType);
		if (enumerationType === Tinkerforge.IPConnection.ENUMERATION_TYPE_DISCONNECTED) {
			console.log('');
			return;
		}
		console.log('Connected UID:     ' + connectedUid);
		console.log('Position:          ' + position);
		console.log('Hardware Version:  ' + hardwareVersion);
		console.log('Firmware Version:  ' + firmwareVersion);
		console.log('Device Identifier: ' + deviceIdentifier);
		console.log('');
	});

	console.log("Press any key to exit ...");
});


self.open();
self.add(connectbutton);
