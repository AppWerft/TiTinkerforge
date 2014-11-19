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

BrickletSoundIntensity.DEVICE_IDENTIFIER = 238;
BrickletSoundIntensity.CALLBACK_INTENSITY = 8;
BrickletSoundIntensity.CALLBACK_INTENSITY_REACHED = 9;
BrickletSoundIntensity.FUNCTION_GET_INTENSITY = 1;
BrickletSoundIntensity.FUNCTION_SET_INTENSITY_CALLBACK_PERIOD = 2;
BrickletSoundIntensity.FUNCTION_GET_INTENSITY_CALLBACK_PERIOD = 3;
BrickletSoundIntensity.FUNCTION_SET_INTENSITY_CALLBACK_THRESHOLD = 4;
BrickletSoundIntensity.FUNCTION_GET_INTENSITY_CALLBACK_THRESHOLD = 5;
BrickletSoundIntensity.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletSoundIntensity.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletSoundIntensity.FUNCTION_GET_IDENTITY = 255;
BrickletSoundIntensity.THRESHOLD_OPTION_OFF = 'x';
BrickletSoundIntensity.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletSoundIntensity.THRESHOLD_OPTION_INSIDE = 'i';
BrickletSoundIntensity.THRESHOLD_OPTION_SMALLER = '<';
BrickletSoundIntensity.THRESHOLD_OPTION_GREATER = '>';

function BrickletSoundIntensity(uid, ipcon) {
	//Device for sensing sound intensity

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletSoundIntensity.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletSoundIntensity.FUNCTION_GET_INTENSITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSoundIntensity.FUNCTION_SET_INTENSITY_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletSoundIntensity.FUNCTION_GET_INTENSITY_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSoundIntensity.FUNCTION_SET_INTENSITY_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletSoundIntensity.FUNCTION_GET_INTENSITY_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSoundIntensity.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletSoundIntensity.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSoundIntensity.CALLBACK_INTENSITY] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletSoundIntensity.CALLBACK_INTENSITY_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletSoundIntensity.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletSoundIntensity.CALLBACK_INTENSITY] = 'H';
	this.callbackFormats[BrickletSoundIntensity.CALLBACK_INTENSITY_REACHED] = 'H';

	this.getIntensity = function(returnCallback, errorCallback) {
		/*
		Returns the current sound intensity. The value has a range of
		0 to 4095.
		
		The value corresponds to the `upper envelop <http://en.wikipedia.org/wiki/Envelope_(waves)>`__
		of the signal of the microphone capsule.
		
		If you want to get the intensity periodically, it is recommended to use the
		callback :func:`Intensity` and set the period with 
		:func:`SetIntensityCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletSoundIntensity.FUNCTION_GET_INTENSITY, [], '', 'H', returnCallback, errorCallback);
	};
	this.setIntensityCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`Intensity` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`Intensity` is only triggered if the intensity has changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletSoundIntensity.FUNCTION_SET_INTENSITY_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getIntensityCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetIntensityCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletSoundIntensity.FUNCTION_GET_INTENSITY_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setIntensityCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :func:`IntensityReached` callback. 
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the intensity is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the intensity is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the intensity is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the intensity is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletSoundIntensity.FUNCTION_SET_INTENSITY_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
	};
	this.getIntensityCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetIntensityCallbackThreshold`.
		*/
		this.ipcon.sendRequest(this, BrickletSoundIntensity.FUNCTION_GET_INTENSITY_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callback
		
		* :func:`IntensityReached`
		
		is triggered, if the thresholds
		
		* :func:`SetIntensityCallbackThreshold`
		
		keeps being reached.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletSoundIntensity.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`SetDebouncePeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletSoundIntensity.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletSoundIntensity.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletSoundIntensity;
