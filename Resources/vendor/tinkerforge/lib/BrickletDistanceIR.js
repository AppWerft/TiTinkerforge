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

BrickletDistanceIR.DEVICE_IDENTIFIER = 25;
BrickletDistanceIR.CALLBACK_DISTANCE = 15;
BrickletDistanceIR.CALLBACK_ANALOG_VALUE = 16;
BrickletDistanceIR.CALLBACK_DISTANCE_REACHED = 17;
BrickletDistanceIR.CALLBACK_ANALOG_VALUE_REACHED = 18;
BrickletDistanceIR.FUNCTION_GET_DISTANCE = 1;
BrickletDistanceIR.FUNCTION_GET_ANALOG_VALUE = 2;
BrickletDistanceIR.FUNCTION_SET_SAMPLING_POINT = 3;
BrickletDistanceIR.FUNCTION_GET_SAMPLING_POINT = 4;
BrickletDistanceIR.FUNCTION_SET_DISTANCE_CALLBACK_PERIOD = 5;
BrickletDistanceIR.FUNCTION_GET_DISTANCE_CALLBACK_PERIOD = 6;
BrickletDistanceIR.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 7;
BrickletDistanceIR.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 8;
BrickletDistanceIR.FUNCTION_SET_DISTANCE_CALLBACK_THRESHOLD = 9;
BrickletDistanceIR.FUNCTION_GET_DISTANCE_CALLBACK_THRESHOLD = 10;
BrickletDistanceIR.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 11;
BrickletDistanceIR.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 12;
BrickletDistanceIR.FUNCTION_SET_DEBOUNCE_PERIOD = 13;
BrickletDistanceIR.FUNCTION_GET_DEBOUNCE_PERIOD = 14;
BrickletDistanceIR.FUNCTION_GET_IDENTITY = 255;
BrickletDistanceIR.THRESHOLD_OPTION_OFF = 'x';
BrickletDistanceIR.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletDistanceIR.THRESHOLD_OPTION_INSIDE = 'i';
BrickletDistanceIR.THRESHOLD_OPTION_SMALLER = '<';
BrickletDistanceIR.THRESHOLD_OPTION_GREATER = '>';

function BrickletDistanceIR(uid, ipcon) {
	//Device for sensing distance via infrared

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletDistanceIR.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletDistanceIR.FUNCTION_GET_DISTANCE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDistanceIR.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDistanceIR.FUNCTION_SET_SAMPLING_POINT] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDistanceIR.FUNCTION_GET_SAMPLING_POINT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDistanceIR.FUNCTION_SET_DISTANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletDistanceIR.FUNCTION_GET_DISTANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDistanceIR.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletDistanceIR.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDistanceIR.FUNCTION_SET_DISTANCE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletDistanceIR.FUNCTION_GET_DISTANCE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDistanceIR.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletDistanceIR.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDistanceIR.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletDistanceIR.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDistanceIR.CALLBACK_DISTANCE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletDistanceIR.CALLBACK_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletDistanceIR.CALLBACK_DISTANCE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletDistanceIR.CALLBACK_ANALOG_VALUE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletDistanceIR.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletDistanceIR.CALLBACK_DISTANCE] = 'H';
	this.callbackFormats[BrickletDistanceIR.CALLBACK_ANALOG_VALUE] = 'H';
	this.callbackFormats[BrickletDistanceIR.CALLBACK_DISTANCE_REACHED] = 'H';
	this.callbackFormats[BrickletDistanceIR.CALLBACK_ANALOG_VALUE_REACHED] = 'H';

	this.getDistance = function(returnCallback, errorCallback) {
		/*
		Returns the distance measured by the sensor. The value is in mm and possible
		distance ranges are 40 to 300, 100 to 800 and 200 to 1500, depending on the
		selected IR sensor.
		
		If you want to get the distance periodically, it is recommended to use the
		callback :func:`Distance` and set the period with 
		:func:`SetDistanceCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_GET_DISTANCE, [], '', 'H', returnCallback, errorCallback);
	};
	this.getAnalogValue = function(returnCallback, errorCallback) {
		/*
		Returns the value as read by a 12-bit analog-to-digital converter.
		The value is between 0 and 4095.
		
		.. note::
		 The value returned by :func:`GetDistance` is averaged over several samples
		 to yield less noise, while :func:`GetAnalogValue` gives back raw
		 unfiltered analog values. The only reason to use :func:`GetAnalogValue` is,
		 if you need the full resolution of the analog-to-digital converter.
		
		If you want the analog value periodically, it is recommended to use the 
		callback :func:`AnalogValue` and set the period with 
		:func:`SetAnalogValueCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_GET_ANALOG_VALUE, [], '', 'H', returnCallback, errorCallback);
	};
	this.setSamplingPoint = function(position, distance, returnCallback, errorCallback) {
		/*
		Sets a sampling point value to a specific position of the lookup table.
		The lookup table comprises 128 equidistant analog values with
		corresponding distances.
		
		If you measure a distance of 50cm at the analog value 2048, you
		should call this function with (64, 5000). The utilized analog-to-digital
		converter has a resolution of 12 bit. With 128 sampling points on the
		whole range, this means that every sampling point has a size of 32
		analog values. Thus the analog value 2048 has the corresponding sampling
		point 64 = 2048/32.
		
		Sampling points are saved on the EEPROM of the Distance IR Bricklet and
		loaded again on startup.
		
		.. note::
		 An easy way to calibrate the sampling points of the Distance IR Bricklet is
		 implemented in the Brick Viewer. If you want to calibrate your Bricklet it is
		 highly recommended to use this implementation.
		*/
		this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_SET_SAMPLING_POINT, [position, distance], 'B H', '', returnCallback, errorCallback);
	};
	this.getSamplingPoint = function(position, returnCallback, errorCallback) {
		/*
		Returns the distance to a sampling point position as set by
		:func:`SetSamplingPoint`.
		*/
		this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_GET_SAMPLING_POINT, [position], 'B', 'H', returnCallback, errorCallback);
	};
	this.setDistanceCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`Distance` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`Distance` is only triggered if the distance has changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_SET_DISTANCE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getDistanceCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetDistanceCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_GET_DISTANCE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`AnalogValue` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`AnalogValue` is only triggered if the analog value has changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetAnalogValueCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setDistanceCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :func:`DistanceReached` callback. 
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the distance is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the distance is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the distance is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the distance is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_SET_DISTANCE_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback);
	};
	this.getDistanceCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetDistanceCallbackThreshold`.
		*/
		this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_GET_DISTANCE_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
	};
	this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetAnalogValueCallbackThreshold`.
		*/
		this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callbacks
		
		* :func:`DistanceReached`,
		* :func:`AnalogValueReached`
		
		are triggered, if the thresholds
		
		* :func:`SetDistanceCallbackThreshold`,
		* :func:`SetAnalogValueCallbackThreshold`
		
		keep being reached.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`SetDebouncePeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletDistanceIR;
