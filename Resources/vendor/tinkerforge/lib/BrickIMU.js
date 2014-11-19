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

BrickIMU.DEVICE_IDENTIFIER = 16;
BrickIMU.CALLBACK_ACCELERATION = 31;
BrickIMU.CALLBACK_MAGNETIC_FIELD = 32;
BrickIMU.CALLBACK_ANGULAR_VELOCITY = 33;
BrickIMU.CALLBACK_ALL_DATA = 34;
BrickIMU.CALLBACK_ORIENTATION = 35;
BrickIMU.CALLBACK_QUATERNION = 36;
BrickIMU.FUNCTION_GET_ACCELERATION = 1;
BrickIMU.FUNCTION_GET_MAGNETIC_FIELD = 2;
BrickIMU.FUNCTION_GET_ANGULAR_VELOCITY = 3;
BrickIMU.FUNCTION_GET_ALL_DATA = 4;
BrickIMU.FUNCTION_GET_ORIENTATION = 5;
BrickIMU.FUNCTION_GET_QUATERNION = 6;
BrickIMU.FUNCTION_GET_IMU_TEMPERATURE = 7;
BrickIMU.FUNCTION_LEDS_ON = 8;
BrickIMU.FUNCTION_LEDS_OFF = 9;
BrickIMU.FUNCTION_ARE_LEDS_ON = 10;
BrickIMU.FUNCTION_SET_ACCELERATION_RANGE = 11;
BrickIMU.FUNCTION_GET_ACCELERATION_RANGE = 12;
BrickIMU.FUNCTION_SET_MAGNETOMETER_RANGE = 13;
BrickIMU.FUNCTION_GET_MAGNETOMETER_RANGE = 14;
BrickIMU.FUNCTION_SET_CONVERGENCE_SPEED = 15;
BrickIMU.FUNCTION_GET_CONVERGENCE_SPEED = 16;
BrickIMU.FUNCTION_SET_CALIBRATION = 17;
BrickIMU.FUNCTION_GET_CALIBRATION = 18;
BrickIMU.FUNCTION_SET_ACCELERATION_PERIOD = 19;
BrickIMU.FUNCTION_GET_ACCELERATION_PERIOD = 20;
BrickIMU.FUNCTION_SET_MAGNETIC_FIELD_PERIOD = 21;
BrickIMU.FUNCTION_GET_MAGNETIC_FIELD_PERIOD = 22;
BrickIMU.FUNCTION_SET_ANGULAR_VELOCITY_PERIOD = 23;
BrickIMU.FUNCTION_GET_ANGULAR_VELOCITY_PERIOD = 24;
BrickIMU.FUNCTION_SET_ALL_DATA_PERIOD = 25;
BrickIMU.FUNCTION_GET_ALL_DATA_PERIOD = 26;
BrickIMU.FUNCTION_SET_ORIENTATION_PERIOD = 27;
BrickIMU.FUNCTION_GET_ORIENTATION_PERIOD = 28;
BrickIMU.FUNCTION_SET_QUATERNION_PERIOD = 29;
BrickIMU.FUNCTION_GET_QUATERNION_PERIOD = 30;
BrickIMU.FUNCTION_ORIENTATION_CALCULATION_ON = 37;
BrickIMU.FUNCTION_ORIENTATION_CALCULATION_OFF = 38;
BrickIMU.FUNCTION_IS_ORIENTATION_CALCULATION_ON = 39;
BrickIMU.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME = 241;
BrickIMU.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickIMU.FUNCTION_RESET = 243;
BrickIMU.FUNCTION_GET_IDENTITY = 255;
BrickIMU.CALIBRATION_TYPE_ACCELEROMETER_GAIN = 0;
BrickIMU.CALIBRATION_TYPE_ACCELEROMETER_BIAS = 1;
BrickIMU.CALIBRATION_TYPE_MAGNETOMETER_GAIN = 2;
BrickIMU.CALIBRATION_TYPE_MAGNETOMETER_BIAS = 3;
BrickIMU.CALIBRATION_TYPE_GYROSCOPE_GAIN = 4;
BrickIMU.CALIBRATION_TYPE_GYROSCOPE_BIAS = 5;

function BrickIMU(uid, ipcon) {
	//Device for sensing acceleration, magnetic field and angular velocity

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickIMU.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickIMU.FUNCTION_GET_ACCELERATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_GET_MAGNETIC_FIELD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_GET_ANGULAR_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_GET_ALL_DATA] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_GET_ORIENTATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_GET_QUATERNION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_GET_IMU_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_LEDS_ON] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickIMU.FUNCTION_LEDS_OFF] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickIMU.FUNCTION_ARE_LEDS_ON] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_SET_ACCELERATION_RANGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickIMU.FUNCTION_GET_ACCELERATION_RANGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_SET_MAGNETOMETER_RANGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickIMU.FUNCTION_GET_MAGNETOMETER_RANGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_SET_CONVERGENCE_SPEED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickIMU.FUNCTION_GET_CONVERGENCE_SPEED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_SET_CALIBRATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickIMU.FUNCTION_GET_CALIBRATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_SET_ACCELERATION_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_GET_ACCELERATION_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_SET_MAGNETIC_FIELD_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_GET_MAGNETIC_FIELD_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_SET_ANGULAR_VELOCITY_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_GET_ANGULAR_VELOCITY_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_SET_ALL_DATA_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_GET_ALL_DATA_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_SET_ORIENTATION_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_GET_ORIENTATION_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_SET_QUATERNION_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_GET_QUATERNION_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.CALLBACK_ACCELERATION] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickIMU.CALLBACK_MAGNETIC_FIELD] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickIMU.CALLBACK_ANGULAR_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickIMU.CALLBACK_ALL_DATA] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickIMU.CALLBACK_ORIENTATION] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickIMU.CALLBACK_QUATERNION] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickIMU.FUNCTION_ORIENTATION_CALCULATION_ON] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickIMU.FUNCTION_ORIENTATION_CALCULATION_OFF] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickIMU.FUNCTION_IS_ORIENTATION_CALCULATION_ON] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMU.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickIMU.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickIMU.CALLBACK_ACCELERATION] = 'h h h';
	this.callbackFormats[BrickIMU.CALLBACK_MAGNETIC_FIELD] = 'h h h';
	this.callbackFormats[BrickIMU.CALLBACK_ANGULAR_VELOCITY] = 'h h h';
	this.callbackFormats[BrickIMU.CALLBACK_ALL_DATA] = 'h h h h h h h h h h';
	this.callbackFormats[BrickIMU.CALLBACK_ORIENTATION] = 'h h h';
	this.callbackFormats[BrickIMU.CALLBACK_QUATERNION] = 'f f f f';

	this.getAcceleration = function(returnCallback, errorCallback) {
		/*
		Returns the calibrated acceleration from the accelerometer for the 
		x, y and z axis in mG (G/1000, 1G = 9.80605m/s²).
		
		If you want to get the acceleration periodically, it is recommended 
		to use the callback :func:`Acceleration` and set the period with 
		:func:`SetAccelerationPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_ACCELERATION, [], '', 'h h h', returnCallback, errorCallback);
	};
	this.getMagneticField = function(returnCallback, errorCallback) {
		/*
		Returns the calibrated magnetic field from the magnetometer for the 
		x, y and z axis in mG (Milligauss or Nanotesla).
		
		If you want to get the magnetic field periodically, it is recommended 
		to use the callback :func:`MagneticField` and set the period with 
		:func:`SetMagneticFieldPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_MAGNETIC_FIELD, [], '', 'h h h', returnCallback, errorCallback);
	};
	this.getAngularVelocity = function(returnCallback, errorCallback) {
		/*
		Returns the calibrated angular velocity from the gyroscope for the 
		x, y and z axis in °/14.375s (you have to divide by 14.375 to
		get the value in °/s).
		
		If you want to get the angular velocity periodically, it is recommended 
		to use the callback :func:`AngularVelocity` and set the period with 
		:func:`SetAngularVelocityPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_ANGULAR_VELOCITY, [], '', 'h h h', returnCallback, errorCallback);
	};
	this.getAllData = function(returnCallback, errorCallback) {
		/*
		Returns the data from :func:`GetAcceleration`, :func:`GetMagneticField` 
		and :func:`GetAngularVelocity` as well as the temperature of the IMU Brick.
		
		The temperature is given in °C/100.
		
		If you want to get the data periodically, it is recommended 
		to use the callback :func:`AllData` and set the period with 
		:func:`SetAllDataPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_ALL_DATA, [], '', 'h h h h h h h h h h', returnCallback, errorCallback);
	};
	this.getOrientation = function(returnCallback, errorCallback) {
		/*
		Returns the current orientation (roll, pitch, yaw) of the IMU Brick as Euler
		angles in one-hundredth degree. Note that Euler angles always experience a
		`gimbal lock <http://en.wikipedia.org/wiki/Gimbal_lock>`__.
		
		We recommend that you use quaternions instead.
		
		The order to sequence in which the orientation values should be applied is 
		roll, yaw, pitch. 
		
		If you want to get the orientation periodically, it is recommended 
		to use the callback :func:`Orientation` and set the period with 
		:func:`SetOrientationPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_ORIENTATION, [], '', 'h h h', returnCallback, errorCallback);
	};
	this.getQuaternion = function(returnCallback, errorCallback) {
		/*
		Returns the current orientation (x, y, z, w) of the IMU as 
		`quaternions <http://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation>`__.
		
		You can go from quaternions to Euler angles with the following formula::
		
		 xAngle = atan2(2*y*w - 2*x*z, 1 - 2*y*y - 2*z*z)
		 yAngle = atan2(2*x*w - 2*y*z, 1 - 2*x*x - 2*z*z)
		 zAngle =  asin(2*x*y + 2*z*w)
		
		This process is not reversible, because of the 
		`gimbal lock <http://en.wikipedia.org/wiki/Gimbal_lock>`__.
		
		It is also possible to calculate independent angles. You can calculate 
		yaw, pitch and roll in a right-handed vehicle coordinate system according to DIN70000
		with::
		
		 yaw   =  atan2(2*x*y + 2*w*z, w*w + x*x - y*y - z*z)
		 pitch = -asin(2*w*y - 2*x*z)
		 roll  = -atan2(2*y*z + 2*w*x, -w*w + x*x + y*y - z*z))
		
		Converting the quaternions to an OpenGL transformation matrix is
		possible with the following formula::
		
		 matrix = [[1 - 2*(y*y + z*z),     2*(x*y - w*z),     2*(x*z + w*y), 0],
		           [    2*(x*y + w*z), 1 - 2*(x*x + z*z),     2*(y*z - w*x), 0],
		           [    2*(x*z - w*y),     2*(y*z + w*x), 1 - 2*(x*x + y*y), 0],
		           [                0,                 0,                 0, 1]]
		
		If you want to get the quaternions periodically, it is recommended 
		to use the callback :func:`Quaternion` and set the period with 
		:func:`SetQuaternionPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_QUATERNION, [], '', 'f f f f', returnCallback, errorCallback);
	};
	this.getIMUTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature of the IMU Brick. The temperature is given in 
		°C/100.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_IMU_TEMPERATURE, [], '', 'h', returnCallback, errorCallback);
	};
	this.ledsOn = function(returnCallback, errorCallback) {
		/*
		Turns the orientation and direction LEDs of the IMU Brick on.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_LEDS_ON, [], '', '', returnCallback, errorCallback);
	};
	this.ledsOff = function(returnCallback, errorCallback) {
		/*
		Turns the orientation and direction LEDs of the IMU Brick off.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_LEDS_OFF, [], '', '', returnCallback, errorCallback);
	};
	this.areLedsOn = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the orientation and direction LEDs of the IMU Brick
		are on, *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_ARE_LEDS_ON, [], '', '?', returnCallback, errorCallback);
	};
	this.setAccelerationRange = function(range, returnCallback, errorCallback) {
		/*
		Not implemented yet.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_SET_ACCELERATION_RANGE, [range], 'B', '', returnCallback, errorCallback);
	};
	this.getAccelerationRange = function(returnCallback, errorCallback) {
		/*
		Not implemented yet.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_ACCELERATION_RANGE, [], '', 'B', returnCallback, errorCallback);
	};
	this.setMagnetometerRange = function(range, returnCallback, errorCallback) {
		/*
		Not implemented yet.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_SET_MAGNETOMETER_RANGE, [range], 'B', '', returnCallback, errorCallback);
	};
	this.getMagnetometerRange = function(returnCallback, errorCallback) {
		/*
		Not implemented yet.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_MAGNETOMETER_RANGE, [], '', 'B', returnCallback, errorCallback);
	};
	this.setConvergenceSpeed = function(speed, returnCallback, errorCallback) {
		/*
		Sets the convergence speed of the IMU Brick in °/s. The convergence speed 
		determines how the different sensor measurements are fused.
		
		If the orientation of the IMU Brick is off by 10° and the convergence speed is 
		set to 20°/s, it will take 0.5s until the orientation is corrected. However,
		if the correct orientation is reached and the convergence speed is too high,
		the orientation will fluctuate with the fluctuations of the accelerometer and
		the magnetometer.
		
		If you set the convergence speed to 0, practically only the gyroscope is used
		to calculate the orientation. This gives very smooth movements, but errors of the
		gyroscope will not be corrected. If you set the convergence speed to something
		above 500, practically only the magnetometer and the accelerometer are used to
		calculate the orientation. In this case the movements are abrupt and the values
		will fluctuate, but there won't be any errors that accumulate over time.
		
		In an application with high angular velocities, we recommend a high convergence
		speed, so the errors of the gyroscope can be corrected fast. In applications with
		only slow movements we recommend a low convergence speed. You can change the
		convergence speed on the fly. So it is possible (and recommended) to increase 
		the convergence speed before an abrupt movement and decrease it afterwards 
		again.
		
		You might want to play around with the convergence speed in the Brick Viewer to
		get a feeling for a good value for your application.
		
		The default value is 30.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_SET_CONVERGENCE_SPEED, [speed], 'H', '', returnCallback, errorCallback);
	};
	this.getConvergenceSpeed = function(returnCallback, errorCallback) {
		/*
		Returns the convergence speed as set by :func:`SetConvergenceSpeed`.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_CONVERGENCE_SPEED, [], '', 'H', returnCallback, errorCallback);
	};
	this.setCalibration = function(typ, data, returnCallback, errorCallback) {
		/*
		There are several different types that can be calibrated:
		
		.. csv-table::
		 :header: "Type", "Description", "Values"
		 :widths: 10, 30, 110
		
		 "0",    "Accelerometer Gain", "``[mul x, mul y, mul z, div x, div y, div z, 0, 0, 0, 0]``"
		 "1",    "Accelerometer Bias", "``[bias x, bias y, bias z, 0, 0, 0, 0, 0, 0, 0]``"
		 "2",    "Magnetometer Gain",  "``[mul x, mul y, mul z, div x, div y, div z, 0, 0, 0, 0]``"
		 "3",    "Magnetometer Bias",  "``[bias x, bias y, bias z, 0, 0, 0, 0, 0, 0, 0]``"
		 "4",    "Gyroscope Gain",     "``[mul x, mul y, mul z, div x, div y, div z, 0, 0, 0, 0]``"
		 "5",    "Gyroscope Bias",     "``[bias xl, bias yl, bias zl, temp l, bias xh, bias yh, bias zh, temp h, 0, 0]``"
		
		The calibration via gain and bias is done with the following formula::
		
		 new_value = (bias + orig_value) * gain_mul / gain_div
		
		If you really want to write your own calibration software, please keep
		in mind that you first have to undo the old calibration (set bias to 0 and
		gain to 1/1) and that you have to average over several thousand values
		to obtain a usable result in the end.
		
		The gyroscope bias is highly dependent on the temperature, so you have to
		calibrate the bias two times with different temperatures. The values ``xl``,
		``yl``, ``zl`` and ``temp l`` are the bias for ``x``, ``y``, ``z`` and the
		corresponding temperature for a low temperature. The values ``xh``, ``yh``,
		``zh`` and ``temp h`` are the same for a high temperatures. The temperature
		difference should be at least 5°C. If you have a temperature where the
		IMU Brick is mostly used, you should use this temperature for one of the
		sampling points.
		
		.. note::
		 We highly recommend that you use the Brick Viewer to calibrate your
		 IMU Brick.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_SET_CALIBRATION, [typ, data], 'B h10', '', returnCallback, errorCallback);
	};
	this.getCalibration = function(typ, returnCallback, errorCallback) {
		/*
		Returns the calibration for a given type as set by :func:`SetCalibration`.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_CALIBRATION, [typ], 'B', 'h10', returnCallback, errorCallback);
	};
	this.setAccelerationPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`Acceleration` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_SET_ACCELERATION_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getAccelerationPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetAccelerationPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_ACCELERATION_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setMagneticFieldPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`MagneticField` callback is triggered
		periodically. A value of 0 turns the callback off.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_SET_MAGNETIC_FIELD_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getMagneticFieldPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetMagneticFieldPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_MAGNETIC_FIELD_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setAngularVelocityPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`AngularVelocity` callback is triggered
		periodically. A value of 0 turns the callback off.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_SET_ANGULAR_VELOCITY_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getAngularVelocityPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetAngularVelocityPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_ANGULAR_VELOCITY_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setAllDataPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`AllData` callback is triggered
		periodically. A value of 0 turns the callback off.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_SET_ALL_DATA_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getAllDataPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetAllDataPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_ALL_DATA_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setOrientationPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`Orientation` callback is triggered
		periodically. A value of 0 turns the callback off.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_SET_ORIENTATION_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getOrientationPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetOrientationPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_ORIENTATION_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setQuaternionPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`Quaternion` callback is triggered
		periodically. A value of 0 turns the callback off.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_SET_QUATERNION_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getQuaternionPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetQuaternionPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_QUATERNION_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.orientationCalculationOn = function(returnCallback, errorCallback) {
		/*
		Turns the orientation calculation of the IMU Brick on.
		
		As default the calculation is on.
		
		.. versionadded:: 2.0.2~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_ORIENTATION_CALCULATION_ON, [], '', '', returnCallback, errorCallback);
	};
	this.orientationCalculationOff = function(returnCallback, errorCallback) {
		/*
		Turns the orientation calculation of the IMU Brick off.
		
		If the calculation is off, :func:`GetOrientation` will return
		the last calculated value until the calculation is turned on again.
		
		The trigonometric functions that are needed to calculate the orientation 
		are very expensive. We recommend to turn the orientation calculation
		off if the orientation is not needed, to free calculation time for the
		sensor fusion algorithm.
		
		As default the calculation is on.
		
		.. versionadded:: 2.0.2~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_ORIENTATION_CALCULATION_OFF, [], '', '', returnCallback, errorCallback);
	};
	this.isOrientationCalculationOn = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the orientation calculation of the IMU Brick
		is on, *false* otherwise.
		
		.. versionadded:: 2.0.2~(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_IS_ORIENTATION_CALCULATION_ON, [], '', '?', returnCallback, errorCallback);
	};
	this.getProtocol1BrickletName = function(port, returnCallback, errorCallback) {
		/*
		Returns the firmware and protocol version and the name of the Bricklet for a
		given port.
		
		This functions sole purpose is to allow automatic flashing of v1.x.y Bricklet
		plugins.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME, [port], 'c', 'B B3 s40', returnCallback, errorCallback);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature in °C/10 as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has an
		accuracy of +-15%. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Brick. Calling this function
		on a Brick inside of a stack will reset the whole stack.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_RESET, [], '', '', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickIMU;
