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

BrickletPiezoBuzzer.DEVICE_IDENTIFIER = 214;
BrickletPiezoBuzzer.CALLBACK_BEEP_FINISHED = 3;
BrickletPiezoBuzzer.CALLBACK_MORSE_CODE_FINISHED = 4;
BrickletPiezoBuzzer.FUNCTION_BEEP = 1;
BrickletPiezoBuzzer.FUNCTION_MORSE_CODE = 2;
BrickletPiezoBuzzer.FUNCTION_GET_IDENTITY = 255;

function BrickletPiezoBuzzer(uid, ipcon) {
	//Device for controlling a piezo buzzer

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletPiezoBuzzer.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletPiezoBuzzer.FUNCTION_BEEP] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletPiezoBuzzer.FUNCTION_MORSE_CODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletPiezoBuzzer.CALLBACK_BEEP_FINISHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletPiezoBuzzer.CALLBACK_MORSE_CODE_FINISHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletPiezoBuzzer.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletPiezoBuzzer.CALLBACK_BEEP_FINISHED] = '';
	this.callbackFormats[BrickletPiezoBuzzer.CALLBACK_MORSE_CODE_FINISHED] = '';

	this.beep = function(duration, returnCallback, errorCallback) {
		/*
		Beeps with the duration in ms. For example: If you set a value of 1000,
		the piezo buzzer will beep for one second.
		*/
		this.ipcon.sendRequest(this, BrickletPiezoBuzzer.FUNCTION_BEEP, [duration], 'I', '', returnCallback, errorCallback);
	};
	this.morseCode = function(morse, returnCallback, errorCallback) {
		/*
		Sets morse code that will be played by the piezo buzzer. The morse code
		is given as a string consisting of "." (dot), "-" (minus) and " " (space)
		for *dits*, *dahs* and *pauses*. Every other character is ignored.
		
		For example: If you set the string "...---...", the piezo buzzer will beep
		nine times with the durations "short short short long long long short 
		short short".
		
		The maximum string size is 60.
		*/
		this.ipcon.sendRequest(this, BrickletPiezoBuzzer.FUNCTION_MORSE_CODE, [morse], 's60', '', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletPiezoBuzzer.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletPiezoBuzzer;
