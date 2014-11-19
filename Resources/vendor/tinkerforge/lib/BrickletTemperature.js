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

BrickletTemperature.DEVICE_IDENTIFIER = 216;
BrickletTemperature.CALLBACK_TEMPERATURE = 8;
BrickletTemperature.CALLBACK_TEMPERATURE_REACHED = 9;
BrickletTemperature.FUNCTION_GET_TEMPERATURE = 1;
BrickletTemperature.FUNCTION_SET_TEMPERATURE_CALLBACK_PERIOD = 2;
BrickletTemperature.FUNCTION_GET_TEMPERATURE_CALLBACK_PERIOD = 3;
BrickletTemperature.FUNCTION_SET_TEMPERATURE_CALLBACK_THRESHOLD = 4;
BrickletTemperature.FUNCTION_GET_TEMPERATURE_CALLBACK_THRESHOLD = 5;
BrickletTemperature.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletTemperature.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletTemperature.FUNCTION_SET_I2C_MODE = 10;
BrickletTemperature.FUNCTION_GET_I2C_MODE = 11;
BrickletTemperature.FUNCTION_GET_IDENTITY = 255;
BrickletTemperature.THRESHOLD_OPTION_OFF = 'x';
BrickletTemperature.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletTemperature.THRESHOLD_OPTION_INSIDE = 'i';
BrickletTemperature.THRESHOLD_OPTION_SMALLER = '<';
BrickletTemperature.THRESHOLD_OPTION_GREATER = '>';
BrickletTemperature.I2C_MODE_FAST = 0;
BrickletTemperature.I2C_MODE_SLOW = 1;

function BrickletTemperature(uid, ipcon) {
	//Device for sensing Temperature

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletTemperature.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletTemperature.FUNCTION_GET_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperature.FUNCTION_SET_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletTemperature.FUNCTION_GET_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperature.FUNCTION_SET_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletTemperature.FUNCTION_GET_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperature.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletTemperature.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperature.CALLBACK_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletTemperature.CALLBACK_TEMPERATURE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletTemperature.FUNCTION_SET_I2C_MODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletTemperature.FUNCTION_GET_I2C_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperature.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletTemperature.CALLBACK_TEMPERATURE] = 'h';
	this.callbackFormats[BrickletTemperature.CALLBACK_TEMPERATURE_REACHED] = 'h';

	this.getTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature of the sensor. The value
		has a range of -2500 to 8500 and is given in °C/100,
		e.g. a value of 4223 means that a temperature of 42.23 °C is measured.
		
		If you want to get the temperature periodically, it is recommended 
		to use the callback :func:`Temperature` and set the period with 
		:func:`SetTemperatureCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletTemperature.FUNCTION_GET_TEMPERATURE, [], '', 'h', returnCallback, errorCallback);
	};
	this.setTemperatureCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`Temperature` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`Temperature` is only triggered if the temperature has changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletTemperature.FUNCTION_SET_TEMPERATURE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getTemperatureCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetTemperatureCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletTemperature.FUNCTION_GET_TEMPERATURE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setTemperatureCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :func:`TemperatureReached` callback. 
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the temperature is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the temperature is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the temperature is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the temperature is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletTemperature.FUNCTION_SET_TEMPERATURE_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback);
	};
	this.getTemperatureCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetTemperatureCallbackThreshold`.
		*/
		this.ipcon.sendRequest(this, BrickletTemperature.FUNCTION_GET_TEMPERATURE_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callback
		
		* :func:`TemperatureReached`
		
		is triggered, if the threshold
		
		* :func:`SetTemperatureCallbackThreshold`
		
		keeps being reached.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletTemperature.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`SetDebouncePeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletTemperature.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setI2CMode = function(mode, returnCallback, errorCallback) {
		/*
		Sets the I2C mode. Possible modes are:
		
		* 0: Fast (400kHz, default)
		* 1: Slow (100kHz)
		
		If you have problems with obvious outliers in the
		Temperature Bricklet measurements, they may be caused by EMI issues.
		In this case it may be helpful to lower the I2C speed.
		
		It is however not recommended to lower the I2C speed in applications where
		a high throughput needs to be achieved.
		
		.. versionadded:: 2.0.1~(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletTemperature.FUNCTION_SET_I2C_MODE, [mode], 'B', '', returnCallback, errorCallback);
	};
	this.getI2CMode = function(returnCallback, errorCallback) {
		/*
		Returns the I2C mode as set by :func:`SetI2CMode`.
		
		.. versionadded:: 2.0.1~(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletTemperature.FUNCTION_GET_I2C_MODE, [], '', 'B', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletTemperature.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletTemperature;
