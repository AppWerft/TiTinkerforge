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

BrickletPTC.DEVICE_IDENTIFIER = 226;
BrickletPTC.CALLBACK_TEMPERATURE = 13;
BrickletPTC.CALLBACK_TEMPERATURE_REACHED = 14;
BrickletPTC.CALLBACK_RESISTANCE = 15;
BrickletPTC.CALLBACK_RESISTANCE_REACHED = 16;
BrickletPTC.FUNCTION_GET_TEMPERATURE = 1;
BrickletPTC.FUNCTION_GET_RESISTANCE = 2;
BrickletPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_PERIOD = 3;
BrickletPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_PERIOD = 4;
BrickletPTC.FUNCTION_SET_RESISTANCE_CALLBACK_PERIOD = 5;
BrickletPTC.FUNCTION_GET_RESISTANCE_CALLBACK_PERIOD = 6;
BrickletPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_THRESHOLD = 7;
BrickletPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_THRESHOLD = 8;
BrickletPTC.FUNCTION_SET_RESISTANCE_CALLBACK_THRESHOLD = 9;
BrickletPTC.FUNCTION_GET_RESISTANCE_CALLBACK_THRESHOLD = 10;
BrickletPTC.FUNCTION_SET_DEBOUNCE_PERIOD = 11;
BrickletPTC.FUNCTION_GET_DEBOUNCE_PERIOD = 12;
BrickletPTC.FUNCTION_SET_NOISE_REJECTION_FILTER = 17;
BrickletPTC.FUNCTION_GET_NOISE_REJECTION_FILTER = 18;
BrickletPTC.FUNCTION_IS_SENSOR_CONNECTED = 19;
BrickletPTC.FUNCTION_SET_WIRE_MODE = 20;
BrickletPTC.FUNCTION_GET_WIRE_MODE = 21;
BrickletPTC.FUNCTION_GET_IDENTITY = 255;
BrickletPTC.THRESHOLD_OPTION_OFF = 'x';
BrickletPTC.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletPTC.THRESHOLD_OPTION_INSIDE = 'i';
BrickletPTC.THRESHOLD_OPTION_SMALLER = '<';
BrickletPTC.THRESHOLD_OPTION_GREATER = '>';
BrickletPTC.FILTER_OPTION_50HZ = 0;
BrickletPTC.FILTER_OPTION_60HZ = 1;
BrickletPTC.WIRE_MODE_2 = 2;
BrickletPTC.WIRE_MODE_3 = 3;
BrickletPTC.WIRE_MODE_4 = 4;

function BrickletPTC(uid, ipcon) {
	//Device for reading temperatures from Pt100 or Pt1000 sensors

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletPTC.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletPTC.FUNCTION_GET_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_GET_RESISTANCE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_SET_RESISTANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_GET_RESISTANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_SET_RESISTANCE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_GET_RESISTANCE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.CALLBACK_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletPTC.CALLBACK_TEMPERATURE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletPTC.CALLBACK_RESISTANCE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletPTC.CALLBACK_RESISTANCE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletPTC.FUNCTION_SET_NOISE_REJECTION_FILTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletPTC.FUNCTION_GET_NOISE_REJECTION_FILTER] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_IS_SENSOR_CONNECTED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_SET_WIRE_MODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletPTC.FUNCTION_GET_WIRE_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletPTC.CALLBACK_TEMPERATURE] = 'i';
	this.callbackFormats[BrickletPTC.CALLBACK_TEMPERATURE_REACHED] = 'i';
	this.callbackFormats[BrickletPTC.CALLBACK_RESISTANCE] = 'H';
	this.callbackFormats[BrickletPTC.CALLBACK_RESISTANCE_REACHED] = 'H';

	this.getTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature of connected sensor. The value
		has a range of -246 to 849 °C and is given in °C/100,
		e.g. a value of 4223 means that a temperature of 42.23 °C is measured.
		
		If you want to get the temperature periodically, it is recommended 
		to use the callback :func:`Temperature` and set the period with 
		:func:`SetTemperatureCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_TEMPERATURE, [], '', 'i', returnCallback, errorCallback);
	};
	this.getResistance = function(returnCallback, errorCallback) {
		/*
		Returns the value as measured by the MAX31865 precision delta-sigma ADC.
		
		The value can be converted with the following formulas:
		
		* Pt100:  resistance = (value * 390) / 32768
		* Pt1000: resistance = (value * 3900) / 32768
		
		If you want to get the resistance periodically, it is recommended 
		to use the callback :func:`Resistance` and set the period with 
		:func:`SetResistanceCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_RESISTANCE, [], '', 'H', returnCallback, errorCallback);
	};
	this.setTemperatureCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`Temperature` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`Temperature` is only triggered if the temperature has changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getTemperatureCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetTemperatureCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setResistanceCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`Resistance` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`Resistance` is only triggered if the resistance has changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_RESISTANCE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getResistanceCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetResistanceCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_RESISTANCE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_THRESHOLD, [option, min, max], 'c i i', '', returnCallback, errorCallback);
	};
	this.getTemperatureCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetTemperatureCallbackThreshold`.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_THRESHOLD, [], '', 'c i i', returnCallback, errorCallback);
	};
	this.setResistanceCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :func:`ResistanceReached` callback. 
		
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
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_RESISTANCE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
	};
	this.getResistanceCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetResistanceCallbackThreshold`.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_RESISTANCE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callback
		
		* :func:`TemperatureReached`,
		* :func:`ResistanceReached`
		
		is triggered, if the threshold
		
		* :func:`SetTemperatureCallbackThreshold`,
		* :func:`SetResistanceCallbackThreshold`
		
		keeps being reached.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`SetDebouncePeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setNoiseRejectionFilter = function(filter, returnCallback, errorCallback) {
		/*
		Sets the noise rejection filter to either 50Hz (0) or 60Hz (1).
		Noise from 50Hz or 60Hz power sources (including
		harmonics of the AC power's fundamental frequency) is
		attenuated by 82dB.
		
		Default value is 0 = 50Hz.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_NOISE_REJECTION_FILTER, [filter], 'B', '', returnCallback, errorCallback);
	};
	this.getNoiseRejectionFilter = function(returnCallback, errorCallback) {
		/*
		Returns the noise rejection filter option as set by 
		:func:`SetNoiseRejectionFilter`
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_NOISE_REJECTION_FILTER, [], '', 'B', returnCallback, errorCallback);
	};
	this.isSensorConnected = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the sensor is connected correctly. 
		
		If this function
		returns *false*, there is either no Pt100 or Pt1000 sensor connected,
		the sensor is connected incorrectly or the sensor itself is faulty.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_IS_SENSOR_CONNECTED, [], '', '?', returnCallback, errorCallback);
	};
	this.setWireMode = function(mode, returnCallback, errorCallback) {
		/*
		Sets the wire mode of the sensor. Possible values are 2, 3 and 4 which
		correspond to 2-, 3- and 4-wire sensors. The value has to match the jumper
		configuration on the Bricklet.
		
		The default value is 2 = 2-wire.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_WIRE_MODE, [mode], 'B', '', returnCallback, errorCallback);
	};
	this.getWireMode = function(returnCallback, errorCallback) {
		/*
		Returns the wire mode as set by :func:`SetWireMode`
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_WIRE_MODE, [], '', 'B', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletPTC;
