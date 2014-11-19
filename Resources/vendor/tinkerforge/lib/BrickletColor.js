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

BrickletColor.DEVICE_IDENTIFIER = 243;
BrickletColor.CALLBACK_COLOR = 8;
BrickletColor.CALLBACK_COLOR_REACHED = 9;
BrickletColor.CALLBACK_ILLUMINANCE = 21;
BrickletColor.CALLBACK_COLOR_TEMPERATURE = 22;
BrickletColor.FUNCTION_GET_COLOR = 1;
BrickletColor.FUNCTION_SET_COLOR_CALLBACK_PERIOD = 2;
BrickletColor.FUNCTION_GET_COLOR_CALLBACK_PERIOD = 3;
BrickletColor.FUNCTION_SET_COLOR_CALLBACK_THRESHOLD = 4;
BrickletColor.FUNCTION_GET_COLOR_CALLBACK_THRESHOLD = 5;
BrickletColor.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletColor.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletColor.FUNCTION_LIGHT_ON = 10;
BrickletColor.FUNCTION_LIGHT_OFF = 11;
BrickletColor.FUNCTION_IS_LIGHT_ON = 12;
BrickletColor.FUNCTION_SET_CONFIG = 13;
BrickletColor.FUNCTION_GET_CONFIG = 14;
BrickletColor.FUNCTION_GET_ILLUMINANCE = 15;
BrickletColor.FUNCTION_GET_COLOR_TEMPERATURE = 16;
BrickletColor.FUNCTION_SET_ILLUMINANCE_CALLBACK_PERIOD = 17;
BrickletColor.FUNCTION_GET_ILLUMINANCE_CALLBACK_PERIOD = 18;
BrickletColor.FUNCTION_SET_COLOR_TEMPERATURE_CALLBACK_PERIOD = 19;
BrickletColor.FUNCTION_GET_COLOR_TEMPERATURE_CALLBACK_PERIOD = 20;
BrickletColor.FUNCTION_GET_IDENTITY = 255;
BrickletColor.THRESHOLD_OPTION_OFF = 'x';
BrickletColor.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletColor.THRESHOLD_OPTION_INSIDE = 'i';
BrickletColor.THRESHOLD_OPTION_SMALLER = '<';
BrickletColor.THRESHOLD_OPTION_GREATER = '>';
BrickletColor.LIGHT_ON = 0;
BrickletColor.LIGHT_OFF = 1;
BrickletColor.GAIN_1X = 0;
BrickletColor.GAIN_4X = 1;
BrickletColor.GAIN_16X = 2;
BrickletColor.GAIN_60X = 3;
BrickletColor.INTEGRATION_TIME_2MS = 0;
BrickletColor.INTEGRATION_TIME_24MS = 1;
BrickletColor.INTEGRATION_TIME_101MS = 2;
BrickletColor.INTEGRATION_TIME_154MS = 3;
BrickletColor.INTEGRATION_TIME_700MS = 4;

function BrickletColor(uid, ipcon) {
	//Device for measuring color (RGB value), illuminance and color temperature

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletColor.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletColor.FUNCTION_GET_COLOR] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColor.FUNCTION_SET_COLOR_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletColor.FUNCTION_GET_COLOR_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColor.FUNCTION_SET_COLOR_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletColor.FUNCTION_GET_COLOR_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColor.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletColor.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColor.CALLBACK_COLOR] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletColor.CALLBACK_COLOR_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletColor.FUNCTION_LIGHT_ON] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletColor.FUNCTION_LIGHT_OFF] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletColor.FUNCTION_IS_LIGHT_ON] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColor.FUNCTION_SET_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletColor.FUNCTION_GET_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColor.FUNCTION_GET_ILLUMINANCE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColor.FUNCTION_GET_COLOR_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColor.FUNCTION_SET_ILLUMINANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletColor.FUNCTION_GET_ILLUMINANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColor.FUNCTION_SET_COLOR_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletColor.FUNCTION_GET_COLOR_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColor.CALLBACK_ILLUMINANCE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletColor.CALLBACK_COLOR_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletColor.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletColor.CALLBACK_COLOR] = 'H H H H';
	this.callbackFormats[BrickletColor.CALLBACK_COLOR_REACHED] = 'H H H H';
	this.callbackFormats[BrickletColor.CALLBACK_ILLUMINANCE] = 'I';
	this.callbackFormats[BrickletColor.CALLBACK_COLOR_TEMPERATURE] = 'H';

	this.getColor = function(returnCallback, errorCallback) {
		/*
		Returns the measured color of the sensor. The values
		have a range of 0 to 65535.
		
		The red (r), green (g), blue (b) and clear (c) colors are measured
		with four different photodiodes that are responsive at different
		wavelengths:
		
		.. image:: /Images/Bricklets/bricklet_color_wavelength_chart_600.jpg
		   :scale: 100 %
		   :alt: Chart Responsivity / Wavelength
		   :align: center
		   :target: ../../_images/Bricklets/bricklet_color_wavelength_chart_600.jpg
		
		If you want to get the color periodically, it is recommended 
		to use the callback :func:`Color` and set the period with 
		:func:`SetColorCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletColor.FUNCTION_GET_COLOR, [], '', 'H H H H', returnCallback, errorCallback);
	};
	this.setColorCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`Color` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`Color` is only triggered if the color has changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletColor.FUNCTION_SET_COLOR_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getColorCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetColorCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletColor.FUNCTION_GET_COLOR_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setColorCallbackThreshold = function(option, minR, maxR, minG, maxG, minB, maxB, minC, maxC, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :func:`ColorReached` callback. 
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the temperature is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the temperature is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the temperature is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the temperature is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0, 0, 0, 0, 0, 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletColor.FUNCTION_SET_COLOR_CALLBACK_THRESHOLD, [option, minR, maxR, minG, maxG, minB, maxB, minC, maxC], 'c H H H H H H H H', '', returnCallback, errorCallback);
	};
	this.getColorCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetColorCallbackThreshold`.
		*/
		this.ipcon.sendRequest(this, BrickletColor.FUNCTION_GET_COLOR_CALLBACK_THRESHOLD, [], '', 'c H H H H H H H H', returnCallback, errorCallback);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callback
		
		* :func:`ColorReached`
		
		is triggered, if the threshold
		
		* :func:`SetColorCallbackThreshold`
		
		keeps being reached.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletColor.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`SetDebouncePeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletColor.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.lightOn = function(returnCallback, errorCallback) {
		/*
		Turns the LED on.
		*/
		this.ipcon.sendRequest(this, BrickletColor.FUNCTION_LIGHT_ON, [], '', '', returnCallback, errorCallback);
	};
	this.lightOff = function(returnCallback, errorCallback) {
		/*
		Turns the LED off.
		*/
		this.ipcon.sendRequest(this, BrickletColor.FUNCTION_LIGHT_OFF, [], '', '', returnCallback, errorCallback);
	};
	this.isLightOn = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the backlight is on and *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickletColor.FUNCTION_IS_LIGHT_ON, [], '', 'B', returnCallback, errorCallback);
	};
	this.setConfig = function(gain, integrationTime, returnCallback, errorCallback) {
		/*
		Sets the configuration of the sensor. Gain and integration time
		can be configured in this way.
		
		For configuring the gain:
		
		* 0: 1x Gain
		* 1: 4x Gain
		* 2: 16x Gain
		* 3: 60x Gain
		
		For configuring the integration time:
		
		* 0: 2.4ms
		* 1: 24ms
		* 2: 101ms
		* 3: 154ms
		* 4: 700ms
		
		Increasing the gain enables the sensor to detect a
		color from a higher distance.
		
		The integration time provides a trade-off between conversion time
		and accuracy. With a longer integration time the values read will
		be more accurate but it will take longer time to get the conversion
		results.
		
		The default values are 60x gain and 154ms integration time.
		*/
		this.ipcon.sendRequest(this, BrickletColor.FUNCTION_SET_CONFIG, [gain, integrationTime], 'B B', '', returnCallback, errorCallback);
	};
	this.getConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`SetConfig`.
		*/
		this.ipcon.sendRequest(this, BrickletColor.FUNCTION_GET_CONFIG, [], '', 'B B', returnCallback, errorCallback);
	};
	this.getIlluminance = function(returnCallback, errorCallback) {
		/*
		Returns the illuminance affected by the gain and integration time as
		set by :func:`SetConfig`. To get the illuminance in Lux apply this formula::
		
		 lux = illuminance * 700 / gain / integration_time
		
		To get a correct illuminance measurement make sure that the color
		values themself are not saturated. The color value (R, G or B)
		is saturated if it is equal to the maximum value of 65535.
		In that case you have to reduce the gain, see :func:`SetConfig`.
		*/
		this.ipcon.sendRequest(this, BrickletColor.FUNCTION_GET_ILLUMINANCE, [], '', 'I', returnCallback, errorCallback);
	};
	this.getColorTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the color temperature in Kelvin.
		
		To get a correct color temperature measurement make sure that the color
		values themself are not saturated. The color value (R, G or B)
		is saturated if it is equal to the maximum value of 65535.
		In that case you have to reduce the gain, see :func:`SetConfig`.
		*/
		this.ipcon.sendRequest(this, BrickletColor.FUNCTION_GET_COLOR_TEMPERATURE, [], '', 'H', returnCallback, errorCallback);
	};
	this.setIlluminanceCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`Illuminance` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`Illuminance` is only triggered if the illuminance has changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletColor.FUNCTION_SET_ILLUMINANCE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getIlluminanceCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetIlluminanceCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletColor.FUNCTION_GET_ILLUMINANCE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setColorTemperatureCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`ColorTemperature` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`ColorTemperature` is only triggered if the color temperature has changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletColor.FUNCTION_SET_COLOR_TEMPERATURE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getColorTemperatureCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetColorTemperatureCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletColor.FUNCTION_GET_COLOR_TEMPERATURE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletColor.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletColor;
