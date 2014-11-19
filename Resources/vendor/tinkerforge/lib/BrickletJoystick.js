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

BrickletJoystick.DEVICE_IDENTIFIER = 210;
BrickletJoystick.CALLBACK_POSITION = 15;
BrickletJoystick.CALLBACK_ANALOG_VALUE = 16;
BrickletJoystick.CALLBACK_POSITION_REACHED = 17;
BrickletJoystick.CALLBACK_ANALOG_VALUE_REACHED = 18;
BrickletJoystick.CALLBACK_PRESSED = 19;
BrickletJoystick.CALLBACK_RELEASED = 20;
BrickletJoystick.FUNCTION_GET_POSITION = 1;
BrickletJoystick.FUNCTION_IS_PRESSED = 2;
BrickletJoystick.FUNCTION_GET_ANALOG_VALUE = 3;
BrickletJoystick.FUNCTION_CALIBRATE = 4;
BrickletJoystick.FUNCTION_SET_POSITION_CALLBACK_PERIOD = 5;
BrickletJoystick.FUNCTION_GET_POSITION_CALLBACK_PERIOD = 6;
BrickletJoystick.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 7;
BrickletJoystick.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 8;
BrickletJoystick.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD = 9;
BrickletJoystick.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD = 10;
BrickletJoystick.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 11;
BrickletJoystick.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 12;
BrickletJoystick.FUNCTION_SET_DEBOUNCE_PERIOD = 13;
BrickletJoystick.FUNCTION_GET_DEBOUNCE_PERIOD = 14;
BrickletJoystick.FUNCTION_GET_IDENTITY = 255;
BrickletJoystick.THRESHOLD_OPTION_OFF = 'x';
BrickletJoystick.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletJoystick.THRESHOLD_OPTION_INSIDE = 'i';
BrickletJoystick.THRESHOLD_OPTION_SMALLER = '<';
BrickletJoystick.THRESHOLD_OPTION_GREATER = '>';

function BrickletJoystick(uid, ipcon) {
	//Dual-Axis Joystick with Button

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletJoystick.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletJoystick.FUNCTION_GET_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_IS_PRESSED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_CALIBRATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletJoystick.FUNCTION_SET_POSITION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_GET_POSITION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletJoystick.CALLBACK_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletJoystick.CALLBACK_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletJoystick.CALLBACK_POSITION_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletJoystick.CALLBACK_ANALOG_VALUE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletJoystick.CALLBACK_PRESSED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletJoystick.CALLBACK_RELEASED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletJoystick.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletJoystick.CALLBACK_POSITION] = 'h h';
	this.callbackFormats[BrickletJoystick.CALLBACK_ANALOG_VALUE] = 'H H';
	this.callbackFormats[BrickletJoystick.CALLBACK_POSITION_REACHED] = 'h h';
	this.callbackFormats[BrickletJoystick.CALLBACK_ANALOG_VALUE_REACHED] = 'H H';
	this.callbackFormats[BrickletJoystick.CALLBACK_PRESSED] = '';
	this.callbackFormats[BrickletJoystick.CALLBACK_RELEASED] = '';

	this.getPosition = function(returnCallback, errorCallback) {
		/*
		Returns the position of the Joystick. The value ranges between -100 and
		100 for both axis. The middle position of the joystick is x=0, y=0. The
		returned values are averaged and calibrated (see :func:`Calibrate`).
		
		If you want to get the position periodically, it is recommended to use the
		callback :func:`Position` and set the period with 
		:func:`SetPositionCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_POSITION, [], '', 'h h', returnCallback, errorCallback);
	};
	this.isPressed = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the button is pressed and *false* otherwise.
		
		It is recommended to use the :func:`Pressed` and :func:`Released` callbacks
		to handle the button.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_IS_PRESSED, [], '', '?', returnCallback, errorCallback);
	};
	this.getAnalogValue = function(returnCallback, errorCallback) {
		/*
		Returns the values as read by a 12-bit analog-to-digital converter.
		The values are between 0 and 4095 for both axis.
		
		.. note::
		 The values returned by :func:`GetPosition` are averaged over several samples
		 to yield less noise, while :func:`GetAnalogValue` gives back raw
		 unfiltered analog values. The only reason to use :func:`GetAnalogValue` is,
		 if you need the full resolution of the analog-to-digital converter.
		
		If you want the analog values periodically, it is recommended to use the 
		callback :func:`AnalogValue` and set the period with 
		:func:`SetAnalogValueCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_ANALOG_VALUE, [], '', 'H H', returnCallback, errorCallback);
	};
	this.calibrate = function(returnCallback, errorCallback) {
		/*
		Calibrates the middle position of the Joystick. If your Joystick Bricklet
		does not return x=0 and y=0 in the middle position, call this function
		while the Joystick is standing still in the middle position.
		
		The resulting calibration will be saved on the EEPROM of the Joystick
		Bricklet, thus you only have to calibrate it once.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_CALIBRATE, [], '', '', returnCallback, errorCallback);
	};
	this.setPositionCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`Position` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`Position` is only triggered if the position has changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_SET_POSITION_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getPositionCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetPositionCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_POSITION_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`AnalogValue` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`AnalogValue` is only triggered if the analog values have changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetAnalogValueCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setPositionCallbackThreshold = function(option, minX, maxX, minY, maxY, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :func:`PositionReached` callback. 
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the position is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the position is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the position is smaller than the min values (max is ignored)"
		 "'>'",    "Callback is triggered when the position is greater than the min values (max is ignored)"
		
		The default value is ('x', 0, 0, 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD, [option, minX, maxX, minY, maxY], 'c h h h h', '', returnCallback, errorCallback);
	};
	this.getPositionCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetPositionCallbackThreshold`.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD, [], '', 'c h h h h', returnCallback, errorCallback);
	};
	this.setAnalogValueCallbackThreshold = function(option, minX, maxX, minY, maxY, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :func:`AnalogValueReached` callback. 
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the analog values are *outside* the min and max values"
		 "'i'",    "Callback is triggered when the analog values are *inside* the min and max values"
		 "'<'",    "Callback is triggered when the analog values are smaller than the min values (max is ignored)"
		 "'>'",    "Callback is triggered when the analog values are greater than the min values (max is ignored)"
		
		The default value is ('x', 0, 0, 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, minX, maxX, minY, maxY], 'c H H H H', '', returnCallback, errorCallback);
	};
	this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetAnalogValueCallbackThreshold`.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 'c H H H H', returnCallback, errorCallback);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callbacks
		
		* :func:`PositionReached`,
		* :func:`AnalogValueReached`
		
		are triggered, if the thresholds
		
		* :func:`SetPositionCallbackThreshold`,
		* :func:`SetAnalogValueCallbackThreshold`
		
		keep being reached.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`SetDebouncePeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletJoystick;
