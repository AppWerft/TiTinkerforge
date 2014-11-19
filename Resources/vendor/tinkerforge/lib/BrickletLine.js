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

BrickletLine.DEVICE_IDENTIFIER = 241;
BrickletLine.CALLBACK_REFLECTIVITY = 8;
BrickletLine.CALLBACK_REFLECTIVITY_REACHED = 9;
BrickletLine.FUNCTION_GET_REFLECTIVITY = 1;
BrickletLine.FUNCTION_SET_REFLECTIVITY_CALLBACK_PERIOD = 2;
BrickletLine.FUNCTION_GET_REFLECTIVITY_CALLBACK_PERIOD = 3;
BrickletLine.FUNCTION_SET_REFLECTIVITY_CALLBACK_THRESHOLD = 4;
BrickletLine.FUNCTION_GET_REFLECTIVITY_CALLBACK_THRESHOLD = 5;
BrickletLine.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletLine.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletLine.FUNCTION_GET_IDENTITY = 255;
BrickletLine.THRESHOLD_OPTION_OFF = 'x';
BrickletLine.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletLine.THRESHOLD_OPTION_INSIDE = 'i';
BrickletLine.THRESHOLD_OPTION_SMALLER = '<';
BrickletLine.THRESHOLD_OPTION_GREATER = '>';

function BrickletLine(uid, ipcon) {
	//Device that measures reflectivity to allow following a line

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletLine.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletLine.FUNCTION_GET_REFLECTIVITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLine.FUNCTION_SET_REFLECTIVITY_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLine.FUNCTION_GET_REFLECTIVITY_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLine.FUNCTION_SET_REFLECTIVITY_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLine.FUNCTION_GET_REFLECTIVITY_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLine.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLine.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLine.CALLBACK_REFLECTIVITY] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletLine.CALLBACK_REFLECTIVITY_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletLine.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletLine.CALLBACK_REFLECTIVITY] = 'H';
	this.callbackFormats[BrickletLine.CALLBACK_REFLECTIVITY_REACHED] = 'H';

	this.getReflectivity = function(returnCallback, errorCallback) {
		/*
		Returns the currently measured reflectivity. The reflectivity is
		a value between 0 (not reflective) and 4095 (very reflective).
		
		Usually black has a low reflectivity while white has a high
		reflectivity.
		
		If you want to get the reflectivity periodically, it is recommended 
		to use the callback :func:`Reflectivity` and set the period with 
		:func:`SetReflectivityCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletLine.FUNCTION_GET_REFLECTIVITY, [], '', 'H', returnCallback, errorCallback);
	};
	this.setReflectivityCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`Reflectivity` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`Reflectivity` is only triggered if the reflectivity has changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletLine.FUNCTION_SET_REFLECTIVITY_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getReflectivityCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetReflectivityCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletLine.FUNCTION_GET_REFLECTIVITY_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setReflectivityCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :func:`ReflectivityReached` callback. 
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the reflectivity is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the reflectivity is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the reflectivity is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the reflectivity is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletLine.FUNCTION_SET_REFLECTIVITY_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
	};
	this.getReflectivityCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetReflectivityCallbackThreshold`.
		*/
		this.ipcon.sendRequest(this, BrickletLine.FUNCTION_GET_REFLECTIVITY_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callback
		
		* :func:`ReflectivityReached`
		
		is triggered, if the threshold
		
		* :func:`SetReflectivityCallbackThreshold`
		
		keeps being reached.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletLine.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`SetDebouncePeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletLine.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletLine.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletLine;
