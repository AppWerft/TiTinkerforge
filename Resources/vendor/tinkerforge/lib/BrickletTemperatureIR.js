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

BrickletTemperatureIR.DEVICE_IDENTIFIER = 217;
BrickletTemperatureIR.CALLBACK_AMBIENT_TEMPERATURE = 15;
BrickletTemperatureIR.CALLBACK_OBJECT_TEMPERATURE = 16;
BrickletTemperatureIR.CALLBACK_AMBIENT_TEMPERATURE_REACHED = 17;
BrickletTemperatureIR.CALLBACK_OBJECT_TEMPERATURE_REACHED = 18;
BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE = 1;
BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE = 2;
BrickletTemperatureIR.FUNCTION_SET_EMISSIVITY = 3;
BrickletTemperatureIR.FUNCTION_GET_EMISSIVITY = 4;
BrickletTemperatureIR.FUNCTION_SET_AMBIENT_TEMPERATURE_CALLBACK_PERIOD = 5;
BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE_CALLBACK_PERIOD = 6;
BrickletTemperatureIR.FUNCTION_SET_OBJECT_TEMPERATURE_CALLBACK_PERIOD = 7;
BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE_CALLBACK_PERIOD = 8;
BrickletTemperatureIR.FUNCTION_SET_AMBIENT_TEMPERATURE_CALLBACK_THRESHOLD = 9;
BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE_CALLBACK_THRESHOLD = 10;
BrickletTemperatureIR.FUNCTION_SET_OBJECT_TEMPERATURE_CALLBACK_THRESHOLD = 11;
BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE_CALLBACK_THRESHOLD = 12;
BrickletTemperatureIR.FUNCTION_SET_DEBOUNCE_PERIOD = 13;
BrickletTemperatureIR.FUNCTION_GET_DEBOUNCE_PERIOD = 14;
BrickletTemperatureIR.FUNCTION_GET_IDENTITY = 255;
BrickletTemperatureIR.THRESHOLD_OPTION_OFF = 'x';
BrickletTemperatureIR.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletTemperatureIR.THRESHOLD_OPTION_INSIDE = 'i';
BrickletTemperatureIR.THRESHOLD_OPTION_SMALLER = '<';
BrickletTemperatureIR.THRESHOLD_OPTION_GREATER = '>';

function BrickletTemperatureIR(uid, ipcon) {
	//Device for non-contact temperature sensing

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletTemperatureIR.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_SET_EMISSIVITY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_EMISSIVITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_SET_AMBIENT_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_SET_OBJECT_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_SET_AMBIENT_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_SET_OBJECT_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperatureIR.CALLBACK_AMBIENT_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletTemperatureIR.CALLBACK_OBJECT_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletTemperatureIR.CALLBACK_AMBIENT_TEMPERATURE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletTemperatureIR.CALLBACK_OBJECT_TEMPERATURE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletTemperatureIR.CALLBACK_AMBIENT_TEMPERATURE] = 'h';
	this.callbackFormats[BrickletTemperatureIR.CALLBACK_OBJECT_TEMPERATURE] = 'h';
	this.callbackFormats[BrickletTemperatureIR.CALLBACK_AMBIENT_TEMPERATURE_REACHED] = 'h';
	this.callbackFormats[BrickletTemperatureIR.CALLBACK_OBJECT_TEMPERATURE_REACHED] = 'h';

	this.getAmbientTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the ambient temperature of the sensor. The value
		has a range of -400 to 1250 and is given in °C/10,
		e.g. a value of 423 means that an ambient temperature of 42.3 °C is 
		measured.
		
		If you want to get the ambient temperature periodically, it is recommended 
		to use the callback :func:`AmbientTemperature` and set the period with 
		:func:`SetAmbientTemperatureCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE, [], '', 'h', returnCallback, errorCallback);
	};
	this.getObjectTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the object temperature of the sensor, i.e. the temperature
		of the surface of the object the sensor is aimed at. The value
		has a range of -700 to 3800 and is given in °C/10,
		e.g. a value of 3001 means that a temperature of 300.1 °C is measured
		on the surface of the object.
		
		The temperature of different materials is dependent on their `emissivity 
		<http://en.wikipedia.org/wiki/Emissivity>`__. The emissivity of the material
		can be set with :func:`SetEmissivity`.
		
		If you want to get the object temperature periodically, it is recommended 
		to use the callback :func:`ObjectTemperature` and set the period with 
		:func:`SetObjectTemperatureCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE, [], '', 'h', returnCallback, errorCallback);
	};
	this.setEmissivity = function(emissivity, returnCallback, errorCallback) {
		/*
		Sets the `emissivity <http://en.wikipedia.org/wiki/Emissivity>`__ that is
		used to calculate the surface temperature as returned by 
		:func:`GetObjectTemperature`. 
		
		The emissivity is usually given as a value between 0.0 and 1.0. A list of
		emissivities of different materials can be found 
		`here <http://www.infrared-thermography.com/material.htm>`__.
		
		The parameter of :func:`SetEmissivity` has to be given with a factor of
		65535 (16-bit). For example: An emissivity of 0.1 can be set with the
		value 6553, an emissivity of 0.5 with the value 32767 and so on.
		
		.. note::
		 If you need a precise measurement for the object temperature, it is
		 absolutely crucial that you also provide a precise emissivity.
		
		The default emissivity is 1.0 (value of 65535) and the minimum emissivity the
		sensor can handle is 0.1 (value of 6553).
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_SET_EMISSIVITY, [emissivity], 'H', '', returnCallback, errorCallback);
	};
	this.getEmissivity = function(returnCallback, errorCallback) {
		/*
		Returns the emissivity as set by :func:`SetEmissivity`.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_EMISSIVITY, [], '', 'H', returnCallback, errorCallback);
	};
	this.setAmbientTemperatureCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`AmbientTemperature` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`AmbientTemperature` is only triggered if the temperature has changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_SET_AMBIENT_TEMPERATURE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getAmbientTemperatureCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetAmbientTemperatureCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setObjectTemperatureCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`ObjectTemperature` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`ObjectTemperature` is only triggered if the temperature has changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_SET_OBJECT_TEMPERATURE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getObjectTemperatureCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetObjectTemperatureCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setAmbientTemperatureCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :func:`AmbientTemperatureReached` callback. 
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the ambient temperature is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the ambient temperature is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the ambient temperature is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the ambient temperature is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_SET_AMBIENT_TEMPERATURE_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback);
	};
	this.getAmbientTemperatureCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetAmbientTemperatureCallbackThreshold`.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback);
	};
	this.setObjectTemperatureCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :func:`ObjectTemperatureReached` callback. 
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the object temperature is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the object temperature is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the object temperature is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the object temperature is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_SET_OBJECT_TEMPERATURE_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback);
	};
	this.getObjectTemperatureCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetObjectTemperatureCallbackThreshold`.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callbacks
		
		* :func:`AmbientTemperatureReached`,
		* :func:`ObjectTemperatureReached`
		
		are triggered, if the thresholds
		
		* :func:`SetAmbientTemperatureCallbackThreshold`,
		* :func:`SetObjectTemperatureCallbackThreshold`
		
		keep being reached.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`SetDebouncePeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletTemperatureIR;
