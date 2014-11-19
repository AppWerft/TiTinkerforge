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

BrickletCurrent25.DEVICE_IDENTIFIER = 24;
BrickletCurrent25.CALLBACK_CURRENT = 15;
BrickletCurrent25.CALLBACK_ANALOG_VALUE = 16;
BrickletCurrent25.CALLBACK_CURRENT_REACHED = 17;
BrickletCurrent25.CALLBACK_ANALOG_VALUE_REACHED = 18;
BrickletCurrent25.CALLBACK_OVER_CURRENT = 19;
BrickletCurrent25.FUNCTION_GET_CURRENT = 1;
BrickletCurrent25.FUNCTION_CALIBRATE = 2;
BrickletCurrent25.FUNCTION_IS_OVER_CURRENT = 3;
BrickletCurrent25.FUNCTION_GET_ANALOG_VALUE = 4;
BrickletCurrent25.FUNCTION_SET_CURRENT_CALLBACK_PERIOD = 5;
BrickletCurrent25.FUNCTION_GET_CURRENT_CALLBACK_PERIOD = 6;
BrickletCurrent25.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 7;
BrickletCurrent25.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 8;
BrickletCurrent25.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD = 9;
BrickletCurrent25.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD = 10;
BrickletCurrent25.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 11;
BrickletCurrent25.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 12;
BrickletCurrent25.FUNCTION_SET_DEBOUNCE_PERIOD = 13;
BrickletCurrent25.FUNCTION_GET_DEBOUNCE_PERIOD = 14;
BrickletCurrent25.FUNCTION_GET_IDENTITY = 255;
BrickletCurrent25.THRESHOLD_OPTION_OFF = 'x';
BrickletCurrent25.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletCurrent25.THRESHOLD_OPTION_INSIDE = 'i';
BrickletCurrent25.THRESHOLD_OPTION_SMALLER = '<';
BrickletCurrent25.THRESHOLD_OPTION_GREATER = '>';

function BrickletCurrent25(uid, ipcon) {
	//Device for sensing current of up to 25A

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletCurrent25.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletCurrent25.FUNCTION_GET_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCurrent25.FUNCTION_CALIBRATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCurrent25.FUNCTION_IS_OVER_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCurrent25.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCurrent25.FUNCTION_SET_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCurrent25.FUNCTION_GET_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCurrent25.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCurrent25.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCurrent25.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCurrent25.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCurrent25.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCurrent25.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCurrent25.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCurrent25.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCurrent25.CALLBACK_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletCurrent25.CALLBACK_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletCurrent25.CALLBACK_CURRENT_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletCurrent25.CALLBACK_ANALOG_VALUE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletCurrent25.CALLBACK_OVER_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletCurrent25.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletCurrent25.CALLBACK_CURRENT] = 'h';
	this.callbackFormats[BrickletCurrent25.CALLBACK_ANALOG_VALUE] = 'H';
	this.callbackFormats[BrickletCurrent25.CALLBACK_CURRENT_REACHED] = 'h';
	this.callbackFormats[BrickletCurrent25.CALLBACK_ANALOG_VALUE_REACHED] = 'H';
	this.callbackFormats[BrickletCurrent25.CALLBACK_OVER_CURRENT] = '';

	this.getCurrent = function(returnCallback, errorCallback) {
		/*
		Returns the current of the sensor. The value is in mA
		and between -25000mA and 25000mA.
		
		If you want to get the current periodically, it is recommended to use the
		callback :func:`Current` and set the period with 
		:func:`SetCurrentCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_GET_CURRENT, [], '', 'h', returnCallback, errorCallback);
	};
	this.calibrate = function(returnCallback, errorCallback) {
		/*
		Calibrates the 0 value of the sensor. You have to call this function
		when there is no current present. 
		
		The zero point of the current sensor
		is depending on the exact properties of the analog-to-digital converter,
		the length of the Bricklet cable and the temperature. Thus, if you change
		the Brick or the environment in which the Bricklet is used, you might
		have to recalibrate.
		
		The resulting calibration will be saved on the EEPROM of the Current
		Bricklet.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_CALIBRATE, [], '', '', returnCallback, errorCallback);
	};
	this.isOverCurrent = function(returnCallback, errorCallback) {
		/*
		Returns *true* if more than 25A were measured.
		
		.. note::
		 To reset this value you have to power cycle the Bricklet.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_IS_OVER_CURRENT, [], '', '?', returnCallback, errorCallback);
	};
	this.getAnalogValue = function(returnCallback, errorCallback) {
		/*
		Returns the value as read by a 12-bit analog-to-digital converter.
		The value is between 0 and 4095.
		
		.. note::
		 The value returned by :func:`GetCurrent` is averaged over several samples
		 to yield less noise, while :func:`GetAnalogValue` gives back raw
		 unfiltered analog values. The only reason to use :func:`GetAnalogValue` is,
		 if you need the full resolution of the analog-to-digital converter.
		
		If you want the analog value periodically, it is recommended to use the 
		callback :func:`AnalogValue` and set the period with 
		:func:`SetAnalogValueCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_GET_ANALOG_VALUE, [], '', 'H', returnCallback, errorCallback);
	};
	this.setCurrentCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`Current` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`Current` is only triggered if the current has changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_SET_CURRENT_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getCurrentCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetCurrentCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_GET_CURRENT_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`AnalogValue` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`AnalogValue` is only triggered if the analog value has changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetAnalogValueCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setCurrentCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :func:`CurrentReached` callback. 
		
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
		*/
		this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback);
	};
	this.getCurrentCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetCurrentCallbackThreshold`.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback);
	};
	this.setAnalogValueCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :func:`AnalogValueReached` callback. 
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the analog value is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the analog value is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the analog value is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the analog value is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
	};
	this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetAnalogValueCallbackThreshold`.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callbacks
		
		* :func:`CurrentReached`,
		* :func:`AnalogValueReached`
		
		are triggered, if the thresholds
		
		* :func:`SetCurrentCallbackThreshold`,
		* :func:`SetAnalogValueCallbackThreshold`
		
		keep being reached.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`SetDebouncePeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletCurrent25;
