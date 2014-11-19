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

BrickletSolidStateRelay.DEVICE_IDENTIFIER = 244;
BrickletSolidStateRelay.CALLBACK_MONOFLOP_DONE = 5;
BrickletSolidStateRelay.FUNCTION_SET_STATE = 1;
BrickletSolidStateRelay.FUNCTION_GET_STATE = 2;
BrickletSolidStateRelay.FUNCTION_SET_MONOFLOP = 3;
BrickletSolidStateRelay.FUNCTION_GET_MONOFLOP = 4;
BrickletSolidStateRelay.FUNCTION_GET_IDENTITY = 255;

function BrickletSolidStateRelay(uid, ipcon) {
	//Device for controlling AC and DC Solid State Relays

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletSolidStateRelay.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletSolidStateRelay.FUNCTION_SET_STATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSolidStateRelay.FUNCTION_GET_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSolidStateRelay.FUNCTION_SET_MONOFLOP] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSolidStateRelay.FUNCTION_GET_MONOFLOP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSolidStateRelay.CALLBACK_MONOFLOP_DONE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletSolidStateRelay.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletSolidStateRelay.CALLBACK_MONOFLOP_DONE] = '?';

	this.setState = function(state, returnCallback, errorCallback) {
		/*
		Sets the state of the relays *true* means on and *false* means off. 
		
		Running monoflop timers will be overwritten if this function is called.
		
		The default value is *false*.
		*/
		this.ipcon.sendRequest(this, BrickletSolidStateRelay.FUNCTION_SET_STATE, [state], '?', '', returnCallback, errorCallback);
	};
	this.getState = function(returnCallback, errorCallback) {
		/*
		Returns the state of the relay, *true* means on and *false* means off.
		*/
		this.ipcon.sendRequest(this, BrickletSolidStateRelay.FUNCTION_GET_STATE, [], '', '?', returnCallback, errorCallback);
	};
	this.setMonoflop = function(state, time, returnCallback, errorCallback) {
		/*
		The first parameter  is the desired state of the relay (*true* means on 
		and *false* means off). The second parameter indicates the time (in ms) that 
		the relay should hold the state.
		
		If this function is called with the parameters (true, 1500):
		The relay will turn on and in 1.5s it will turn off again.
		
		A monoflop can be used as a failsafe mechanism. For example: Lets assume you 
		have a RS485 bus and a Solid State Relay Bricklet connected to one of the slave 
		stacks. You can now call this function every second, with a time parameter
		of two seconds. The relay will be on all the time. If now the RS485 
		connection is lost, the relay will turn off in at most two seconds.
		*/
		this.ipcon.sendRequest(this, BrickletSolidStateRelay.FUNCTION_SET_MONOFLOP, [state, time], '? I', '', returnCallback, errorCallback);
	};
	this.getMonoflop = function(returnCallback, errorCallback) {
		/*
		Returns the current state and the time as set by 
		:func:`SetMonoflop` as well as the remaining time until the state flips.
		
		If the timer is not running currently, the remaining time will be returned
		as 0.
		*/
		this.ipcon.sendRequest(this, BrickletSolidStateRelay.FUNCTION_GET_MONOFLOP, [], '', '? I I', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletSolidStateRelay.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletSolidStateRelay;
