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

BrickletGPS.DEVICE_IDENTIFIER = 222;
BrickletGPS.CALLBACK_COORDINATES = 17;
BrickletGPS.CALLBACK_STATUS = 18;
BrickletGPS.CALLBACK_ALTITUDE = 19;
BrickletGPS.CALLBACK_MOTION = 20;
BrickletGPS.CALLBACK_DATE_TIME = 21;
BrickletGPS.FUNCTION_GET_COORDINATES = 1;
BrickletGPS.FUNCTION_GET_STATUS = 2;
BrickletGPS.FUNCTION_GET_ALTITUDE = 3;
BrickletGPS.FUNCTION_GET_MOTION = 4;
BrickletGPS.FUNCTION_GET_DATE_TIME = 5;
BrickletGPS.FUNCTION_RESTART = 6;
BrickletGPS.FUNCTION_SET_COORDINATES_CALLBACK_PERIOD = 7;
BrickletGPS.FUNCTION_GET_COORDINATES_CALLBACK_PERIOD = 8;
BrickletGPS.FUNCTION_SET_STATUS_CALLBACK_PERIOD = 9;
BrickletGPS.FUNCTION_GET_STATUS_CALLBACK_PERIOD = 10;
BrickletGPS.FUNCTION_SET_ALTITUDE_CALLBACK_PERIOD = 11;
BrickletGPS.FUNCTION_GET_ALTITUDE_CALLBACK_PERIOD = 12;
BrickletGPS.FUNCTION_SET_MOTION_CALLBACK_PERIOD = 13;
BrickletGPS.FUNCTION_GET_MOTION_CALLBACK_PERIOD = 14;
BrickletGPS.FUNCTION_SET_DATE_TIME_CALLBACK_PERIOD = 15;
BrickletGPS.FUNCTION_GET_DATE_TIME_CALLBACK_PERIOD = 16;
BrickletGPS.FUNCTION_GET_IDENTITY = 255;
BrickletGPS.FIX_NO_FIX = 1;
BrickletGPS.FIX_2D_FIX = 2;
BrickletGPS.FIX_3D_FIX = 3;
BrickletGPS.RESTART_TYPE_HOT_START = 0;
BrickletGPS.RESTART_TYPE_WARM_START = 1;
BrickletGPS.RESTART_TYPE_COLD_START = 2;
BrickletGPS.RESTART_TYPE_FACTORY_RESET = 3;

function BrickletGPS(uid, ipcon) {
	//Device for receiving GPS position

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletGPS.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletGPS.FUNCTION_GET_COORDINATES] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_GET_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_GET_ALTITUDE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_GET_MOTION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_GET_DATE_TIME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_RESTART] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletGPS.FUNCTION_SET_COORDINATES_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_GET_COORDINATES_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_SET_STATUS_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_GET_STATUS_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_SET_ALTITUDE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_GET_ALTITUDE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_SET_MOTION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_GET_MOTION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_SET_DATE_TIME_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_GET_DATE_TIME_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPS.CALLBACK_COORDINATES] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletGPS.CALLBACK_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletGPS.CALLBACK_ALTITUDE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletGPS.CALLBACK_MOTION] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletGPS.CALLBACK_DATE_TIME] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletGPS.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletGPS.CALLBACK_COORDINATES] = 'I c I c H H H H';
	this.callbackFormats[BrickletGPS.CALLBACK_STATUS] = 'B B B';
	this.callbackFormats[BrickletGPS.CALLBACK_ALTITUDE] = 'I I';
	this.callbackFormats[BrickletGPS.CALLBACK_MOTION] = 'I I';
	this.callbackFormats[BrickletGPS.CALLBACK_DATE_TIME] = 'I I';

	this.getCoordinates = function(returnCallback, errorCallback) {
		/*
		Returns the GPS coordinates. Latitude and longitude are given in the
		``DD.dddddd°`` format, the value 57123468 means 57.123468°.
		The parameter ``ns`` and ``ew`` are the cardinal directions for
		latitude and longitude. Possible values for ``ns`` and ``ew`` are 'N', 'S', 'E'
		and 'W' (north, south, east and west).
		
		PDOP, HDOP and VDOP are the dilution of precision (DOP) values. They specify
		the additional multiplicative effect of GPS satellite geometry on GPS 
		precision. See 
		`here <http://en.wikipedia.org/wiki/Dilution_of_precision_(GPS)>`__
		for more information. The values are give in hundredths.
		
		EPE is the "Estimated Position Error". The EPE is given in cm. This is not the
		absolute maximum error, it is the error with a specific confidence. See
		`here <http://www.nps.gov/gis/gps/WhatisEPE.html>`__ for more information.
		
		This data is only valid if there is currently a fix as indicated by
		:func:`GetStatus`.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_COORDINATES, [], '', 'I c I c H H H H', returnCallback, errorCallback);
	};
	this.getStatus = function(returnCallback, errorCallback) {
		/*
		Returns the current fix status, the number of satellites that are in view and
		the number of satellites that are currently used.
		
		Possible fix status values can be:
		
		.. csv-table::
		 :header: "Value", "Description"
		 :widths: 10, 100
		
		 "1", "No Fix, :func:`GetCoordinates` and :func:`GetAltitude` return invalid data"
		 "2", "2D Fix, only :func:`GetCoordinates` returns valid data"
		 "3", "3D Fix, :func:`GetCoordinates` and :func:`GetAltitude` return valid data"
		
		There is also a :ref:`blue LED <gps_bricklet_fix_led>` on the Bricklet that
		indicates the fix status.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_STATUS, [], '', 'B B B', returnCallback, errorCallback);
	};
	this.getAltitude = function(returnCallback, errorCallback) {
		/*
		Returns the current altitude and corresponding geoidal separation.
		
		Both values are given in cm.
		
		This data is only valid if there is currently a fix as indicated by
		:func:`GetStatus`.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_ALTITUDE, [], '', 'I I', returnCallback, errorCallback);
	};
	this.getMotion = function(returnCallback, errorCallback) {
		/*
		Returns the current course and speed. Course is given in hundredths degree
		and speed is given in hundredths km/h. A course of 0° means the Bricklet is
		traveling north bound and 90° means it is traveling east bound.
		
		Please note that this only returns useful values if an actual movement
		is present.
		
		This data is only valid if there is currently a fix as indicated by
		:func:`GetStatus`.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_MOTION, [], '', 'I I', returnCallback, errorCallback);
	};
	this.getDateTime = function(returnCallback, errorCallback) {
		/*
		Returns the current date and time. The date is
		given in the format ``ddmmyy`` and the time is given
		in the format ``hhmmss.sss``. For example, 140713 means
		14.05.13 as date and 195923568 means 19:59:23.568 as time.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_DATE_TIME, [], '', 'I I', returnCallback, errorCallback);
	};
	this.restart = function(restartType, returnCallback, errorCallback) {
		/*
		Restarts the GPS Bricklet, the following restart types are available:
		
		.. csv-table::
		 :header: "Value", "Description"
		 :widths: 10, 100
		
		 "0", "Hot start (use all available data in the NV store)"
		 "1", "Warm start (don't use ephemeris at restart)"
		 "2", "Cold start (don't use time, position, almanacs and ephemeris at restart)"
		 "3", "Factory reset (clear all system/user configurations at restart)"
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_RESTART, [restartType], 'B', '', returnCallback, errorCallback);
	};
	this.setCoordinatesCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`Coordinates` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`Coordinates` is only triggered if the coordinates changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_SET_COORDINATES_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getCoordinatesCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetCoordinatesCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_COORDINATES_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setStatusCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`Status` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`Status` is only triggered if the status changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_SET_STATUS_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getStatusCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetStatusCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_STATUS_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setAltitudeCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`Altitude` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`Altitude` is only triggered if the altitude changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_SET_ALTITUDE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getAltitudeCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetAltitudeCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_ALTITUDE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setMotionCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`Motion` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`Motion` is only triggered if the motion changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_SET_MOTION_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getMotionCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetMotionCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_MOTION_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setDateTimeCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`DateTime` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`DateTime` is only triggered if the date or time changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_SET_DATE_TIME_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getDateTimeCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetDateTimeCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_DATE_TIME_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletGPS;
