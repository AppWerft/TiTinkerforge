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

BrickletMotionDetector.DEVICE_IDENTIFIER = 233;
BrickletMotionDetector.CALLBACK_MOTION_DETECTED = 2;
BrickletMotionDetector.CALLBACK_DETECTION_CYCLE_ENDED = 3;
BrickletMotionDetector.FUNCTION_GET_MOTION_DETECTED = 1;
BrickletMotionDetector.FUNCTION_GET_IDENTITY = 255;
BrickletMotionDetector.MOTION_NOT_DETECTED = 0;
BrickletMotionDetector.MOTION_DETECTED = 1;

function BrickletMotionDetector(uid, ipcon) {
	//Device that reads out PIR motion detector

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletMotionDetector.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletMotionDetector.FUNCTION_GET_MOTION_DETECTED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotionDetector.CALLBACK_MOTION_DETECTED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletMotionDetector.CALLBACK_DETECTION_CYCLE_ENDED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletMotionDetector.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletMotionDetector.CALLBACK_MOTION_DETECTED] = '';
	this.callbackFormats[BrickletMotionDetector.CALLBACK_DETECTION_CYCLE_ENDED] = '';

	this.getMotionDetected = function(returnCallback, errorCallback) {
		/*
		Returns 1 if a motion was detected. How long this returns 1 after a motion
		was detected can be adjusted with one of the small potentiometers on the
		Motion Detector Bricklet, see :ref:`here
		<motion_detector_bricklet_sensitivity_delay_block_time>`.
		
		There is also a blue LED on the Bricklet that is on as long as the Bricklet is
		in the "motion detected" state.
		*/
		this.ipcon.sendRequest(this, BrickletMotionDetector.FUNCTION_GET_MOTION_DETECTED, [], '', 'B', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletMotionDetector.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletMotionDetector;
