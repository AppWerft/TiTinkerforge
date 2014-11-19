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

BrickletAnalogOut.DEVICE_IDENTIFIER = 220;
BrickletAnalogOut.FUNCTION_SET_VOLTAGE = 1;
BrickletAnalogOut.FUNCTION_GET_VOLTAGE = 2;
BrickletAnalogOut.FUNCTION_SET_MODE = 3;
BrickletAnalogOut.FUNCTION_GET_MODE = 4;
BrickletAnalogOut.FUNCTION_GET_IDENTITY = 255;
BrickletAnalogOut.MODE_ANALOG_VALUE = 0;
BrickletAnalogOut.MODE_1K_TO_GROUND = 1;
BrickletAnalogOut.MODE_100K_TO_GROUND = 2;
BrickletAnalogOut.MODE_500K_TO_GROUND = 3;

function BrickletAnalogOut(uid, ipcon) {
	//Device for output of voltage between 0 and 5V

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletAnalogOut.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletAnalogOut.FUNCTION_SET_VOLTAGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAnalogOut.FUNCTION_GET_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAnalogOut.FUNCTION_SET_MODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAnalogOut.FUNCTION_GET_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAnalogOut.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.setVoltage = function(voltage, returnCallback, errorCallback) {
		/*
		Sets the voltage in mV. The possible range is 0V to 5V (0-5000).
		Calling this function will set the mode to 0 (see :func:`SetMode`).
		
		The default value is 0 (with mode 1).
		*/
		this.ipcon.sendRequest(this, BrickletAnalogOut.FUNCTION_SET_VOLTAGE, [voltage], 'H', '', returnCallback, errorCallback);
	};
	this.getVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the voltage as set by :func:`SetVoltage`.
		*/
		this.ipcon.sendRequest(this, BrickletAnalogOut.FUNCTION_GET_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
	};
	this.setMode = function(mode, returnCallback, errorCallback) {
		/*
		Sets the mode of the analog value. Possible modes:
		
		* 0: Normal Mode (Analog value as set by :func:`SetVoltage` is applied)
		* 1: 1k Ohm resistor to ground
		* 2: 100k Ohm resistor to ground
		* 3: 500k Ohm resistor to ground
		
		Setting the mode to 0 will result in an output voltage of 0. You can jump
		to a higher output voltage directly by calling :func:`SetVoltage`.
		
		The default mode is 1.
		*/
		this.ipcon.sendRequest(this, BrickletAnalogOut.FUNCTION_SET_MODE, [mode], 'B', '', returnCallback, errorCallback);
	};
	this.getMode = function(returnCallback, errorCallback) {
		/*
		Returns the mode as set by :func:`SetMode`.
		*/
		this.ipcon.sendRequest(this, BrickletAnalogOut.FUNCTION_GET_MODE, [], '', 'B', returnCallback, errorCallback);
	};
	this.getIdentity = function(returnCallback, errorCallback) {
		/*
		Returns the UID, the UID where the Bricklet is connected to, 
		the position, the hardware and firmware version as well as the
		device identifier.
		
		The position can be 'a', 'b', 'c' or 'd'.
		
		The device identifier numbers can be found :ref:`here <device_identifier>`.
		|device_identifier_constant|
		*/
		this.ipcon.sendRequest(this, BrickletAnalogOut.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletAnalogOut;
