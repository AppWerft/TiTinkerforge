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

BrickletMultiTouch.DEVICE_IDENTIFIER = 234;
BrickletMultiTouch.CALLBACK_TOUCH_STATE = 5;
BrickletMultiTouch.FUNCTION_GET_TOUCH_STATE = 1;
BrickletMultiTouch.FUNCTION_RECALIBRATE = 2;
BrickletMultiTouch.FUNCTION_SET_ELECTRODE_CONFIG = 3;
BrickletMultiTouch.FUNCTION_GET_ELECTRODE_CONFIG = 4;
BrickletMultiTouch.FUNCTION_SET_ELECTRODE_SENSITIVITY = 6;
BrickletMultiTouch.FUNCTION_GET_ELECTRODE_SENSITIVITY = 7;
BrickletMultiTouch.FUNCTION_GET_IDENTITY = 255;

function BrickletMultiTouch(uid, ipcon) {
	//Device with 12 touch sensors

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletMultiTouch.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletMultiTouch.FUNCTION_GET_TOUCH_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMultiTouch.FUNCTION_RECALIBRATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMultiTouch.FUNCTION_SET_ELECTRODE_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMultiTouch.FUNCTION_GET_ELECTRODE_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMultiTouch.CALLBACK_TOUCH_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletMultiTouch.FUNCTION_SET_ELECTRODE_SENSITIVITY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMultiTouch.FUNCTION_GET_ELECTRODE_SENSITIVITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMultiTouch.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletMultiTouch.CALLBACK_TOUCH_STATE] = 'H';

	this.getTouchState = function(returnCallback, errorCallback) {
		/*
		Returns the current touch state. The state is given as a bitfield.
		
		Bits 0 to 11 represent the 12 electrodes and bit 12 represents
		the proximity.
		
		If an electrode is touched, the corresponding bit is true. If
		a hand or similar is in proximity to the electrodes, bit 12 is
		*true*.
		
		Example: The state 4103 = 0x1007 = 0b1000000000111 means that
		electrodes 0, 1 and 2 are touched and that something is in the
		proximity of the electrodes.
		
		The proximity is activated with a distance of 1-2cm. An electrode
		is already counted as touched if a finger is nearly touching the
		electrode. This means that you can put a piece of paper or foil
		or similar on top of a electrode to build a touch panel with
		a professional look.
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouch.FUNCTION_GET_TOUCH_STATE, [], '', 'H', returnCallback, errorCallback);
	};
	this.recalibrate = function(returnCallback, errorCallback) {
		/*
		Recalibrates the electrodes. Call this function whenever you changed
		or moved you electrodes.
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouch.FUNCTION_RECALIBRATE, [], '', '', returnCallback, errorCallback);
	};
	this.setElectrodeConfig = function(enabledElectrodes, returnCallback, errorCallback) {
		/*
		Enables/disables electrodes with a bitfield (see :func:`GetTouchState`).
		
		*True* enables the electrode, *false* disables the electrode. A
		disabled electrode will always return *false* as its state. If you
		don't need all electrodes you can disable the electrodes that are
		not needed.
		
		It is recommended that you disable the proximity bit (bit 12) if
		the proximity feature is not needed. This will reduce the amount of
		traffic that is produced by the :func:`TouchState` callback.
		
		Disabling electrodes will also reduce power consumption.
		
		Default: 8191 = 0x1FFF = 0b1111111111111 (all electrodes enabled)
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouch.FUNCTION_SET_ELECTRODE_CONFIG, [enabledElectrodes], 'H', '', returnCallback, errorCallback);
	};
	this.getElectrodeConfig = function(returnCallback, errorCallback) {
		/*
		Returns the electrode configuration, as set by :func:`SetElectrodeConfig`.
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouch.FUNCTION_GET_ELECTRODE_CONFIG, [], '', 'H', returnCallback, errorCallback);
	};
	this.setElectrodeSensitivity = function(sensitivity, returnCallback, errorCallback) {
		/*
		Sets the sensitivity of the electrodes. An electrode with a high sensitivity
		will register a touch earlier then an electrode with a low sensitivity.
		
		If you build a big electrode you might need to decrease the sensitivity, since
		the area that can be charged will get bigger. If you want to be able to
		activate an electrode from further away you need to increase the sensitivity.
		
		After a new sensitivity is set, you likely want to call :func:`Recalibrate`
		to calibrate the electrodes with the newly defined sensitivity.
		
		The valid sensitivity value range is 5-201.
		
		The default sensitivity value is 181.
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouch.FUNCTION_SET_ELECTRODE_SENSITIVITY, [sensitivity], 'B', '', returnCallback, errorCallback);
	};
	this.getElectrodeSensitivity = function(returnCallback, errorCallback) {
		/*
		Returns the current sensitivity, as set by :func:`SetElectrodeSensitivity`.
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouch.FUNCTION_GET_ELECTRODE_SENSITIVITY, [], '', 'B', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletMultiTouch.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletMultiTouch;
