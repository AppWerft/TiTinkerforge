Ti.UI.backgroundColor = 'white';

var Tinkerforge = require('vendor/tinkerforge/index');

var HOST = '8.8.8.8';
var PORT = 32443;

var self = Ti.UI.createWindow({
	exitOnClose : true,
	fullscreen : true,

	layout : 'vertical'
});

var hostinput = Ti.UI.createTextField({
	top : 100,
	height : 45,
	value : HOST,
	returnKeyType : Ti.UI.RETURNKEY_DONE,
	keyboardType : Ti.UI.KEYBOARD_DECIMAL_PAD,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	left : 50,
	font : {
		fontSize : 12
	},
	right : 50
});

var portinput = Ti.UI.createTextField({
	top : 20,
	height : 45,
	value : PORT,
	returnKeyType : Ti.UI.RETURNKEY_DONE,
	keyboardType : Ti.UI.KEYBOARD_DECIMAL_PAD,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	left : 50,
	font : {
		fontSize : 12
	},
	right : 50

});
var connectbutton = Ti.UI.createButton({
	top : 50,
	title : ' Connect ',
	font : {
		fontSize : 12
	},
	borderWidth : 1,
	borderColor : 'silver',
	borderRadius : 5
});

self.add(hostinput);
self.add(portinput);

connectbutton.addEventListener('click', function() {
	var connectbutton = Ti.UI.createButton({
		top : 10,
		title : 'Connect'
	});
	ipcon = new Tinkerforge.IPConnection();
	ipcon.connect(HOST, PORT, function(error) {
		console.log('Error: ' + error);
	});
	// Register Connected Callback
	ipcon.addEventListener(Tinkerforge.IPConnection.CALLBACK_CONNECTED, function(connectReason) {
		ipcon.enumerate();
	});
	// Register Enumerate Callback
	ipcon.addEventListener(Tinkerforge.IPConnection.CALLBACK_ENUMERATE,
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
});

self.open();
self.add(connectbutton);
