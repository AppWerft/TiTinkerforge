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

BrickServo.DEVICE_IDENTIFIER = 14;
BrickServo.CALLBACK_UNDER_VOLTAGE = 26;
BrickServo.CALLBACK_POSITION_REACHED = 27;
BrickServo.CALLBACK_VELOCITY_REACHED = 28;
BrickServo.FUNCTION_ENABLE = 1;
BrickServo.FUNCTION_DISABLE = 2;
BrickServo.FUNCTION_IS_ENABLED = 3;
BrickServo.FUNCTION_SET_POSITION = 4;
BrickServo.FUNCTION_GET_POSITION = 5;
BrickServo.FUNCTION_GET_CURRENT_POSITION = 6;
BrickServo.FUNCTION_SET_VELOCITY = 7;
BrickServo.FUNCTION_GET_VELOCITY = 8;
BrickServo.FUNCTION_GET_CURRENT_VELOCITY = 9;
BrickServo.FUNCTION_SET_ACCELERATION = 10;
BrickServo.FUNCTION_GET_ACCELERATION = 11;
BrickServo.FUNCTION_SET_OUTPUT_VOLTAGE = 12;
BrickServo.FUNCTION_GET_OUTPUT_VOLTAGE = 13;
BrickServo.FUNCTION_SET_PULSE_WIDTH = 14;
BrickServo.FUNCTION_GET_PULSE_WIDTH = 15;
BrickServo.FUNCTION_SET_DEGREE = 16;
BrickServo.FUNCTION_GET_DEGREE = 17;
BrickServo.FUNCTION_SET_PERIOD = 18;
BrickServo.FUNCTION_GET_PERIOD = 19;
BrickServo.FUNCTION_GET_SERVO_CURRENT = 20;
BrickServo.FUNCTION_GET_OVERALL_CURRENT = 21;
BrickServo.FUNCTION_GET_STACK_INPUT_VOLTAGE = 22;
BrickServo.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE = 23;
BrickServo.FUNCTION_SET_MINIMUM_VOLTAGE = 24;
BrickServo.FUNCTION_GET_MINIMUM_VOLTAGE = 25;
BrickServo.FUNCTION_ENABLE_POSITION_REACHED_CALLBACK = 29;
BrickServo.FUNCTION_DISABLE_POSITION_REACHED_CALLBACK = 30;
BrickServo.FUNCTION_IS_POSITION_REACHED_CALLBACK_ENABLED = 31;
BrickServo.FUNCTION_ENABLE_VELOCITY_REACHED_CALLBACK = 32;
BrickServo.FUNCTION_DISABLE_VELOCITY_REACHED_CALLBACK = 33;
BrickServo.FUNCTION_IS_VELOCITY_REACHED_CALLBACK_ENABLED = 34;
BrickServo.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME = 241;
BrickServo.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickServo.FUNCTION_RESET = 243;
BrickServo.FUNCTION_GET_IDENTITY = 255;

function BrickServo(uid, ipcon) {
	//Device for controlling up to seven servos

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickServo.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickServo.FUNCTION_ENABLE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_DISABLE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_IS_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_SET_POSITION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_GET_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_CURRENT_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_SET_VELOCITY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_GET_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_CURRENT_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_SET_ACCELERATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_GET_ACCELERATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_SET_OUTPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_GET_OUTPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_SET_PULSE_WIDTH] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_GET_PULSE_WIDTH] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_SET_DEGREE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_GET_DEGREE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_SET_PERIOD] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_GET_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_SERVO_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_OVERALL_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_STACK_INPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_SET_MINIMUM_VOLTAGE] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_MINIMUM_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.CALLBACK_UNDER_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickServo.CALLBACK_POSITION_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickServo.CALLBACK_VELOCITY_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickServo.FUNCTION_ENABLE_POSITION_REACHED_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickServo.FUNCTION_DISABLE_POSITION_REACHED_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickServo.FUNCTION_IS_POSITION_REACHED_CALLBACK_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_ENABLE_VELOCITY_REACHED_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickServo.FUNCTION_DISABLE_VELOCITY_REACHED_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickServo.FUNCTION_IS_VELOCITY_REACHED_CALLBACK_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickServo.CALLBACK_UNDER_VOLTAGE] = 'H';
	this.callbackFormats[BrickServo.CALLBACK_POSITION_REACHED] = 'B h';
	this.callbackFormats[BrickServo.CALLBACK_VELOCITY_REACHED] = 'B h';

	this.enable = function(servoNum, returnCallback, errorCallback) {
		/*
		Enables a servo (0 to 6). If a servo is enabled, the configured position,
		velocity, acceleration, etc. are applied immediately.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_ENABLE, [servoNum], 'B', '', returnCallback, errorCallback);
	};
	this.disable = function(servoNum, returnCallback, errorCallback) {
		/*
		Disables a servo (0 to 6). Disabled servos are not driven at all, i.e. a
		disabled servo will not hold its position if a load is applied.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_DISABLE, [servoNum], 'B', '', returnCallback, errorCallback);
	};
	this.isEnabled = function(servoNum, returnCallback, errorCallback) {
		/*
		Returns *true* if the specified servo is enabled, *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_IS_ENABLED, [servoNum], 'B', '?', returnCallback, errorCallback);
	};
	this.setPosition = function(servoNum, position, returnCallback, errorCallback) {
		/*
		Sets the position in °/100 for the specified servo. 
		
		The default range of the position is -9000 to 9000, but it can be specified
		according to your servo with :func:`SetDegree`.
		
		If you want to control a linear servo or RC brushless motor controller or
		similar with the Servo Brick, you can also define lengths or speeds with
		:func:`SetDegree`.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_POSITION, [servoNum, position], 'B h', '', returnCallback, errorCallback);
	};
	this.getPosition = function(servoNum, returnCallback, errorCallback) {
		/*
		Returns the position of the specified servo as set by :func:`SetPosition`.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_POSITION, [servoNum], 'B', 'h', returnCallback, errorCallback);
	};
	this.getCurrentPosition = function(servoNum, returnCallback, errorCallback) {
		/*
		Returns the *current* position of the specified servo. This may not be the
		value of :func:`SetPosition` if the servo is currently approaching a
		position goal.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_CURRENT_POSITION, [servoNum], 'B', 'h', returnCallback, errorCallback);
	};
	this.setVelocity = function(servoNum, velocity, returnCallback, errorCallback) {
		/*
		Sets the maximum velocity of the specified servo in °/100s. The velocity
		is accelerated according to the value set by :func:`SetAcceleration`.
		
		The minimum velocity is 0 (no movement) and the maximum velocity is 65535.
		With a value of 65535 the position will be set immediately (no velocity).
		
		The default value is 65535.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_VELOCITY, [servoNum, velocity], 'B H', '', returnCallback, errorCallback);
	};
	this.getVelocity = function(servoNum, returnCallback, errorCallback) {
		/*
		Returns the velocity of the specified servo as set by :func:`SetVelocity`.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_VELOCITY, [servoNum], 'B', 'H', returnCallback, errorCallback);
	};
	this.getCurrentVelocity = function(servoNum, returnCallback, errorCallback) {
		/*
		Returns the *current* velocity of the specified servo. This may not be the
		value of :func:`SetVelocity` if the servo is currently approaching a
		velocity goal.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_CURRENT_VELOCITY, [servoNum], 'B', 'H', returnCallback, errorCallback);
	};
	this.setAcceleration = function(servoNum, acceleration, returnCallback, errorCallback) {
		/*
		Sets the acceleration of the specified servo in °/100s².
		
		The minimum acceleration is 1 and the maximum acceleration is 65535.
		With a value of 65535 the velocity will be set immediately (no acceleration).
		
		The default value is 65535.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_ACCELERATION, [servoNum, acceleration], 'B H', '', returnCallback, errorCallback);
	};
	this.getAcceleration = function(servoNum, returnCallback, errorCallback) {
		/*
		Returns the acceleration for the specified servo as set by 
		:func:`SetAcceleration`.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_ACCELERATION, [servoNum], 'B', 'H', returnCallback, errorCallback);
	};
	this.setOutputVoltage = function(voltage, returnCallback, errorCallback) {
		/*
		Sets the output voltages with which the servos are driven in mV.
		The minimum output voltage is 2000mV and the maximum output voltage is 
		9000mV.
		
		.. note::
		 We recommend that you set this value to the maximum voltage that is
		 specified for your servo, most servos achieve their maximum force only
		 with high voltages.
		
		The default value is 5000.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_OUTPUT_VOLTAGE, [voltage], 'H', '', returnCallback, errorCallback);
	};
	this.getOutputVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the output voltage as specified by :func:`SetOutputVoltage`.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_OUTPUT_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
	};
	this.setPulseWidth = function(servoNum, min, max, returnCallback, errorCallback) {
		/*
		Sets the minimum and maximum pulse width of the specified servo in µs.
		
		Usually, servos are controlled with a 
		`PWM <http://en.wikipedia.org/wiki/Pulse-width_modulation>`__, whereby the
		length of the pulse controls the position of the servo. Every servo has
		different minimum and maximum pulse widths, these can be specified with
		this function.
		
		If you have a datasheet for your servo that specifies the minimum and
		maximum pulse width, you should set the values accordingly. If your servo
		comes without any datasheet you have to find the values via trial and error.
		
		Both values have a range from 1 to 65535 (unsigned 16-bit integer). The
		minimum must be smaller than the maximum.
		
		The default values are 1000µs (1ms) and 2000µs (2ms) for minimum and 
		maximum pulse width.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_PULSE_WIDTH, [servoNum, min, max], 'B H H', '', returnCallback, errorCallback);
	};
	this.getPulseWidth = function(servoNum, returnCallback, errorCallback) {
		/*
		Returns the minimum and maximum pulse width for the specified servo as set by
		:func:`SetPulseWidth`.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_PULSE_WIDTH, [servoNum], 'B', 'H H', returnCallback, errorCallback);
	};
	this.setDegree = function(servoNum, min, max, returnCallback, errorCallback) {
		/*
		Sets the minimum and maximum degree for the specified servo (by default
		given as °/100).
		
		This only specifies the abstract values between which the minimum and maximum
		pulse width is scaled. For example: If you specify a pulse width of 1000µs
		to 2000µs and a degree range of -90° to 90°, a call of :func:`SetPosition`
		with 0 will result in a pulse width of 1500µs 
		(-90° = 1000µs, 90° = 2000µs, etc.).
		
		Possible usage:
		
		* The datasheet of your servo specifies a range of 200° with the middle position
		  at 110°. In this case you can set the minimum to -9000 and the maximum to 11000.
		* You measure a range of 220° on your servo and you don't have or need a middle
		  position. In this case you can set the minimum to 0 and the maximum to 22000.
		* You have a linear servo with a drive length of 20cm, In this case you could
		  set the minimum to 0 and the maximum to 20000. Now you can set the Position
		  with :func:`SetPosition` with a resolution of cm/100. Also the velocity will
		  have a resolution of cm/100s and the acceleration will have a resolution of
		  cm/100s².
		* You don't care about units and just want the highest possible resolution. In
		  this case you should set the minimum to -32767 and the maximum to 32767.
		* You have a brushless motor with a maximum speed of 10000 rpm and want to
		  control it with a RC brushless motor controller. In this case you can set the
		  minimum to 0 and the maximum to 10000. :func:`SetPosition` now controls the rpm.
		
		Both values have a possible range from -32767 to 32767 
		(signed 16-bit integer). The minimum must be smaller than the maximum.
		
		The default values are -9000 and 9000 for the minimum and maximum degree.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_DEGREE, [servoNum, min, max], 'B h h', '', returnCallback, errorCallback);
	};
	this.getDegree = function(servoNum, returnCallback, errorCallback) {
		/*
		Returns the minimum and maximum degree for the specified servo as set by
		:func:`SetDegree`.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_DEGREE, [servoNum], 'B', 'h h', returnCallback, errorCallback);
	};
	this.setPeriod = function(servoNum, period, returnCallback, errorCallback) {
		/*
		Sets the period of the specified servo in µs.
		
		Usually, servos are controlled with a 
		`PWM <http://en.wikipedia.org/wiki/Pulse-width_modulation>`__. Different
		servos expect PWMs with different periods. Most servos run well with a 
		period of about 20ms.
		
		If your servo comes with a datasheet that specifies a period, you should
		set it accordingly. If you don't have a datasheet and you have no idea
		what the correct period is, the default value (19.5ms) will most likely
		work fine. 
		
		The minimum possible period is 1µs and the maximum is 65535µs.
		
		The default value is 19.5ms (19500µs).
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_PERIOD, [servoNum, period], 'B H', '', returnCallback, errorCallback);
	};
	this.getPeriod = function(servoNum, returnCallback, errorCallback) {
		/*
		Returns the period for the specified servo as set by :func:`SetPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_PERIOD, [servoNum], 'B', 'H', returnCallback, errorCallback);
	};
	this.getServoCurrent = function(servoNum, returnCallback, errorCallback) {
		/*
		Returns the current consumption of the specified servo in mA.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_SERVO_CURRENT, [servoNum], 'B', 'H', returnCallback, errorCallback);
	};
	this.getOverallCurrent = function(returnCallback, errorCallback) {
		/*
		Returns the current consumption of all servos together in mA.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_OVERALL_CURRENT, [], '', 'H', returnCallback, errorCallback);
	};
	this.getStackInputVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the stack input voltage in mV. The stack input voltage is the
		voltage that is supplied via the stack, i.e. it is given by a 
		Step-Down or Step-Up Power Supply.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_STACK_INPUT_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
	};
	this.getExternalInputVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the external input voltage in mV. The external input voltage is
		given via the black power input connector on the Servo Brick. 
		 
		If there is an external input voltage and a stack input voltage, the motors
		will be driven by the external input voltage. If there is only a stack 
		voltage present, the motors will be driven by this voltage.
		
		.. warning::
		 This means, if you have a high stack voltage and a low external voltage,
		 the motors will be driven with the low external voltage. If you then remove
		 the external connection, it will immediately be driven by the high
		 stack voltage
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
	};
	this.setMinimumVoltage = function(voltage, returnCallback, errorCallback) {
		/*
		Sets the minimum voltage in mV, below which the :func:`UnderVoltage` callback
		is triggered. The minimum possible value that works with the Servo Brick is 5V.
		You can use this function to detect the discharge of a battery that is used
		to drive the stepper motor. If you have a fixed power supply, you likely do 
		not need this functionality.
		
		The default value is 5V (5000mV).
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_MINIMUM_VOLTAGE, [voltage], 'H', '', returnCallback, errorCallback);
	};
	this.getMinimumVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the minimum voltage as set by :func:`SetMinimumVoltage`
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_MINIMUM_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
	};
	this.enablePositionReachedCallback = function(returnCallback, errorCallback) {
		/*
		Enables the :func:`PositionReached` callback.
		
		Default is disabled.
		
		.. versionadded:: 2.0.1~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_ENABLE_POSITION_REACHED_CALLBACK, [], '', '', returnCallback, errorCallback);
	};
	this.disablePositionReachedCallback = function(returnCallback, errorCallback) {
		/*
		Disables the :func:`PositionReached` callback.
		
		Default is disabled.
		
		.. versionadded:: 2.0.1~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_DISABLE_POSITION_REACHED_CALLBACK, [], '', '', returnCallback, errorCallback);
	};
	this.isPositionReachedCallbackEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if :func:`PositionReached` callback is enabled, *false* otherwise.
		
		.. versionadded:: 2.0.1~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_IS_POSITION_REACHED_CALLBACK_ENABLED, [], '', 'B', returnCallback, errorCallback);
	};
	this.enableVelocityReachedCallback = function(returnCallback, errorCallback) {
		/*
		Enables the :func:`VelocityReached` callback.
		
		Default is disabled.
		
		.. versionadded:: 2.0.1~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_ENABLE_VELOCITY_REACHED_CALLBACK, [], '', '', returnCallback, errorCallback);
	};
	this.disableVelocityReachedCallback = function(returnCallback, errorCallback) {
		/*
		Disables the :func:`VelocityReached` callback.
		
		Default is disabled.
		
		.. versionadded:: 2.0.1~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_DISABLE_VELOCITY_REACHED_CALLBACK, [], '', '', returnCallback, errorCallback);
	};
	this.isVelocityReachedCallbackEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if :func:`VelocityReached` callback is enabled, *false* otherwise.
		
		.. versionadded:: 2.0.1~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_IS_VELOCITY_REACHED_CALLBACK_ENABLED, [], '', 'B', returnCallback, errorCallback);
	};
	this.getProtocol1BrickletName = function(port, returnCallback, errorCallback) {
		/*
		Returns the firmware and protocol version and the name of the Bricklet for a
		given port.
		
		This functions sole purpose is to allow automatic flashing of v1.x.y Bricklet
		plugins.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME, [port], 'c', 'B B3 s40', returnCallback, errorCallback);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature in °C/10 as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has an
		accuracy of +-15%. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Brick. Calling this function
		on a Brick inside of a stack will reset the whole stack.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_RESET, [], '', '', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickServo;
