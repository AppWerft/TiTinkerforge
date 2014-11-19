/* ***********************************************************
 * This file was automatically generated on 2014-08-11.      *
 *                                                           *
 * Bindings Version 2.0.2                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickMaster.DEVICE_IDENTIFIER = 13;
BrickMaster.CALLBACK_STACK_CURRENT = 59;
BrickMaster.CALLBACK_STACK_VOLTAGE = 60;
BrickMaster.CALLBACK_USB_VOLTAGE = 61;
BrickMaster.CALLBACK_STACK_CURRENT_REACHED = 62;
BrickMaster.CALLBACK_STACK_VOLTAGE_REACHED = 63;
BrickMaster.CALLBACK_USB_VOLTAGE_REACHED = 64;
BrickMaster.FUNCTION_GET_STACK_VOLTAGE = 1;
BrickMaster.FUNCTION_GET_STACK_CURRENT = 2;
BrickMaster.FUNCTION_SET_EXTENSION_TYPE = 3;
BrickMaster.FUNCTION_GET_EXTENSION_TYPE = 4;
BrickMaster.FUNCTION_IS_CHIBI_PRESENT = 5;
BrickMaster.FUNCTION_SET_CHIBI_ADDRESS = 6;
BrickMaster.FUNCTION_GET_CHIBI_ADDRESS = 7;
BrickMaster.FUNCTION_SET_CHIBI_MASTER_ADDRESS = 8;
BrickMaster.FUNCTION_GET_CHIBI_MASTER_ADDRESS = 9;
BrickMaster.FUNCTION_SET_CHIBI_SLAVE_ADDRESS = 10;
BrickMaster.FUNCTION_GET_CHIBI_SLAVE_ADDRESS = 11;
BrickMaster.FUNCTION_GET_CHIBI_SIGNAL_STRENGTH = 12;
BrickMaster.FUNCTION_GET_CHIBI_ERROR_LOG = 13;
BrickMaster.FUNCTION_SET_CHIBI_FREQUENCY = 14;
BrickMaster.FUNCTION_GET_CHIBI_FREQUENCY = 15;
BrickMaster.FUNCTION_SET_CHIBI_CHANNEL = 16;
BrickMaster.FUNCTION_GET_CHIBI_CHANNEL = 17;
BrickMaster.FUNCTION_IS_RS485_PRESENT = 18;
BrickMaster.FUNCTION_SET_RS485_ADDRESS = 19;
BrickMaster.FUNCTION_GET_RS485_ADDRESS = 20;
BrickMaster.FUNCTION_SET_RS485_SLAVE_ADDRESS = 21;
BrickMaster.FUNCTION_GET_RS485_SLAVE_ADDRESS = 22;
BrickMaster.FUNCTION_GET_RS485_ERROR_LOG = 23;
BrickMaster.FUNCTION_SET_RS485_CONFIGURATION = 24;
BrickMaster.FUNCTION_GET_RS485_CONFIGURATION = 25;
BrickMaster.FUNCTION_IS_WIFI_PRESENT = 26;
BrickMaster.FUNCTION_SET_WIFI_CONFIGURATION = 27;
BrickMaster.FUNCTION_GET_WIFI_CONFIGURATION = 28;
BrickMaster.FUNCTION_SET_WIFI_ENCRYPTION = 29;
BrickMaster.FUNCTION_GET_WIFI_ENCRYPTION = 30;
BrickMaster.FUNCTION_GET_WIFI_STATUS = 31;
BrickMaster.FUNCTION_REFRESH_WIFI_STATUS = 32;
BrickMaster.FUNCTION_SET_WIFI_CERTIFICATE = 33;
BrickMaster.FUNCTION_GET_WIFI_CERTIFICATE = 34;
BrickMaster.FUNCTION_SET_WIFI_POWER_MODE = 35;
BrickMaster.FUNCTION_GET_WIFI_POWER_MODE = 36;
BrickMaster.FUNCTION_GET_WIFI_BUFFER_INFO = 37;
BrickMaster.FUNCTION_SET_WIFI_REGULATORY_DOMAIN = 38;
BrickMaster.FUNCTION_GET_WIFI_REGULATORY_DOMAIN = 39;
BrickMaster.FUNCTION_GET_USB_VOLTAGE = 40;
BrickMaster.FUNCTION_SET_LONG_WIFI_KEY = 41;
BrickMaster.FUNCTION_GET_LONG_WIFI_KEY = 42;
BrickMaster.FUNCTION_SET_WIFI_HOSTNAME = 43;
BrickMaster.FUNCTION_GET_WIFI_HOSTNAME = 44;
BrickMaster.FUNCTION_SET_STACK_CURRENT_CALLBACK_PERIOD = 45;
BrickMaster.FUNCTION_GET_STACK_CURRENT_CALLBACK_PERIOD = 46;
BrickMaster.FUNCTION_SET_STACK_VOLTAGE_CALLBACK_PERIOD = 47;
BrickMaster.FUNCTION_GET_STACK_VOLTAGE_CALLBACK_PERIOD = 48;
BrickMaster.FUNCTION_SET_USB_VOLTAGE_CALLBACK_PERIOD = 49;
BrickMaster.FUNCTION_GET_USB_VOLTAGE_CALLBACK_PERIOD = 50;
BrickMaster.FUNCTION_SET_STACK_CURRENT_CALLBACK_THRESHOLD = 51;
BrickMaster.FUNCTION_GET_STACK_CURRENT_CALLBACK_THRESHOLD = 52;
BrickMaster.FUNCTION_SET_STACK_VOLTAGE_CALLBACK_THRESHOLD = 53;
BrickMaster.FUNCTION_GET_STACK_VOLTAGE_CALLBACK_THRESHOLD = 54;
BrickMaster.FUNCTION_SET_USB_VOLTAGE_CALLBACK_THRESHOLD = 55;
BrickMaster.FUNCTION_GET_USB_VOLTAGE_CALLBACK_THRESHOLD = 56;
BrickMaster.FUNCTION_SET_DEBOUNCE_PERIOD = 57;
BrickMaster.FUNCTION_GET_DEBOUNCE_PERIOD = 58;
BrickMaster.FUNCTION_IS_ETHERNET_PRESENT = 65;
BrickMaster.FUNCTION_SET_ETHERNET_CONFIGURATION = 66;
BrickMaster.FUNCTION_GET_ETHERNET_CONFIGURATION = 67;
BrickMaster.FUNCTION_GET_ETHERNET_STATUS = 68;
BrickMaster.FUNCTION_SET_ETHERNET_HOSTNAME = 69;
BrickMaster.FUNCTION_SET_ETHERNET_MAC_ADDRESS = 70;
BrickMaster.FUNCTION_SET_ETHERNET_WEBSOCKET_CONFIGURATION = 71;
BrickMaster.FUNCTION_GET_ETHERNET_WEBSOCKET_CONFIGURATION = 72;
BrickMaster.FUNCTION_SET_ETHERNET_AUTHENTICATION_SECRET = 73;
BrickMaster.FUNCTION_GET_ETHERNET_AUTHENTICATION_SECRET = 74;
BrickMaster.FUNCTION_SET_WIFI_AUTHENTICATION_SECRET = 75;
BrickMaster.FUNCTION_GET_WIFI_AUTHENTICATION_SECRET = 76;
BrickMaster.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME = 241;
BrickMaster.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickMaster.FUNCTION_RESET = 243;
BrickMaster.FUNCTION_GET_IDENTITY = 255;
BrickMaster.EXTENSION_TYPE_CHIBI = 1;
BrickMaster.EXTENSION_TYPE_RS485 = 2;
BrickMaster.EXTENSION_TYPE_WIFI = 3;
BrickMaster.EXTENSION_TYPE_ETHERNET = 4;
BrickMaster.CHIBI_FREQUENCY_OQPSK_868_MHZ = 0;
BrickMaster.CHIBI_FREQUENCY_OQPSK_915_MHZ = 1;
BrickMaster.CHIBI_FREQUENCY_OQPSK_780_MHZ = 2;
BrickMaster.CHIBI_FREQUENCY_BPSK40_915_MHZ = 3;
BrickMaster.RS485_PARITY_NONE = 'n';
BrickMaster.RS485_PARITY_EVEN = 'e';
BrickMaster.RS485_PARITY_ODD = 'o';
BrickMaster.WIFI_CONNECTION_DHCP = 0;
BrickMaster.WIFI_CONNECTION_STATIC_IP = 1;
BrickMaster.WIFI_CONNECTION_ACCESS_POINT_DHCP = 2;
BrickMaster.WIFI_CONNECTION_ACCESS_POINT_STATIC_IP = 3;
BrickMaster.WIFI_CONNECTION_AD_HOC_DHCP = 4;
BrickMaster.WIFI_CONNECTION_AD_HOC_STATIC_IP = 5;
BrickMaster.WIFI_ENCRYPTION_WPA_WPA2 = 0;
BrickMaster.WIFI_ENCRYPTION_WPA_ENTERPRISE = 1;
BrickMaster.WIFI_ENCRYPTION_WEP = 2;
BrickMaster.WIFI_ENCRYPTION_NO_ENCRYPTION = 3;
BrickMaster.WIFI_EAP_OPTION_OUTER_AUTH_EAP_FAST = 0;
BrickMaster.WIFI_EAP_OPTION_OUTER_AUTH_EAP_TLS = 1;
BrickMaster.WIFI_EAP_OPTION_OUTER_AUTH_EAP_TTLS = 2;
BrickMaster.WIFI_EAP_OPTION_OUTER_AUTH_EAP_PEAP = 3;
BrickMaster.WIFI_EAP_OPTION_INNER_AUTH_EAP_MSCHAP = 0;
BrickMaster.WIFI_EAP_OPTION_INNER_AUTH_EAP_GTC = 4;
BrickMaster.WIFI_EAP_OPTION_CERT_TYPE_CA_CERT = 0;
BrickMaster.WIFI_EAP_OPTION_CERT_TYPE_CLIENT_CERT = 8;
BrickMaster.WIFI_EAP_OPTION_CERT_TYPE_PRIVATE_KEY = 16;
BrickMaster.WIFI_STATE_DISASSOCIATED = 0;
BrickMaster.WIFI_STATE_ASSOCIATED = 1;
BrickMaster.WIFI_STATE_ASSOCIATING = 2;
BrickMaster.WIFI_STATE_ERROR = 3;
BrickMaster.WIFI_STATE_NOT_INITIALIZED_YET = 255;
BrickMaster.WIFI_POWER_MODE_FULL_SPEED = 0;
BrickMaster.WIFI_POWER_MODE_LOW_POWER = 1;
BrickMaster.WIFI_DOMAIN_CHANNEL_1TO11 = 0;
BrickMaster.WIFI_DOMAIN_CHANNEL_1TO13 = 1;
BrickMaster.WIFI_DOMAIN_CHANNEL_1TO14 = 2;
BrickMaster.THRESHOLD_OPTION_OFF = 'x';
BrickMaster.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickMaster.THRESHOLD_OPTION_INSIDE = 'i';
BrickMaster.THRESHOLD_OPTION_SMALLER = '<';
BrickMaster.THRESHOLD_OPTION_GREATER = '>';
BrickMaster.ETHERNET_CONNECTION_DHCP = 0;
BrickMaster.ETHERNET_CONNECTION_STATIC_IP = 1;

function BrickMaster(uid, ipcon) {
	//Device for controlling Stacks and four Bricklets

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickMaster.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 3];
	this.responseExpected[BrickMaster.FUNCTION_GET_STACK_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_STACK_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_EXTENSION_TYPE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_EXTENSION_TYPE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_IS_CHIBI_PRESENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_CHIBI_ADDRESS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_ADDRESS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_CHIBI_MASTER_ADDRESS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_MASTER_ADDRESS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_CHIBI_SLAVE_ADDRESS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_SLAVE_ADDRESS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_SIGNAL_STRENGTH] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_ERROR_LOG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_CHIBI_FREQUENCY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_FREQUENCY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_CHIBI_CHANNEL] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_CHANNEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_IS_RS485_PRESENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_RS485_ADDRESS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_RS485_ADDRESS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_RS485_SLAVE_ADDRESS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_RS485_SLAVE_ADDRESS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_RS485_ERROR_LOG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_RS485_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_RS485_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_IS_WIFI_PRESENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI_ENCRYPTION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_ENCRYPTION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_REFRESH_WIFI_STATUS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI_CERTIFICATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_CERTIFICATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI_POWER_MODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_POWER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_BUFFER_INFO] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI_REGULATORY_DOMAIN] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_REGULATORY_DOMAIN] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_USB_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_LONG_WIFI_KEY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_LONG_WIFI_KEY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI_HOSTNAME] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_HOSTNAME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_STACK_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_STACK_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_STACK_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_STACK_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_USB_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_USB_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_STACK_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_STACK_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_STACK_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_STACK_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_USB_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_USB_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.CALLBACK_STACK_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickMaster.CALLBACK_STACK_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickMaster.CALLBACK_USB_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickMaster.CALLBACK_STACK_CURRENT_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickMaster.CALLBACK_STACK_VOLTAGE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickMaster.CALLBACK_USB_VOLTAGE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_IS_ETHERNET_PRESENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_ETHERNET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_ETHERNET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_ETHERNET_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_ETHERNET_HOSTNAME] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_SET_ETHERNET_MAC_ADDRESS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_SET_ETHERNET_WEBSOCKET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_ETHERNET_WEBSOCKET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_ETHERNET_AUTHENTICATION_SECRET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_ETHERNET_AUTHENTICATION_SECRET] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI_AUTHENTICATION_SECRET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_AUTHENTICATION_SECRET] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickMaster.CALLBACK_STACK_CURRENT] = 'H';
	this.callbackFormats[BrickMaster.CALLBACK_STACK_VOLTAGE] = 'H';
	this.callbackFormats[BrickMaster.CALLBACK_USB_VOLTAGE] = 'H';
	this.callbackFormats[BrickMaster.CALLBACK_STACK_CURRENT_REACHED] = 'H';
	this.callbackFormats[BrickMaster.CALLBACK_STACK_VOLTAGE_REACHED] = 'H';
	this.callbackFormats[BrickMaster.CALLBACK_USB_VOLTAGE_REACHED] = 'H';

	this.getStackVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the stack voltage in mV. The stack voltage is the
		voltage that is supplied via the stack, i.e. it is given by a 
		Step-Down or Step-Up Power Supply.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_STACK_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
	};
	this.getStackCurrent = function(returnCallback, errorCallback) {
		/*
		Returns the stack current in mA. The stack current is the
		current that is drawn via the stack, i.e. it is given by a
		Step-Down or Step-Up Power Supply.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_STACK_CURRENT, [], '', 'H', returnCallback, errorCallback);
	};
	this.setExtensionType = function(extension, exttype, returnCallback, errorCallback) {
		/*
		Writes the extension type to the EEPROM of a specified extension. 
		The extension is either 0 or 1 (0 is the on the bottom, 1 is the on on top, 
		if only one extension is present use 0).
		
		Possible extension types:
		
		.. csv-table::
		 :header: "Type", "Description"
		 :widths: 10, 100
		
		 "1",    "Chibi"
		 "2",    "RS485"
		 "3",    "WIFI"
		 "4",    "Ethernet"
		
		The extension type is already set when bought and it can be set with the 
		Brick Viewer, it is unlikely that you need this function.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_EXTENSION_TYPE, [extension, exttype], 'B I', '', returnCallback, errorCallback);
	};
	this.getExtensionType = function(extension, returnCallback, errorCallback) {
		/*
		Returns the type for a given extension as set by :func:`SetExtensionType`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_EXTENSION_TYPE, [extension], 'B', 'I', returnCallback, errorCallback);
	};
	this.isChibiPresent = function(returnCallback, errorCallback) {
		/*
		Returns *true* if a Chibi Extension is available to be used by the Master Brick.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_IS_CHIBI_PRESENT, [], '', '?', returnCallback, errorCallback);
	};
	this.setChibiAddress = function(address, returnCallback, errorCallback) {
		/*
		Sets the address (1-255) belonging to the Chibi Extension.
		
		It is possible to set the address with the Brick Viewer and it will be 
		saved in the EEPROM of the Chibi Extension, it does not
		have to be set on every startup.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_CHIBI_ADDRESS, [address], 'B', '', returnCallback, errorCallback);
	};
	this.getChibiAddress = function(returnCallback, errorCallback) {
		/*
		Returns the address as set by :func:`SetChibiAddress`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_ADDRESS, [], '', 'B', returnCallback, errorCallback);
	};
	this.setChibiMasterAddress = function(address, returnCallback, errorCallback) {
		/*
		Sets the address (1-255) of the Chibi Master. This address is used if the
		Chibi Extension is used as slave (i.e. it does not have a USB connection).
		
		It is possible to set the address with the Brick Viewer and it will be 
		saved in the EEPROM of the Chibi Extension, it does not
		have to be set on every startup.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_CHIBI_MASTER_ADDRESS, [address], 'B', '', returnCallback, errorCallback);
	};
	this.getChibiMasterAddress = function(returnCallback, errorCallback) {
		/*
		Returns the address as set by :func:`SetChibiMasterAddress`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_MASTER_ADDRESS, [], '', 'B', returnCallback, errorCallback);
	};
	this.setChibiSlaveAddress = function(num, address, returnCallback, errorCallback) {
		/*
		Sets up to 254 slave addresses. Valid addresses are in range 1-255. 0 has a
		special meaning, it is used as list terminator and not allowed as normal slave
		address. The address numeration (via ``num`` parameter) has to be used
		ascending from 0. For example: If you use the Chibi Extension in Master mode
		(i.e. the stack has an USB connection) and you want to talk to three other
		Chibi stacks with the slave addresses 17, 23, and 42, you should call with
		``(0, 17)``, ``(1, 23)``, ``(2, 42)`` and ``(3, 0)``. The last call with
		``(3, 0)`` is a list terminator and indicates that the Chibi slave address
		list contains 3 addresses in this case.
		
		It is possible to set the addresses with the Brick Viewer, that will take care
		of correct address numeration and list termination.
		
		The slave addresses will be saved in the EEPROM of the Chibi Extension, they
		don't have to be set on every startup.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_CHIBI_SLAVE_ADDRESS, [num, address], 'B B', '', returnCallback, errorCallback);
	};
	this.getChibiSlaveAddress = function(num, returnCallback, errorCallback) {
		/*
		Returns the slave address for a given ``num`` as set by
		:func:`SetChibiSlaveAddress`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_SLAVE_ADDRESS, [num], 'B', 'B', returnCallback, errorCallback);
	};
	this.getChibiSignalStrength = function(returnCallback, errorCallback) {
		/*
		Returns the signal strength in dBm. The signal strength updates every time a
		packet is received.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_SIGNAL_STRENGTH, [], '', 'B', returnCallback, errorCallback);
	};
	this.getChibiErrorLog = function(returnCallback, errorCallback) {
		/*
		Returns underrun, CRC error, no ACK and overflow error counts of the Chibi
		communication. If these errors start rising, it is likely that either the
		distance between two Chibi stacks is becoming too big or there are
		interferences.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_ERROR_LOG, [], '', 'H H H H', returnCallback, errorCallback);
	};
	this.setChibiFrequency = function(frequency, returnCallback, errorCallback) {
		/*
		Sets the Chibi frequency range for the Chibi Extension. Possible values are:
		
		.. csv-table::
		 :header: "Type", "Description"
		 :widths: 10, 100
		
		 "0",    "OQPSK 868MHz (Europe)"
		 "1",    "OQPSK 915MHz (US)"
		 "2",    "OQPSK 780MHz (China)"
		 "3",    "BPSK40 915MHz"
		
		It is possible to set the frequency with the Brick Viewer and it will be 
		saved in the EEPROM of the Chibi Extension, it does not
		have to be set on every startup.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_CHIBI_FREQUENCY, [frequency], 'B', '', returnCallback, errorCallback);
	};
	this.getChibiFrequency = function(returnCallback, errorCallback) {
		/*
		Returns the frequency value as set by :func:`SetChibiFrequency`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_FREQUENCY, [], '', 'B', returnCallback, errorCallback);
	};
	this.setChibiChannel = function(channel, returnCallback, errorCallback) {
		/*
		Sets the channel used by the Chibi Extension. Possible channels are
		different for different frequencies:
		
		.. csv-table::
		 :header: "Frequency",             "Possible Channels"
		 :widths: 40, 60
		
		 "OQPSK 868MHz (Europe)", "0"
		 "OQPSK 915MHz (US)",     "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
		 "OQPSK 780MHz (China)",  "0, 1, 2, 3"
		 "BPSK40 915MHz",         "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
		
		It is possible to set the channel with the Brick Viewer and it will be 
		saved in the EEPROM of the Chibi Extension, it does not
		have to be set on every startup.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_CHIBI_CHANNEL, [channel], 'B', '', returnCallback, errorCallback);
	};
	this.getChibiChannel = function(returnCallback, errorCallback) {
		/*
		Returns the channel as set by :func:`SetChibiChannel`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_CHANNEL, [], '', 'B', returnCallback, errorCallback);
	};
	this.isRS485Present = function(returnCallback, errorCallback) {
		/*
		Returns *true* if a RS485 Extension is available to be used by the Master Brick.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_IS_RS485_PRESENT, [], '', '?', returnCallback, errorCallback);
	};
	this.setRS485Address = function(address, returnCallback, errorCallback) {
		/*
		Sets the address (0-255) belonging to the RS485 Extension.
		
		Set to 0 if the RS485 Extension should be the RS485 Master (i.e.
		connected to a PC via USB).
		
		It is possible to set the address with the Brick Viewer and it will be 
		saved in the EEPROM of the RS485 Extension, it does not
		have to be set on every startup.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_RS485_ADDRESS, [address], 'B', '', returnCallback, errorCallback);
	};
	this.getRS485Address = function(returnCallback, errorCallback) {
		/*
		Returns the address as set by :func:`SetRS485Address`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_RS485_ADDRESS, [], '', 'B', returnCallback, errorCallback);
	};
	this.setRS485SlaveAddress = function(num, address, returnCallback, errorCallback) {
		/*
		Sets up to 255 slave addresses. Valid addresses are in range 1-255. 0 has a
		special meaning, it is used as list terminator and not allowed as normal slave
		address. The address numeration (via ``num`` parameter) has to be used
		ascending from 0. For example: If you use the RS485 Extension in Master mode
		(i.e. the stack has an USB connection) and you want to talk to three other
		RS485 stacks with the addresses 17, 23, and 42, you should call with
		``(0, 17)``, ``(1, 23)``, ``(2, 42)`` and ``(3, 0)``. The last call with
		``(3, 0)`` is a list terminator and indicates that the RS485 slave address list
		contains 3 addresses in this case.
		
		It is possible to set the addresses with the Brick Viewer, that will take care
		of correct address numeration and list termination.
		
		The slave addresses will be saved in the EEPROM of the Chibi Extension, they
		don't have to be set on every startup.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_RS485_SLAVE_ADDRESS, [num, address], 'B B', '', returnCallback, errorCallback);
	};
	this.getRS485SlaveAddress = function(num, returnCallback, errorCallback) {
		/*
		Returns the slave address for a given ``num`` as set by
		:func:`SetRS485SlaveAddress`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_RS485_SLAVE_ADDRESS, [num], 'B', 'B', returnCallback, errorCallback);
	};
	this.getRS485ErrorLog = function(returnCallback, errorCallback) {
		/*
		Returns CRC error counts of the RS485 communication.
		If this counter starts rising, it is likely that the distance
		between the RS485 nodes is too big or there is some kind of
		interference.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_RS485_ERROR_LOG, [], '', 'H', returnCallback, errorCallback);
	};
	this.setRS485Configuration = function(speed, parity, stopbits, returnCallback, errorCallback) {
		/*
		Sets the configuration of the RS485 Extension. Speed is given in baud. The
		Master Brick will try to match the given baud rate as exactly as possible.
		The maximum recommended baud rate is 2000000 (2Mbit/s).
		Possible values for parity are 'n' (none), 'e' (even) and 'o' (odd).
		Possible values for stop bits are 1 and 2.
		
		If your RS485 is unstable (lost messages etc.), the first thing you should
		try is to decrease the speed. On very large bus (e.g. 1km), you probably
		should use a value in the range of 100000 (100kbit/s).
		
		The values are stored in the EEPROM and only applied on startup. That means
		you have to restart the Master Brick after configuration.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_RS485_CONFIGURATION, [speed, parity, stopbits], 'I c B', '', returnCallback, errorCallback);
	};
	this.getRS485Configuration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`SetRS485Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_RS485_CONFIGURATION, [], '', 'I c B', returnCallback, errorCallback);
	};
	this.isWifiPresent = function(returnCallback, errorCallback) {
		/*
		Returns *true* if a WIFI Extension is available to be used by the Master Brick.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_IS_WIFI_PRESENT, [], '', '?', returnCallback, errorCallback);
	};
	this.setWifiConfiguration = function(ssid, connection, ip, subnetMask, gateway, port, returnCallback, errorCallback) {
		/*
		Sets the configuration of the WIFI Extension. The ``ssid`` can have a max length
		of 32 characters. Possible values for ``connection`` are:
		
		.. csv-table::
		 :header: "Value", "Description"
		 :widths: 10, 90
		
		 "0", "DHCP"
		 "1", "Static IP"
		 "2", "Access Point: DHCP"
		 "3", "Access Point: Static IP"
		 "4", "Ad Hoc: DHCP"
		 "5", "Ad Hoc: Static IP"
		
		If you set ``connection`` to one of the static IP options then you have to
		supply ``ip``, ``subnet_mask`` and ``gateway`` as an array of size 4 (first
		element of the array is the least significant byte of the address). If
		``connection`` is set to one of the DHCP options then ``ip``, ``subnet_mask``
		and ``gateway`` are ignored, you can set them to 0.
		
		The last parameter is the port that your program will connect to. The
		default port, that is used by brickd, is 4223.
		
		The values are stored in the EEPROM and only applied on startup. That means
		you have to restart the Master Brick after configuration.
		
		It is recommended to use the Brick Viewer to set the WIFI configuration.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI_CONFIGURATION, [ssid, connection, ip, subnetMask, gateway, port], 's32 B B4 B4 B4 H', '', returnCallback, errorCallback);
	};
	this.getWifiConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`SetWifiConfiguration`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_CONFIGURATION, [], '', 's32 B B4 B4 B4 H', returnCallback, errorCallback);
	};
	this.setWifiEncryption = function(encryption, key, keyIndex, eapOptions, caCertificateLength, clientCertificateLength, privateKeyLength, returnCallback, errorCallback) {
		/*
		Sets the encryption of the WIFI Extension. The first parameter is the
		type of the encryption. Possible values are:
		
		.. csv-table::
		 :header: "Value", "Description"
		 :widths: 10, 90
		
		 "0", "WPA/WPA2"
		 "1", "WPA Enterprise (EAP-FAST, EAP-TLS, EAP-TTLS, PEAP)"
		 "2", "WEP"
		 "3", "No Encryption"
		
		The ``key`` has a max length of 50 characters and is used if ``encryption``
		is set to 0 or 2 (WPA/WPA2 or WEP). Otherwise the value is ignored.
		
		For WPA/WPA2 the key has to be at least 8 characters long. If you want to set
		a key with more than 50 characters, see :func:`SetLongWifiKey`.
		
		For WEP the key has to be either 10 or 26 hexadecimal digits long. It is
		possible to set the WEP ``key_index`` (1-4). If you don't know your
		``key_index``, it is likely 1.
		
		If you choose WPA Enterprise as encryption, you have to set ``eap_options`` and
		the length of the certificates (for other encryption types these parameters
		are ignored). The certificate length are given in byte and the certificates
		themselves can be set with :func:`SetWifiCertificate`. ``eap_options`` consist
		of the outer authentication (bits 1-2), inner authentication (bit 3) and
		certificate type (bits 4-5):
		
		.. csv-table::
		 :header: "Option", "Bits", "Description"
		 :widths: 20, 10, 70
		
		 "outer authentication", "1-2", "0=EAP-FAST, 1=EAP-TLS, 2=EAP-TTLS, 3=EAP-PEAP"
		 "inner authentication", "3", "0=EAP-MSCHAP, 1=EAP-GTC"
		 "certificate type", "4-5", "0=CA Certificate, 1=Client Certificate, 2=Private Key"
		
		Example for EAP-TTLS + EAP-GTC + Private Key: ``option = 2 | (1 << 2) | (2 << 3)``.
		
		The values are stored in the EEPROM and only applied on startup. That means
		you have to restart the Master Brick after configuration.
		
		It is recommended to use the Brick Viewer to set the WIFI encryption.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI_ENCRYPTION, [encryption, key, keyIndex, eapOptions, caCertificateLength, clientCertificateLength, privateKeyLength], 'B s50 B B H H H', '', returnCallback, errorCallback);
	};
	this.getWifiEncryption = function(returnCallback, errorCallback) {
		/*
		Returns the encryption as set by :func:`SetWifiEncryption`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_ENCRYPTION, [], '', 'B s50 B B H H H', returnCallback, errorCallback);
	};
	this.getWifiStatus = function(returnCallback, errorCallback) {
		/*
		Returns the status of the WIFI Extension. The ``state`` is updated automatically,
		all of the other parameters are updated on startup and every time
		:func:`RefreshWifiStatus` is called.
		
		Possible states are:
		
		.. csv-table::
		 :header: "State", "Description"
		 :widths: 10, 90
		
		 "0", "Disassociated"
		 "1", "Associated"
		 "2", "Associating"
		 "3", "Error"
		 "255", "Not initialized yet"
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_STATUS, [], '', 'B6 B6 B h B4 B4 B4 I I B', returnCallback, errorCallback);
	};
	this.refreshWifiStatus = function(returnCallback, errorCallback) {
		/*
		Refreshes the WIFI status (see :func:`GetWifiStatus`). To read the status
		of the WIFI module, the Master Brick has to change from data mode to
		command mode and back. This transaction and the readout itself is
		unfortunately time consuming. This means, that it might take some ms
		until the stack with attached WIFI Extension reacts again after this
		function is called.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_REFRESH_WIFI_STATUS, [], '', '', returnCallback, errorCallback);
	};
	this.setWifiCertificate = function(index, data, dataLength, returnCallback, errorCallback) {
		/*
		This function is used to set the certificate as well as password and username
		for WPA Enterprise. To set the username use index 0xFFFF,
		to set the password use index 0xFFFE. The max length of username and 
		password is 32.
		
		The certificate is written in chunks of size 32 and the index is used as
		the index of the chunk. ``data_length`` should nearly always be 32. Only
		the last chunk can have a length that is not equal to 32.
		
		The starting index of the CA Certificate is 0, of the Client Certificate
		10000 and for the Private Key 20000. Maximum sizes are 1312, 1312 and
		4320 byte respectively.
		
		The values are stored in the EEPROM and only applied on startup. That means
		you have to restart the Master Brick after uploading the certificate.
		
		It is recommended to use the Brick Viewer to set the certificate, username
		and password.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI_CERTIFICATE, [index, data, dataLength], 'H B32 B', '', returnCallback, errorCallback);
	};
	this.getWifiCertificate = function(index, returnCallback, errorCallback) {
		/*
		Returns the certificate for a given index as set by :func:`SetWifiCertificate`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_CERTIFICATE, [index], 'H', 'B32 B', returnCallback, errorCallback);
	};
	this.setWifiPowerMode = function(mode, returnCallback, errorCallback) {
		/*
		Sets the power mode of the WIFI Extension. Possible modes are:
		
		.. csv-table::
		 :header: "Mode", "Description"
		 :widths: 10, 90
		
		 "0", "Full Speed (high power consumption, high throughput)"
		 "1", "Low Power (low power consumption, low throughput)"
		
		The default value is 0 (Full Speed).
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI_POWER_MODE, [mode], 'B', '', returnCallback, errorCallback);
	};
	this.getWifiPowerMode = function(returnCallback, errorCallback) {
		/*
		Returns the power mode as set by :func:`SetWifiPowerMode`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_POWER_MODE, [], '', 'B', returnCallback, errorCallback);
	};
	this.getWifiBufferInfo = function(returnCallback, errorCallback) {
		/*
		Returns informations about the WIFI receive buffer. The WIFI
		receive buffer has a max size of 1500 byte and if data is transfered
		too fast, it might overflow.
		
		The return values are the number of overflows, the low watermark 
		(i.e. the smallest number of bytes that were free in the buffer) and
		the bytes that are currently used.
		
		You should always try to keep the buffer empty, otherwise you will
		have a permanent latency. A good rule of thumb is, that you can transfer
		1000 messages per second without problems.
		
		Try to not send more then 50 messages at a time without any kind of
		break between them.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_BUFFER_INFO, [], '', 'I H H', returnCallback, errorCallback);
	};
	this.setWifiRegulatoryDomain = function(domain, returnCallback, errorCallback) {
		/*
		Sets the regulatory domain of the WIFI Extension. Possible domains are:
		
		.. csv-table::
		 :header: "Domain", "Description"
		 :widths: 10, 90
		
		 "0", "FCC: Channel 1-11 (N/S America, Australia, New Zealand)"
		 "1", "ETSI: Channel 1-13 (Europe, Middle East, Africa)"
		 "2", "TELEC: Channel 1-14 (Japan)"
		
		The default value is 1 (ETSI).
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI_REGULATORY_DOMAIN, [domain], 'B', '', returnCallback, errorCallback);
	};
	this.getWifiRegulatoryDomain = function(returnCallback, errorCallback) {
		/*
		Returns the regulatory domain as set by :func:`SetWifiRegulatoryDomain`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_REGULATORY_DOMAIN, [], '', 'B', returnCallback, errorCallback);
	};
	this.getUSBVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the USB voltage in mV.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_USB_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
	};
	this.setLongWifiKey = function(key, returnCallback, errorCallback) {
		/*
		Sets a long WIFI key (up to 63 chars, at least 8 chars) for WPA encryption.
		This key will be used
		if the key in :func:`SetWifiEncryption` is set to "-". In the old protocol,
		a payload of size 63 was not possible, so the maximum key length was 50 chars.
		
		With the new protocol this is possible, since we didn't want to break API,
		this function was added additionally.
		
		.. versionadded:: 2.0.2~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_LONG_WIFI_KEY, [key], 's64', '', returnCallback, errorCallback);
	};
	this.getLongWifiKey = function(returnCallback, errorCallback) {
		/*
		Returns the encryption key as set by :func:`SetLongWifiKey`.
		
		.. versionadded:: 2.0.2~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_LONG_WIFI_KEY, [], '', 's64', returnCallback, errorCallback);
	};
	this.setWifiHostname = function(hostname, returnCallback, errorCallback) {
		/*
		Sets the hostname of the WIFI Extension. The hostname will be displayed 
		by access points as the hostname in the DHCP clients table.
		
		Setting an empty String will restore the default hostname.
		
		.. versionadded:: 2.0.5~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI_HOSTNAME, [hostname], 's16', '', returnCallback, errorCallback);
	};
	this.getWifiHostname = function(returnCallback, errorCallback) {
		/*
		Returns the hostname as set by :func:`GetWifiHostname`.
		
		An empty String means, that the default hostname is used.
		
		.. versionadded:: 2.0.5~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_HOSTNAME, [], '', 's16', returnCallback, errorCallback);
	};
	this.setStackCurrentCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`StackCurrent` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`StackCurrent` is only triggered if the current has changed since the
		last triggering.
		
		The default value is 0.
		
		.. versionadded:: 2.0.5~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_STACK_CURRENT_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getStackCurrentCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetCurrentCallbackPeriod`.
		
		.. versionadded:: 2.0.5~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_STACK_CURRENT_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setStackVoltageCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`StackVoltage` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`StackVoltage` is only triggered if the voltage has changed since the
		last triggering.
		
		The default value is 0.
		
		.. versionadded:: 2.0.5~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_STACK_VOLTAGE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getStackVoltageCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetStackVoltageCallbackPeriod`.
		
		.. versionadded:: 2.0.5~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_STACK_VOLTAGE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setUSBVoltageCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`USBVoltage` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`USBVoltage` is only triggered if the voltage has changed since the
		last triggering.
		
		The default value is 0.
		
		.. versionadded:: 2.0.5~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_USB_VOLTAGE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getUSBVoltageCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetUSBVoltageCallbackPeriod`.
		
		.. versionadded:: 2.0.5~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_USB_VOLTAGE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setStackCurrentCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :func:`StackCurrentReached` callback. 
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the current is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the current is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the current is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the current is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		
		.. versionadded:: 2.0.5~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_STACK_CURRENT_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
	};
	this.getStackCurrentCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetStackCurrentCallbackThreshold`.
		
		.. versionadded:: 2.0.5~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_STACK_CURRENT_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
	};
	this.setStackVoltageCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :func:`StackStackVoltageReached` callback. 
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the voltage is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the voltage is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the voltage is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the voltage is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		
		.. versionadded:: 2.0.5~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_STACK_VOLTAGE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
	};
	this.getStackVoltageCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetStackVoltageCallbackThreshold`.
		
		.. versionadded:: 2.0.5~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_STACK_VOLTAGE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
	};
	this.setUSBVoltageCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :func:`USBVoltageReached` callback. 
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the voltage is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the voltage is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the voltage is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the voltage is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		
		.. versionadded:: 2.0.5~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_USB_VOLTAGE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
	};
	this.getUSBVoltageCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetUSBVoltageCallbackThreshold`.
		
		.. versionadded:: 2.0.5~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_USB_VOLTAGE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callbacks
		
		* :func:`StackCurrentReached`,
		* :func:`StackVoltageReached`,
		* :func:`USBVoltageReached`
		
		are triggered, if the thresholds
		
		* :func:`SetStackCurrentCallbackThreshold`,
		* :func:`SetStackVoltageCallbackThreshold`,
		* :func:`SetUSBVoltageCallbackThreshold`
		
		keep being reached.
		
		The default value is 100.
		
		.. versionadded:: 2.0.5~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`SetDebouncePeriod`.
		
		.. versionadded:: 2.0.5~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.isEthernetPresent = function(returnCallback, errorCallback) {
		/*
		Returns *true* if a Ethernet Extension is available to be used by the Master
		Brick.
		
		.. versionadded:: 2.1.0~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_IS_ETHERNET_PRESENT, [], '', '?', returnCallback, errorCallback);
	};
	this.setEthernetConfiguration = function(connection, ip, subnetMask, gateway, port, returnCallback, errorCallback) {
		/*
		Sets the configuration of the Ethernet Extension. Possible values for
		``connection`` are:
		
		.. csv-table::
		 :header: "Value", "Description"
		 :widths: 10, 90
		
		 "0", "DHCP"
		 "1", "Static IP"
		
		If you set ``connection`` to static IP options then you have to supply ``ip``,
		``subnet_mask`` and ``gateway`` as an array of size 4 (first element of the
		array is the least significant byte of the address). If ``connection`` is set
		to the DHCP options then ``ip``, ``subnet_mask`` and ``gateway`` are ignored,
		you can set them to 0.
		
		The last parameter is the port that your program will connect to. The
		default port, that is used by brickd, is 4223.
		
		The values are stored in the EEPROM and only applied on startup. That means
		you have to restart the Master Brick after configuration.
		
		It is recommended to use the Brick Viewer to set the Ethernet configuration.
		
		.. versionadded:: 2.1.0~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_ETHERNET_CONFIGURATION, [connection, ip, subnetMask, gateway, port], 'B B4 B4 B4 H', '', returnCallback, errorCallback);
	};
	this.getEthernetConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`SetEthernetConfiguration`.
		
		.. versionadded:: 2.1.0~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_ETHERNET_CONFIGURATION, [], '', 'B B4 B4 B4 H', returnCallback, errorCallback);
	};
	this.getEthernetStatus = function(returnCallback, errorCallback) {
		/*
		Returns the status of the Ethernet Extension.
		
		``mac_address``, ``ip``, ``subnet_mask`` and ``gateway`` are given as an array.
		The first element of the array is the least significant byte of the address.
		
		``rx_count`` and ``tx_count`` are the number of bytes that have been
		received/send since last restart.
		
		``hostname`` is the currently used hostname.
		
		.. versionadded:: 2.1.0~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_ETHERNET_STATUS, [], '', 'B6 B4 B4 B4 I I s32', returnCallback, errorCallback);
	};
	this.setEthernetHostname = function(hostname, returnCallback, errorCallback) {
		/*
		Sets the hostname of the Ethernet Extension. The hostname will be displayed 
		by access points as the hostname in the DHCP clients table.
		
		Setting an empty String will restore the default hostname.
		
		The current hostname can be discovered with :func:`GetEthernetStatus`.
		
		.. versionadded:: 2.1.0~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_ETHERNET_HOSTNAME, [hostname], 's32', '', returnCallback, errorCallback);
	};
	this.setEthernetMACAddress = function(macAddress, returnCallback, errorCallback) {
		/*
		Sets the MAC address of the Ethernet Extension. The Ethernet Extension should
		come configured with a valid MAC address, that is also written on a
		sticker of the extension itself.
		
		The MAC address can be read out again with :func:`GetEthernetStatus`.
		
		.. versionadded:: 2.1.0~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_ETHERNET_MAC_ADDRESS, [macAddress], 'B6', '', returnCallback, errorCallback);
	};
	this.setEthernetWebsocketConfiguration = function(sockets, port, returnCallback, errorCallback) {
		/*
		Sets the Ethernet WebSocket configuration. The first parameter sets the number of socket
		connections that are reserved for WebSockets. The range is 0-7. The connections
		are shared with the plain sockets. Example: If you set the connections to 3,
		there will be 3 WebSocket and 4 plain socket connections available.
		
		The second parameter is the port for the WebSocket connections. The port can
		not be the same as the port for the plain socket connections.
		
		The values are stored in the EEPROM and only applied on startup. That means
		you have to restart the Master Brick after configuration.
		
		It is recommended to use the Brick Viewer to set the Ethernet configuration.
		
		The default values are 3 for the socket connections and 4280 for the port.
		
		.. versionadded:: 2.2.0~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_ETHERNET_WEBSOCKET_CONFIGURATION, [sockets, port], 'B H', '', returnCallback, errorCallback);
	};
	this.getEthernetWebsocketConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`SetEthernetConfiguration`.
		
		.. versionadded:: 2.2.0~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_ETHERNET_WEBSOCKET_CONFIGURATION, [], '', 'B H', returnCallback, errorCallback);
	};
	this.setEthernetAuthenticationSecret = function(secret, returnCallback, errorCallback) {
		/*
		Sets the Ethernet authentication secret. The secret can be a string of up to 64
		characters. An empty string disables the authentication.
		
		See the :ref:`authentication tutorial <tutorial_authentication>` for more
		information.
		
		The secret is stored in the EEPROM and only applied on startup. That means
		you have to restart the Master Brick after configuration.
		
		It is recommended to use the Brick Viewer to set the Ethernet authentication secret.
		
		The default value is an empty string (authentication disabled).
		
		.. versionadded:: 2.2.0~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_ETHERNET_AUTHENTICATION_SECRET, [secret], 's64', '', returnCallback, errorCallback);
	};
	this.getEthernetAuthenticationSecret = function(returnCallback, errorCallback) {
		/*
		Returns the authentication secret as set by :func:`SetEthernetAuthenticationSecret`.
		
		.. versionadded:: 2.2.0~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_ETHERNET_AUTHENTICATION_SECRET, [], '', 's64', returnCallback, errorCallback);
	};
	this.setWifiAuthenticationSecret = function(secret, returnCallback, errorCallback) {
		/*
		Sets the WIFI authentication secret. The secret can be a string of up to 64
		characters. An empty string disables the authentication.
		
		See the :ref:`authentication tutorial <tutorial_authentication>` for more
		information.
		
		The secret is stored in the EEPROM and only applied on startup. That means
		you have to restart the Master Brick after configuration.
		
		It is recommended to use the Brick Viewer to set the WIFI authentication secret.
		
		The default value is an empty string (authentication disabled).
		
		.. versionadded:: 2.2.0~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI_AUTHENTICATION_SECRET, [secret], 's64', '', returnCallback, errorCallback);
	};
	this.getWifiAuthenticationSecret = function(returnCallback, errorCallback) {
		/*
		Returns the authentication secret as set by :func:`SetWifiAuthenticationSecret`.
		
		.. versionadded:: 2.2.0~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_AUTHENTICATION_SECRET, [], '', 's64', returnCallback, errorCallback);
	};
	this.getProtocol1BrickletName = function(port, returnCallback, errorCallback) {
		/*
		Returns the firmware and protocol version and the name of the Bricklet for a
		given port.
		
		This functions sole purpose is to allow automatic flashing of v1.x.y Bricklet
		plugins.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME, [port], 'c', 'B B3 s40', returnCallback, errorCallback);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature in °C/10 as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has an
		accuracy of +-15%. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Brick. Calling this function
		on a Brick inside of a stack will reset the whole stack.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_RESET, [], '', '', returnCallback, errorCallback);
	};
	this.getIdentity = function(returnCallback, errorCallback) {
		/*
		Returns the UID, the UID where the Brick is connected to, 
		the position, the hardware and firmware version as well as the
		device identifier.
		
		The position can be '0'-'8' (stack position).
		
		The device identifier numbers can be found :ref:`here <device_identifier>`.
		|device_identifier_constant|
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickMaster;
