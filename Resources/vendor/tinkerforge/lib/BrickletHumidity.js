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

BrickletHumidity.DEVICE_IDENTIFIER = 27;
BrickletHumidity.CALLBACK_HUMIDITY = 13;
BrickletHumidity.CALLBACK_ANALOG_VALUE = 14;
BrickletHumidity.CALLBACK_HUMIDITY_REACHED = 15;
BrickletHumidity.CALLBACK_ANALOG_VALUE_REACHED = 16;
BrickletHumidity.FUNCTION_GET_HUMIDITY = 1;
BrickletHumidity.FUNCTION_GET_ANALOG_VALUE = 2;
BrickletHumidity.FUNCTION_SET_HUMIDITY_CALLBACK_PERIOD = 3;
BrickletHumidity.FUNCTION_GET_HUMIDITY_CALLBACK_PERIOD = 4;
BrickletHumidity.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 5;
BrickletHumidity.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 6;
BrickletHumidity.FUNCTION_SET_HUMIDITY_CALLBACK_THRESHOLD = 7;
BrickletHumidity.FUNCTION_GET_HUMIDITY_CALLBACK_THRESHOLD = 8;
BrickletHumidity.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 9;
BrickletHumidity.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 10;
BrickletHumidity.FUNCTION_SET_DEBOUNCE_PERIOD = 11;
BrickletHumidity.FUNCTION_GET_DEBOUNCE_PERIOD = 12;
BrickletHumidity.FUNCTION_GET_IDENTITY = 255;
BrickletHumidity.THRESHOLD_OPTION_OFF = 'x';
BrickletHumidity.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletHumidity.THRESHOLD_OPTION_INSIDE = 'i';
BrickletHumidity.THRESHOLD_OPTION_SMALLER = '<';
BrickletHumidity.THRESHOLD_OPTION_GREATER = '>';

function BrickletHumidity(uid, ipcon) {
	//Device for sensing Humidity

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletHumidity.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletHumidity.FUNCTION_GET_HUMIDITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_SET_HUMIDITY_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_GET_HUMIDITY_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_SET_HUMIDITY_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_GET_HUMIDITY_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidity.CALLBACK_HUMIDITY] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletHumidity.CALLBACK_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletHumidity.CALLBACK_HUMIDITY_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletHumidity.CALLBACK_ANALOG_VALUE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletHumidity.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletHumidity.CALLBACK_HUMIDITY] = 'H';
	this.callbackFormats[BrickletHumidity.CALLBACK_ANALOG_VALUE] = 'H';
	this.callbackFormats[BrickletHumidity.CALLBACK_HUMIDITY_REACHED] = 'H';
	this.callbackFormats[BrickletHumidity.CALLBACK_ANALOG_VALUE_REACHED] = 'H';

	this.getHumidity = function(returnCallback, errorCallback) {
		/*
		Returns the humidity of the sensor. The value
		has a range of 0 to 1000 and is given in %RH/10 (Relative Humidity), 
		i.e. a value of 421 means that a humidity of 42.1 %RH is measured.
		
		If you want to get the humidity periodically, it is recommended to use the
		callback :func:`Humidity` and set the period with 
		:func:`SetHumidityCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_HUMIDITY, [], '', 'H', returnCallback, errorCallback);
	};
	this.getAnalogValue = function(returnCallback, errorCallback) {
		/*
		Returns the value as read by a 12-bit analog-to-digital converter.
		The value is between 0 and 4095.
		
		.. note::
		 The value returned by :func:`GetHumidity` is averaged over several samples
		 to yield less noise, while :func:`GetAnalogValue` gives back raw
		 unfiltered analog values. The returned humidity value is calibrated for
		 room temperatures, if you use the sensor in extreme cold or extreme
		 warm environments, you might want to calculate the humidity from
		 the analog value yourself. See the `HIH 5030 datasheet
		 <https://github.com/Tinkerforge/humidity-bricklet/raw/master/datasheets/hih-5030.pdf>`__.
		
		If you want the analog value periodically, it is recommended to use the 
		callback :func:`AnalogValue` and set the period with 
		:func:`SetAnalogValueCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_ANALOG_VALUE, [], '', 'H', returnCallback, errorCallback);
	};
	this.setHumidityCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`Humidity` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`Humidity` is only triggered if the humidity has changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_SET_HUMIDITY_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getHumidityCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetHumidityCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_HUMIDITY_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`AnalogValue` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`AnalogValue` is only triggered if the analog value has changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetAnalogValueCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setHumidityCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :func:`HumidityReached` callback. 
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the humidity is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the humidity is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the humidity is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the humidity is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_SET_HUMIDITY_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback);
	};
	this.getHumidityCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetHumidityCallbackThreshold`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_HUMIDITY_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
	};
	this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetAnalogValueCallbackThreshold`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callbacks
		
		* :func:`HumidityReached`,
		* :func:`AnalogValueReached`
		
		are triggered, if the thresholds
		
		* :func:`SetHumidityCallbackThreshold`,
		* :func:`SetAnalogValueCallbackThreshold`
		
		keep being reached.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`SetDebouncePeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletHumidity;
