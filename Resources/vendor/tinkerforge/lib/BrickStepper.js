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

BrickStepper.DEVICE_IDENTIFIER = 15;
BrickStepper.CALLBACK_UNDER_VOLTAGE = 31;
BrickStepper.CALLBACK_POSITION_REACHED = 32;
BrickStepper.CALLBACK_ALL_DATA = 40;
BrickStepper.CALLBACK_NEW_STATE = 41;
BrickStepper.FUNCTION_SET_MAX_VELOCITY = 1;
BrickStepper.FUNCTION_GET_MAX_VELOCITY = 2;
BrickStepper.FUNCTION_GET_CURRENT_VELOCITY = 3;
BrickStepper.FUNCTION_SET_SPEED_RAMPING = 4;
BrickStepper.FUNCTION_GET_SPEED_RAMPING = 5;
BrickStepper.FUNCTION_FULL_BRAKE = 6;
BrickStepper.FUNCTION_SET_CURRENT_POSITION = 7;
BrickStepper.FUNCTION_GET_CURRENT_POSITION = 8;
BrickStepper.FUNCTION_SET_TARGET_POSITION = 9;
BrickStepper.FUNCTION_GET_TARGET_POSITION = 10;
BrickStepper.FUNCTION_SET_STEPS = 11;
BrickStepper.FUNCTION_GET_STEPS = 12;
BrickStepper.FUNCTION_GET_REMAINING_STEPS = 13;
BrickStepper.FUNCTION_SET_STEP_MODE = 14;
BrickStepper.FUNCTION_GET_STEP_MODE = 15;
BrickStepper.FUNCTION_DRIVE_FORWARD = 16;
BrickStepper.FUNCTION_DRIVE_BACKWARD = 17;
BrickStepper.FUNCTION_STOP = 18;
BrickStepper.FUNCTION_GET_STACK_INPUT_VOLTAGE = 19;
BrickStepper.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE = 20;
BrickStepper.FUNCTION_GET_CURRENT_CONSUMPTION = 21;
BrickStepper.FUNCTION_SET_MOTOR_CURRENT = 22;
BrickStepper.FUNCTION_GET_MOTOR_CURRENT = 23;
BrickStepper.FUNCTION_ENABLE = 24;
BrickStepper.FUNCTION_DISABLE = 25;
BrickStepper.FUNCTION_IS_ENABLED = 26;
BrickStepper.FUNCTION_SET_DECAY = 27;
BrickStepper.FUNCTION_GET_DECAY = 28;
BrickStepper.FUNCTION_SET_MINIMUM_VOLTAGE = 29;
BrickStepper.FUNCTION_GET_MINIMUM_VOLTAGE = 30;
BrickStepper.FUNCTION_SET_SYNC_RECT = 33;
BrickStepper.FUNCTION_IS_SYNC_RECT = 34;
BrickStepper.FUNCTION_SET_TIME_BASE = 35;
BrickStepper.FUNCTION_GET_TIME_BASE = 36;
BrickStepper.FUNCTION_GET_ALL_DATA = 37;
BrickStepper.FUNCTION_SET_ALL_DATA_PERIOD = 38;
BrickStepper.FUNCTION_GET_ALL_DATA_PERIOD = 39;
BrickStepper.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME = 241;
BrickStepper.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickStepper.FUNCTION_RESET = 243;
BrickStepper.FUNCTION_GET_IDENTITY = 255;
BrickStepper.STEP_MODE_FULL_STEP = 1;
BrickStepper.STEP_MODE_HALF_STEP = 2;
BrickStepper.STEP_MODE_QUARTER_STEP = 4;
BrickStepper.STEP_MODE_EIGHTH_STEP = 8;
BrickStepper.STATE_STOP = 1;
BrickStepper.STATE_ACCELERATION = 2;
BrickStepper.STATE_RUN = 3;
BrickStepper.STATE_DEACCELERATION = 4;
BrickStepper.STATE_DIRECTION_CHANGE_TO_FORWARD = 5;
BrickStepper.STATE_DIRECTION_CHANGE_TO_BACKWARD = 6;

function BrickStepper(uid, ipcon) {
	//Device for controlling stepper motors

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickStepper.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickStepper.FUNCTION_SET_MAX_VELOCITY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_MAX_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_GET_CURRENT_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_SPEED_RAMPING] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_SPEED_RAMPING] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_FULL_BRAKE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_SET_CURRENT_POSITION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_CURRENT_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_TARGET_POSITION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_TARGET_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_STEPS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_STEPS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_GET_REMAINING_STEPS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_STEP_MODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_STEP_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_DRIVE_FORWARD] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_DRIVE_BACKWARD] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_STOP] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_STACK_INPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_GET_CURRENT_CONSUMPTION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_MOTOR_CURRENT] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_MOTOR_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_ENABLE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_DISABLE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_IS_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_DECAY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_DECAY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_MINIMUM_VOLTAGE] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_GET_MINIMUM_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.CALLBACK_UNDER_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickStepper.CALLBACK_POSITION_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_SET_SYNC_RECT] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_IS_SYNC_RECT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_TIME_BASE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_TIME_BASE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_GET_ALL_DATA] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_ALL_DATA_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_GET_ALL_DATA_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.CALLBACK_ALL_DATA] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickStepper.CALLBACK_NEW_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickStepper.CALLBACK_UNDER_VOLTAGE] = 'H';
	this.callbackFormats[BrickStepper.CALLBACK_POSITION_REACHED] = 'i';
	this.callbackFormats[BrickStepper.CALLBACK_ALL_DATA] = 'H i i H H H';
	this.callbackFormats[BrickStepper.CALLBACK_NEW_STATE] = 'B B';

	this.setMaxVelocity = function(velocity, returnCallback, errorCallback) {
		/*
		Sets the maximum velocity of the stepper motor in steps per second.
		This function does *not* start the motor, it merely sets the maximum
		velocity the stepper motor is accelerated to. To get the motor running use
		either :func:`SetTargetPosition`, :func:`SetSteps`, :func:`DriveForward` or
		:func:`DriveBackward`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_MAX_VELOCITY, [velocity], 'H', '', returnCallback, errorCallback);
	};
	this.getMaxVelocity = function(returnCallback, errorCallback) {
		/*
		Returns the velocity as set by :func:`SetMaxVelocity`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_MAX_VELOCITY, [], '', 'H', returnCallback, errorCallback);
	};
	this.getCurrentVelocity = function(returnCallback, errorCallback) {
		/*
		Returns the *current* velocity of the stepper motor in steps per second.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_CURRENT_VELOCITY, [], '', 'H', returnCallback, errorCallback);
	};
	this.setSpeedRamping = function(acceleration, deacceleration, returnCallback, errorCallback) {
		/*
		Sets the acceleration and deacceleration of the stepper motor. The values
		are given in *steps/s²*. An acceleration of 1000 means, that
		every second the velocity is increased by 1000 *steps/s*.
		
		For example: If the current velocity is 0 and you want to accelerate to a
		velocity of 8000 *steps/s* in 10 seconds, you should set an acceleration
		of 800 *steps/s²*.
		
		An acceleration/deacceleration of 0 means instantaneous
		acceleration/deacceleration (not recommended)
		
		The default value is 1000 for both
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_SPEED_RAMPING, [acceleration, deacceleration], 'H H', '', returnCallback, errorCallback);
	};
	this.getSpeedRamping = function(returnCallback, errorCallback) {
		/*
		Returns the acceleration and deacceleration as set by 
		:func:`SetSpeedRamping`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_SPEED_RAMPING, [], '', 'H H', returnCallback, errorCallback);
	};
	this.fullBrake = function(returnCallback, errorCallback) {
		/*
		Executes an active full brake. 
		 
		.. warning::
		 This function is for emergency purposes,
		 where an immediate brake is necessary. Depending on the current velocity and
		 the strength of the motor, a full brake can be quite violent.
		
		Call :func:`Stop` if you just want to stop the motor.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_FULL_BRAKE, [], '', '', returnCallback, errorCallback);
	};
	this.setCurrentPosition = function(position, returnCallback, errorCallback) {
		/*
		Sets the current steps of the internal step counter. This can be used to
		set the current position to 0 when some kind of starting position
		is reached (e.g. when a CNC machine reaches a corner).
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_CURRENT_POSITION, [position], 'i', '', returnCallback, errorCallback);
	};
	this.getCurrentPosition = function(returnCallback, errorCallback) {
		/*
		Returns the current position of the stepper motor in steps. On startup
		the position is 0. The steps are counted with all possible driving
		functions (:func:`SetTargetPosition`, :func:`SetSteps`, :func:`DriveForward` or
		:func:`DriveBackward`). It also is possible to reset the steps to 0 or
		set them to any other desired value with :func:`SetCurrentPosition`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_CURRENT_POSITION, [], '', 'i', returnCallback, errorCallback);
	};
	this.setTargetPosition = function(position, returnCallback, errorCallback) {
		/*
		Sets the target position of the stepper motor in steps. For example,
		if the current position of the motor is 500 and :func:`SetTargetPosition` is
		called with 1000, the stepper motor will drive 500 steps forward. It will
		use the velocity, acceleration and deacceleration as set by
		:func:`SetMaxVelocity` and :func:`SetSpeedRamping`.
		
		A call of :func:`SetTargetPosition` with the parameter *x* is equivalent to
		a call of :func:`SetSteps` with the parameter 
		(*x* - :func:`GetCurrentPosition`).
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_TARGET_POSITION, [position], 'i', '', returnCallback, errorCallback);
	};
	this.getTargetPosition = function(returnCallback, errorCallback) {
		/*
		Returns the last target position as set by :func:`SetTargetPosition`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_TARGET_POSITION, [], '', 'i', returnCallback, errorCallback);
	};
	this.setSteps = function(steps, returnCallback, errorCallback) {
		/*
		Sets the number of steps the stepper motor should run. Positive values
		will drive the motor forward and negative values backward. 
		The velocity, acceleration and deacceleration as set by
		:func:`SetMaxVelocity` and :func:`SetSpeedRamping` will be used.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_STEPS, [steps], 'i', '', returnCallback, errorCallback);
	};
	this.getSteps = function(returnCallback, errorCallback) {
		/*
		Returns the last steps as set by :func:`SetSteps`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_STEPS, [], '', 'i', returnCallback, errorCallback);
	};
	this.getRemainingSteps = function(returnCallback, errorCallback) {
		/*
		Returns the remaining steps of the last call of :func:`SetSteps`.
		For example, if :func:`SetSteps` is called with 2000 and 
		:func:`GetRemainingSteps` is called after the motor has run for 500 steps,
		it will return 1500.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_REMAINING_STEPS, [], '', 'i', returnCallback, errorCallback);
	};
	this.setStepMode = function(mode, returnCallback, errorCallback) {
		/*
		Sets the step mode of the stepper motor. Possible values are:
		
		* Full Step = 1
		* Half Step = 2
		* Quarter Step = 4
		* Eighth Step = 8
		
		A higher value will increase the resolution and
		decrease the torque of the stepper motor.
		
		The default value is 8 (Eighth Step).
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_STEP_MODE, [mode], 'B', '', returnCallback, errorCallback);
	};
	this.getStepMode = function(returnCallback, errorCallback) {
		/*
		Returns the step mode as set by :func:`SetStepMode`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_STEP_MODE, [], '', 'B', returnCallback, errorCallback);
	};
	this.driveForward = function(returnCallback, errorCallback) {
		/*
		Drives the stepper motor forward until :func:`DriveBackward` or
		:func:`Stop` is called. The velocity, acceleration and deacceleration as 
		set by :func:`SetMaxVelocity` and :func:`SetSpeedRamping` will be used.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_DRIVE_FORWARD, [], '', '', returnCallback, errorCallback);
	};
	this.driveBackward = function(returnCallback, errorCallback) {
		/*
		Drives the stepper motor backward until :func:`DriveForward` or
		:func:`Stop` is triggered. The velocity, acceleration and deacceleration as
		set by :func:`SetMaxVelocity` and :func:`SetSpeedRamping` will be used.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_DRIVE_BACKWARD, [], '', '', returnCallback, errorCallback);
	};
	this.stop = function(returnCallback, errorCallback) {
		/*
		Stops the stepper motor with the deacceleration as set by 
		:func:`SetSpeedRamping`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_STOP, [], '', '', returnCallback, errorCallback);
	};
	this.getStackInputVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the stack input voltage in mV. The stack input voltage is the
		voltage that is supplied via the stack, i.e. it is given by a 
		Step-Down or Step-Up Power Supply.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_STACK_INPUT_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
	};
	this.getExternalInputVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the external input voltage in mV. The external input voltage is
		given via the black power input connector on the Stepper Brick. 
		 
		If there is an external input voltage and a stack input voltage, the motor
		will be driven by the external input voltage. If there is only a stack 
		voltage present, the motor will be driven by this voltage.
		
		.. warning::
		 This means, if you have a high stack voltage and a low external voltage,
		 the motor will be driven with the low external voltage. If you then remove
		 the external connection, it will immediately be driven by the high
		 stack voltage
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
	};
	this.getCurrentConsumption = function(returnCallback, errorCallback) {
		/*
		Returns the current consumption of the motor in mA.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_CURRENT_CONSUMPTION, [], '', 'H', returnCallback, errorCallback);
	};
	this.setMotorCurrent = function(current, returnCallback, errorCallback) {
		/*
		Sets the current in mA with which the motor will be driven.
		The minimum value is 100mA, the maximum value 2291mA and the 
		default value is 800mA.
		
		.. warning::
		 Do not set this value above the specifications of your stepper motor.
		 Otherwise it may damage your motor.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_MOTOR_CURRENT, [current], 'H', '', returnCallback, errorCallback);
	};
	this.getMotorCurrent = function(returnCallback, errorCallback) {
		/*
		Returns the current as set by :func:`SetMotorCurrent`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_MOTOR_CURRENT, [], '', 'H', returnCallback, errorCallback);
	};
	this.enable = function(returnCallback, errorCallback) {
		/*
		Enables the driver chip. The driver parameters can be configured (maximum velocity,
		acceleration, etc) before it is enabled.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_ENABLE, [], '', '', returnCallback, errorCallback);
	};
	this.disable = function(returnCallback, errorCallback) {
		/*
		Disables the driver chip. The configurations are kept (maximum velocity,
		acceleration, etc) but the motor is not driven until it is enabled again.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_DISABLE, [], '', '', returnCallback, errorCallback);
	};
	this.isEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the driver chip is enabled, *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_IS_ENABLED, [], '', '?', returnCallback, errorCallback);
	};
	this.setDecay = function(decay, returnCallback, errorCallback) {
		/*
		Sets the decay mode of the stepper motor. The possible value range is
		between 0 and 65535. A value of 0 sets the fast decay mode, a value of
		65535 sets the slow decay mode and a value in between sets the mixed
		decay mode.
		
		Changing the decay mode is only possible if synchronous rectification
		is enabled (see :func:`SetSyncRect`).
		
		For a good explanation of the different decay modes see 
		`this <http://ebldc.com/?p=86/>`__ blog post by Avayan.
		
		A good decay mode is unfortunately different for every motor. The best
		way to work out a good decay mode for your stepper motor, if you can't
		measure the current with an oscilloscope, is to listen to the sound of
		the motor. If the value is too low, you often hear a high pitched 
		sound and if it is too high you can often hear a humming sound.
		
		Generally, fast decay mode (small value) will be noisier but also
		allow higher motor speeds.
		
		The default value is 10000.
		
		.. note::
		 There is unfortunately no formula to calculate a perfect decay
		 mode for a given stepper motor. If you have problems with loud noises
		 or the maximum motor speed is too slow, you should try to tinker with
		 the decay value
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_DECAY, [decay], 'H', '', returnCallback, errorCallback);
	};
	this.getDecay = function(returnCallback, errorCallback) {
		/*
		Returns the decay mode as set by :func:`SetDecay`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_DECAY, [], '', 'H', returnCallback, errorCallback);
	};
	this.setMinimumVoltage = function(voltage, returnCallback, errorCallback) {
		/*
		Sets the minimum voltage in mV, below which the :func:`UnderVoltage` callback
		is triggered. The minimum possible value that works with the Stepper Brick is 8V.
		You can use this function to detect the discharge of a battery that is used
		to drive the stepper motor. If you have a fixed power supply, you likely do 
		not need this functionality.
		
		The default value is 8V.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_MINIMUM_VOLTAGE, [voltage], 'H', '', returnCallback, errorCallback);
	};
	this.getMinimumVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the minimum voltage as set by :func:`SetMinimumVoltage`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_MINIMUM_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
	};
	this.setSyncRect = function(syncRect, returnCallback, errorCallback) {
		/*
		Turns synchronous rectification on or off (*true* or *false*).
		
		With synchronous rectification on, the decay can be changed
		(see :func:`SetDecay`). Without synchronous rectification fast
		decay is used.
		
		For an explanation of synchronous rectification see 
		`here <http://en.wikipedia.org/wiki/Active_rectification>`__.
		
		.. warning::
		 If you want to use high speeds (> 10000 steps/s) for a large 
		 stepper motor with a large inductivity we strongly
		 suggest that you disable synchronous rectification. Otherwise the
		 Brick may not be able to cope with the load and overheat.
		
		The default value is *false*.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_SYNC_RECT, [syncRect], '?', '', returnCallback, errorCallback);
	};
	this.isSyncRect = function(returnCallback, errorCallback) {
		/*
		Returns *true* if synchronous rectification is enabled, *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_IS_SYNC_RECT, [], '', '?', returnCallback, errorCallback);
	};
	this.setTimeBase = function(timeBase, returnCallback, errorCallback) {
		/*
		Sets the time base of the velocity and the acceleration of the stepper brick
		(in seconds).
		
		For example, if you want to make one step every 1.5 seconds, you can set 
		the time base to 15 and the velocity to 10. Now the velocity is 
		10steps/15s = 1steps/1.5s.
		
		The default value is 1.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_TIME_BASE, [timeBase], 'I', '', returnCallback, errorCallback);
	};
	this.getTimeBase = function(returnCallback, errorCallback) {
		/*
		Returns the time base as set by :func:`SetTimeBase`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_TIME_BASE, [], '', 'I', returnCallback, errorCallback);
	};
	this.getAllData = function(returnCallback, errorCallback) {
		/*
		Returns the following parameters: The current velocity,
		the current position, the remaining steps, the stack voltage, the external
		voltage and the current consumption of the stepper motor.
		
		There is also a callback for this function, see :func:`AllData`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_ALL_DATA, [], '', 'H i i H H H', returnCallback, errorCallback);
	};
	this.setAllDataPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`AllData` callback is triggered
		periodically. A value of 0 turns the callback off.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_ALL_DATA_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getAllDataPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetAllDataPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_ALL_DATA_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.getProtocol1BrickletName = function(port, returnCallback, errorCallback) {
		/*
		Returns the firmware and protocol version and the name of the Bricklet for a
		given port.
		
		This functions sole purpose is to allow automatic flashing of v1.x.y Bricklet
		plugins.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME, [port], 'c', 'B B3 s40', returnCallback, errorCallback);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature in °C/10 as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has an
		accuracy of +-15%. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Brick. Calling this function
		on a Brick inside of a stack will reset the whole stack.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_RESET, [], '', '', returnCallback, errorCallback);
	};
	this.getIdentity = function(returnCallback, errorCallback) {
		/*
		Returns the UID, the UID where the Brick is connected to, 
		the position, the hardware and firmware version as well as the
		device identifier.
		
		The position can be '0'-'8' (stack position).
		
		The device identifier numbers can be found :ref:`here <device_identifier>`.
		|device_identifier_constant|
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickStepper;
