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

BrickletRemoteSwitch.DEVICE_IDENTIFIER = 235;
BrickletRemoteSwitch.CALLBACK_SWITCHING_DONE = 3;
BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET = 1;
BrickletRemoteSwitch.FUNCTION_GET_SWITCHING_STATE = 2;
BrickletRemoteSwitch.FUNCTION_SET_REPEATS = 4;
BrickletRemoteSwitch.FUNCTION_GET_REPEATS = 5;
BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET_A = 6;
BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET_B = 7;
BrickletRemoteSwitch.FUNCTION_DIM_SOCKET_B = 8;
BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET_C = 9;
BrickletRemoteSwitch.FUNCTION_GET_IDENTITY = 255;
BrickletRemoteSwitch.SWITCH_TO_OFF = 0;
BrickletRemoteSwitch.SWITCH_TO_ON = 1;
BrickletRemoteSwitch.SWITCHING_STATE_READY = 0;
BrickletRemoteSwitch.SWITCHING_STATE_BUSY = 1;

function BrickletRemoteSwitch(uid, ipcon) {
	//Device that controls mains switches remotely

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletRemoteSwitch.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRemoteSwitch.FUNCTION_GET_SWITCHING_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRemoteSwitch.CALLBACK_SWITCHING_DONE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletRemoteSwitch.FUNCTION_SET_REPEATS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRemoteSwitch.FUNCTION_GET_REPEATS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET_A] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET_B] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRemoteSwitch.FUNCTION_DIM_SOCKET_B] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET_C] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRemoteSwitch.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletRemoteSwitch.CALLBACK_SWITCHING_DONE] = '';

	this.switchSocket = function(houseCode, receiverCode, switchTo, returnCallback, errorCallback) {
		/*
		This function is deprecated, use :func:`SwitchSocketA` instead.
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET, [houseCode, receiverCode, switchTo], 'B B B', '', returnCallback, errorCallback);
	};
	this.getSwitchingState = function(returnCallback, errorCallback) {
		/*
		Returns the current switching state. If the current state is busy, the
		Bricklet is currently sending a code to switch a socket. It will not
		accept any calls of :func:`SwitchSocket` until the state changes to ready.
		
		How long the switching takes is dependent on the number of repeats, see
		:func:`SetRepeats`.
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitch.FUNCTION_GET_SWITCHING_STATE, [], '', 'B', returnCallback, errorCallback);
	};
	this.setRepeats = function(repeats, returnCallback, errorCallback) {
		/*
		Sets the number of times the code is send when of the :func:`SwitchSocket`
		functions is called. The repeats basically correspond to the amount of time
		that a button of the remote is pressed.
		
		Some dimmers are controlled by the length of a button pressed,
		this can be simulated by increasing the repeats.
		
		The default value is 5.
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitch.FUNCTION_SET_REPEATS, [repeats], 'B', '', returnCallback, errorCallback);
	};
	this.getRepeats = function(returnCallback, errorCallback) {
		/*
		Returns the number of repeats as set by :func:`SetRepeats`.
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitch.FUNCTION_GET_REPEATS, [], '', 'B', returnCallback, errorCallback);
	};
	this.switchSocketA = function(houseCode, receiverCode, switchTo, returnCallback, errorCallback) {
		/*
		To switch a type A socket you have to give the house code, receiver code and the
		state (on or off) you want to switch to.
		
		The house code and receiver code have a range of 0 to 31 (5bit).
		
		A detailed description on how you can figure out the house and receiver code
		can be found :ref:`here <remote_switch_bricklet_type_a_house_and_receiver_code>`.
		
		.. versionadded:: 2.0.1~(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET_A, [houseCode, receiverCode, switchTo], 'B B B', '', returnCallback, errorCallback);
	};
	this.switchSocketB = function(address, unit, switchTo, returnCallback, errorCallback) {
		/*
		To switch a type B socket you have to give the address, unit and the state
		(on or off) you want to switch to.
		
		The address has a range of 0 to 67108863 (26bit) and the unit has a range
		of 0 to 15 (4bit). To switch all devices with the same address use 255 for
		the unit.
		
		A detailed description on how you can teach a socket the address and unit can
		be found :ref:`here <remote_switch_bricklet_type_b_address_and_unit>`.
		
		.. versionadded:: 2.0.1~(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET_B, [address, unit, switchTo], 'I B B', '', returnCallback, errorCallback);
	};
	this.dimSocketB = function(address, unit, dimValue, returnCallback, errorCallback) {
		/*
		To control a type B dimmer you have to give the address, unit and the
		dim value you want to set the dimmer to.
		
		The address has a range of 0 to 67108863 (26bit), the unit and the dim value
		has a range of 0 to 15 (4bit).
		
		A detailed description on how you can teach a dimmer the address and unit can
		be found :ref:`here <remote_switch_bricklet_type_b_address_and_unit>`.
		
		.. versionadded:: 2.0.1~(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitch.FUNCTION_DIM_SOCKET_B, [address, unit, dimValue], 'I B B', '', returnCallback, errorCallback);
	};
	this.switchSocketC = function(systemCode, deviceCode, switchTo, returnCallback, errorCallback) {
		/*
		To switch a type C socket you have to give the system code, device code and the
		state (on or off) you want to switch to.
		
		The system code has a range of 'A' to 'P' (4bit) and the device code has a
		range of 1 to 16 (4bit).
		
		A detailed description on how you can figure out the system and device code
		can be found :ref:`here <remote_switch_bricklet_type_c_system_and_device_code>`.
		
		.. versionadded:: 2.0.1~(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET_C, [systemCode, deviceCode, switchTo], 'c B B', '', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletRemoteSwitch.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletRemoteSwitch;
