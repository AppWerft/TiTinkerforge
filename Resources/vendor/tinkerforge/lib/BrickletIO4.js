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

BrickletIO4.DEVICE_IDENTIFIER = 29;
BrickletIO4.CALLBACK_INTERRUPT = 9;
BrickletIO4.CALLBACK_MONOFLOP_DONE = 12;
BrickletIO4.FUNCTION_SET_VALUE = 1;
BrickletIO4.FUNCTION_GET_VALUE = 2;
BrickletIO4.FUNCTION_SET_CONFIGURATION = 3;
BrickletIO4.FUNCTION_GET_CONFIGURATION = 4;
BrickletIO4.FUNCTION_SET_DEBOUNCE_PERIOD = 5;
BrickletIO4.FUNCTION_GET_DEBOUNCE_PERIOD = 6;
BrickletIO4.FUNCTION_SET_INTERRUPT = 7;
BrickletIO4.FUNCTION_GET_INTERRUPT = 8;
BrickletIO4.FUNCTION_SET_MONOFLOP = 10;
BrickletIO4.FUNCTION_GET_MONOFLOP = 11;
BrickletIO4.FUNCTION_SET_SELECTED_VALUES = 13;
BrickletIO4.FUNCTION_GET_EDGE_COUNT = 14;
BrickletIO4.FUNCTION_SET_EDGE_COUNT_CONFIG = 15;
BrickletIO4.FUNCTION_GET_EDGE_COUNT_CONFIG = 16;
BrickletIO4.FUNCTION_GET_IDENTITY = 255;
BrickletIO4.DIRECTION_IN = 'i';
BrickletIO4.DIRECTION_OUT = 'o';
BrickletIO4.EDGE_TYPE_RISING = 0;
BrickletIO4.EDGE_TYPE_FALLING = 1;
BrickletIO4.EDGE_TYPE_BOTH = 2;

function BrickletIO4(uid, ipcon) {
	//Device for controlling up to 4 general purpose input/output pins

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletIO4.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletIO4.FUNCTION_SET_VALUE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIO4.FUNCTION_GET_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO4.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIO4.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO4.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIO4.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO4.FUNCTION_SET_INTERRUPT] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIO4.FUNCTION_GET_INTERRUPT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO4.CALLBACK_INTERRUPT] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletIO4.FUNCTION_SET_MONOFLOP] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIO4.FUNCTION_GET_MONOFLOP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO4.CALLBACK_MONOFLOP_DONE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletIO4.FUNCTION_SET_SELECTED_VALUES] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIO4.FUNCTION_GET_EDGE_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO4.FUNCTION_SET_EDGE_COUNT_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIO4.FUNCTION_GET_EDGE_COUNT_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO4.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletIO4.CALLBACK_INTERRUPT] = 'B B';
	this.callbackFormats[BrickletIO4.CALLBACK_MONOFLOP_DONE] = 'B B';

	this.setValue = function(valueMask, returnCallback, errorCallback) {
		/*
		Sets the output value (high or low) with a bitmask (4bit). A 1 in the bitmask
		means high and a 0 in the bitmask means low.
		
		For example: The value 3 or 0b0011 will turn the pins 0-1 high and the
		pins 2-3 low.
		
		.. note::
		 This function does nothing for pins that are configured as input.
		 Pull-up resistors can be switched on with :func:`SetConfiguration`.
		*/
		this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_SET_VALUE, [valueMask], 'B', '', returnCallback, errorCallback);
	};
	this.getValue = function(returnCallback, errorCallback) {
		/*
		Returns a bitmask of the values that are currently measured.
		This function works if the pin is configured to input
		as well as if it is configured to output.
		*/
		this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_GET_VALUE, [], '', 'B', returnCallback, errorCallback);
	};
	this.setConfiguration = function(selectionMask, direction, value, returnCallback, errorCallback) {
		/*
		Configures the value and direction of the specified pins. Possible directions
		are 'i' and 'o' for input and output.
		
		If the direction is configured as output, the value is either high or low
		(set as *true* or *false*).
		
		If the direction is configured as input, the value is either pull-up or
		default (set as *true* or *false*).
		
		For example:
		
		* (15, 'i', true) or (0b1111, 'i', true) will set all pins of as input pull-up.
		* (8, 'i', false) or (0b1000, 'i', false) will set pin 3 of as input default (floating if nothing is connected).
		* (3, 'o', false) or (0b0011, 'o', false) will set pins 0 and 1 as output low.
		* (4, 'o', true) or (0b0100, 'o', true) will set pin 2 of as output high.
		
		The default configuration is input with pull-up.
		*/
		this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_SET_CONFIGURATION, [selectionMask, direction, value], 'B c ?', '', returnCallback, errorCallback);
	};
	this.getConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns a value bitmask and a direction bitmask. A 1 in the direction bitmask
		means input and a 0 in the bitmask means output.
		
		For example: A return value of (3, 5) or (0b0011, 0b0101) for direction and
		value means that:
		
		* pin 0 is configured as input pull-up,
		* pin 1 is configured as input default,
		* pin 2 is configured as output high and
		* pin 3 is are configured as output low.
		*/
		this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_GET_CONFIGURATION, [], '', 'B B', returnCallback, errorCallback);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the debounce period of the :func:`Interrupt` callback in ms.
		
		For example: If you set this value to 100, you will get the interrupt
		maximal every 100ms. This is necessary if something that bounces is
		connected to the IO-4 Bricklet, such as a button.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`SetDebouncePeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setInterrupt = function(interruptMask, returnCallback, errorCallback) {
		/*
		Sets the pins on which an interrupt is activated with a bitmask.
		Interrupts are triggered on changes of the voltage level of the pin,
		i.e. changes from high to low and low to high.
		
		For example: An interrupt bitmask of 10 or 0b1010 will enable the interrupt for
		pins 1 and 3.
		
		The interrupt is delivered with the callback :func:`Interrupt`.
		*/
		this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_SET_INTERRUPT, [interruptMask], 'B', '', returnCallback, errorCallback);
	};
	this.getInterrupt = function(returnCallback, errorCallback) {
		/*
		Returns the interrupt bitmask as set by :func:`SetInterrupt`.
		*/
		this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_GET_INTERRUPT, [], '', 'B', returnCallback, errorCallback);
	};
	this.setMonoflop = function(selectionMask, valueMask, time, returnCallback, errorCallback) {
		/*
		Configures a monoflop of the pins specified by the first parameter as 4 bit
		long bitmask. The specified pins must be configured for output. Non-output
		pins will be ignored.
		
		The second parameter is a bitmask with the desired value of the specified
		output pins. A 1 in the bitmask means high and a 0 in the bitmask means low.
		
		The third parameter indicates the time (in ms) that the pins should hold
		the value.
		
		If this function is called with the parameters (9, 1, 1500) or
		(0b1001, 0b0001, 1500): Pin 0 will get high and pin 3 will get low. In 1.5s pin
		0 will get low and pin 3 will get high again.
		
		A monoflop can be used as a fail-safe mechanism. For example: Lets assume you
		have a RS485 bus and an IO-4 Bricklet connected to one of the slave
		stacks. You can now call this function every second, with a time parameter
		of two seconds and pin 0 set to high. Pin 0 will be high all the time. If now
		the RS485 connection is lost, then pin 0 will get low in at most two seconds.
		*/
		this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_SET_MONOFLOP, [selectionMask, valueMask, time], 'B B I', '', returnCallback, errorCallback);
	};
	this.getMonoflop = function(pin, returnCallback, errorCallback) {
		/*
		Returns (for the given pin) the current value and the time as set by
		:func:`SetMonoflop` as well as the remaining time until the value flips.
		
		If the timer is not running currently, the remaining time will be returned
		as 0.
		*/
		this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_GET_MONOFLOP, [pin], 'B', 'B I I', returnCallback, errorCallback);
	};
	this.setSelectedValues = function(selectionMask, valueMask, returnCallback, errorCallback) {
		/*
		Sets the output value (high or low) with a bitmask, according to
		the selection mask. The bitmask is 4 bit long, *true* refers to high 
		and *false* refers to low.
		
		For example: The parameters (9, 4) or (0b0110, 0b0100) will turn
		pin 1 low and pin 2 high, pin 0 and 3 will remain untouched.
		
		.. note::
		 This function does nothing for pins that are configured as input.
		 Pull-up resistors can be switched on with :func:`SetConfiguration`.
		*/
		this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_SET_SELECTED_VALUES, [selectionMask, valueMask], 'B B', '', returnCallback, errorCallback);
	};
	this.getEdgeCount = function(pin, resetCounter, returnCallback, errorCallback) {
		/*
		Returns the current value of the edge counter for the selected pin. You can
		configure the edges that are counted with :func:`SetEdgeCountConfig`.
		
		If you set the reset counter to *true*, the count is set back to 0
		directly after it is read.
		
		.. versionadded:: 2.0.1~(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_GET_EDGE_COUNT, [pin, resetCounter], 'B ?', 'I', returnCallback, errorCallback);
	};
	this.setEdgeCountConfig = function(selectionMask, edgeType, debounce, returnCallback, errorCallback) {
		/*
		Configures the edge counter for the selected pins.
		
		The edge type parameter configures if rising edges, falling edges or
		both are counted if the pin is configured for input. Possible edge types are:
		
		* 0 = rising (default)
		* 1 = falling
		* 2 = both
		
		The debounce time is given in ms.
		
		Configuring an edge counter resets its value to 0.
		
		If you don't know what any of this means, just leave it at default. The
		default configuration is very likely OK for you.
		
		Default values: 0 (edge type) and 100ms (debounce time)
		
		.. versionadded:: 2.0.1~(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_SET_EDGE_COUNT_CONFIG, [selectionMask, edgeType, debounce], 'B B B', '', returnCallback, errorCallback);
	};
	this.getEdgeCountConfig = function(pin, returnCallback, errorCallback) {
		/*
		Returns the edge type and debounce time for the selected pin as set by
		:func:`SetEdgeCountConfig`.
		
		.. versionadded:: 2.0.1~(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_GET_EDGE_COUNT_CONFIG, [pin], 'B', 'B B', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletIO4;
