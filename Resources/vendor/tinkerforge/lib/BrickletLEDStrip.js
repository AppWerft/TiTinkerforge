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

BrickletLEDStrip.DEVICE_IDENTIFIER = 231;
BrickletLEDStrip.CALLBACK_FRAME_RENDERED = 6;
BrickletLEDStrip.FUNCTION_SET_RGB_VALUES = 1;
BrickletLEDStrip.FUNCTION_GET_RGB_VALUES = 2;
BrickletLEDStrip.FUNCTION_SET_FRAME_DURATION = 3;
BrickletLEDStrip.FUNCTION_GET_FRAME_DURATION = 4;
BrickletLEDStrip.FUNCTION_GET_SUPPLY_VOLTAGE = 5;
BrickletLEDStrip.FUNCTION_SET_CLOCK_FREQUENCY = 7;
BrickletLEDStrip.FUNCTION_GET_CLOCK_FREQUENCY = 8;
BrickletLEDStrip.FUNCTION_SET_CHIP_TYPE = 9;
BrickletLEDStrip.FUNCTION_GET_CHIP_TYPE = 10;
BrickletLEDStrip.FUNCTION_GET_IDENTITY = 255;
BrickletLEDStrip.CHIP_TYPE_WS2801 = 2801;
BrickletLEDStrip.CHIP_TYPE_WS2811 = 2811;
BrickletLEDStrip.CHIP_TYPE_WS2812 = 2812;

function BrickletLEDStrip(uid, ipcon) {
	//Device to control up to 320 RGB LEDs

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletLEDStrip.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 2];
	this.responseExpected[BrickletLEDStrip.FUNCTION_SET_RGB_VALUES] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_GET_RGB_VALUES] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_SET_FRAME_DURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_GET_FRAME_DURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_GET_SUPPLY_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStrip.CALLBACK_FRAME_RENDERED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_SET_CLOCK_FREQUENCY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_GET_CLOCK_FREQUENCY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_SET_CHIP_TYPE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_GET_CHIP_TYPE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletLEDStrip.CALLBACK_FRAME_RENDERED] = 'H';

	this.setRGBValues = function(index, length, r, g, b, returnCallback, errorCallback) {
		/*
		Sets the *rgb* values for the LEDs with the given *length* starting 
		from *index*.
		
		The maximum length is 16, the index goes from 0 to 319 and the rgb values
		have 8 bits each.
		
		Example: If you set
		
		* index to 5,
		* length to 3,
		* r to [255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		* g to [0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] and
		* b to [0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		
		the LED with index 5 will be red, 6 will be green and 7 will be blue.
		
		.. note:: Depending on the LED circuitry colors can be permuted.
		
		The colors will be transfered to actual LEDs when the next
		frame duration ends, see :func:`SetFrameDuration`.
		
		Generic approach: 
		
		* Set the frame duration to a value that represents
		  the number of frames per second you want to achieve. 
		* Set all of the LED colors for one frame.
		* Wait for the :func:`FrameRendered` callback.
		* Set all of the LED colors for next frame.
		* Wait for the :func:`FrameRendered` callback.
		* and so on.
		
		This approach ensures that you can change the LED colors with
		a fixed frame rate.
		
		The actual number of controllable LEDs depends on the number of free
		Bricklet ports. See :ref:`here <led_strip_bricklet_ram_constraints>` for more
		information. A call of :func:`SetRGBValues` with index + length above the
		bounds is ignored completely.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_SET_RGB_VALUES, [index, length, r, g, b], 'H B B16 B16 B16', '', returnCallback, errorCallback);
	};
	this.getRGBValues = function(index, length, returnCallback, errorCallback) {
		/*
		Returns the rgb with the given *length* starting from the
		given *index*.
		
		The values are the last values that were set by :func:`SetRGBValues`.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_GET_RGB_VALUES, [index, length], 'H B', 'B16 B16 B16', returnCallback, errorCallback);
	};
	this.setFrameDuration = function(duration, returnCallback, errorCallback) {
		/*
		Sets the frame duration in ms.
		
		Example: If you want to achieve 20 frames per second, you should
		set the frame duration to 50ms (50ms * 20 = 1 second). 
		
		For an explanation of the general approach see :func:`SetRGBValues`.
		
		Default value: 100ms (10 frames per second).
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_SET_FRAME_DURATION, [duration], 'H', '', returnCallback, errorCallback);
	};
	this.getFrameDuration = function(returnCallback, errorCallback) {
		/*
		Returns the frame duration as set by :func:`SetFrameDuration`.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_GET_FRAME_DURATION, [], '', 'H', returnCallback, errorCallback);
	};
	this.getSupplyVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the current supply voltage of the LEDs. The voltage is given in mV.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_GET_SUPPLY_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
	};
	this.setClockFrequency = function(frequency, returnCallback, errorCallback) {
		/*
		Sets the frequency of the clock in Hz. The range is 10000Hz (10kHz) up to
		2000000Hz (2MHz).
		
		The Bricklet will choose the nearest achievable frequency, which may
		be off by a few Hz. You can get the exact frequency that is used by
		calling :func:`GetClockFrequency`.
		
		If you have problems with flickering LEDs, they may be bits flipping. You
		can fix this by either making the connection between the LEDs and the
		Bricklet shorter or by reducing the frequency.
		
		With a decreasing frequency your maximum frames per second will decrease
		too.
		
		The default value is 1.66MHz.
		
		.. note::
		 The frequency in firmware version 2.0.0 is fixed at 2MHz.
		
		.. versionadded:: 2.0.1~(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_SET_CLOCK_FREQUENCY, [frequency], 'I', '', returnCallback, errorCallback);
	};
	this.getClockFrequency = function(returnCallback, errorCallback) {
		/*
		Returns the currently used clock frequency as set by :func:`SetClockFrequency`.
		
		.. versionadded:: 2.0.1~(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_GET_CLOCK_FREQUENCY, [], '', 'I', returnCallback, errorCallback);
	};
	this.setChipType = function(chip, returnCallback, errorCallback) {
		/*
		Sets the type of the led driver chip. We currently support
		the chips
		
		* WS2801,
		* WS2811 and
		* WS2812.
		
		The WS2812 is sometimes also called "NeoPixel", a name coined by
		Adafruit.
		
		The default value is WS2801 = 2801.
		
		.. versionadded:: 2.0.2~(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_SET_CHIP_TYPE, [chip], 'H', '', returnCallback, errorCallback);
	};
	this.getChipType = function(returnCallback, errorCallback) {
		/*
		Returns the currently used chip type as set by :func:`SetChipType`.
		
		.. versionadded:: 2.0.2~(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_GET_CHIP_TYPE, [], '', 'H', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletLEDStrip;
