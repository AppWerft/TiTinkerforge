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

BrickletNFCRFID.DEVICE_IDENTIFIER = 246;
BrickletNFCRFID.CALLBACK_STATE_CHANGED = 8;
BrickletNFCRFID.FUNCTION_REQUEST_TAG_ID = 1;
BrickletNFCRFID.FUNCTION_GET_TAG_ID = 2;
BrickletNFCRFID.FUNCTION_GET_STATE = 3;
BrickletNFCRFID.FUNCTION_AUTHENTICATE_MIFARE_CLASSIC_PAGE = 4;
BrickletNFCRFID.FUNCTION_WRITE_PAGE = 5;
BrickletNFCRFID.FUNCTION_REQUEST_PAGE = 6;
BrickletNFCRFID.FUNCTION_GET_PAGE = 7;
BrickletNFCRFID.FUNCTION_GET_IDENTITY = 255;
BrickletNFCRFID.TAG_TYPE_MIFARE_CLASSIC = 0;
BrickletNFCRFID.TAG_TYPE_TYPE1 = 1;
BrickletNFCRFID.TAG_TYPE_TYPE2 = 2;
BrickletNFCRFID.STATE_INITIALIZATION = 0;
BrickletNFCRFID.STATE_IDLE = 128;
BrickletNFCRFID.STATE_ERROR = 192;
BrickletNFCRFID.STATE_REQUEST_TAG_ID = 2;
BrickletNFCRFID.STATE_REQUEST_TAG_ID_READY = 130;
BrickletNFCRFID.STATE_REQUEST_TAG_ID_ERROR = 194;
BrickletNFCRFID.STATE_AUTHENTICATING_MIFARE_CLASSIC_PAGE = 3;
BrickletNFCRFID.STATE_AUTHENTICATING_MIFARE_CLASSIC_PAGE_READY = 131;
BrickletNFCRFID.STATE_AUTHENTICATING_MIFARE_CLASSIC_PAGE_ERROR = 195;
BrickletNFCRFID.STATE_WRITE_PAGE = 4;
BrickletNFCRFID.STATE_WRITE_PAGE_READY = 132;
BrickletNFCRFID.STATE_WRITE_PAGE_ERROR = 196;
BrickletNFCRFID.STATE_REQUEST_PAGE = 5;
BrickletNFCRFID.STATE_REQUEST_PAGE_READY = 133;
BrickletNFCRFID.STATE_REQUEST_PAGE_ERROR = 197;
BrickletNFCRFID.KEY_A = 0;
BrickletNFCRFID.KEY_B = 1;

function BrickletNFCRFID(uid, ipcon) {
	//Device that can read and write NFC and RFID tags

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletNFCRFID.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletNFCRFID.FUNCTION_REQUEST_TAG_ID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletNFCRFID.FUNCTION_GET_TAG_ID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFCRFID.FUNCTION_GET_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFCRFID.FUNCTION_AUTHENTICATE_MIFARE_CLASSIC_PAGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletNFCRFID.FUNCTION_WRITE_PAGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletNFCRFID.FUNCTION_REQUEST_PAGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletNFCRFID.FUNCTION_GET_PAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFCRFID.CALLBACK_STATE_CHANGED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletNFCRFID.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletNFCRFID.CALLBACK_STATE_CHANGED] = 'B ?';

	this.requestTagID = function(tagType, returnCallback, errorCallback) {
		/*
		To read or write a tag that is in proximity of the NFC/RFID Bricklet you 
		first have to call this function with the expected tag type as parameter.
		It is no problem if you don't know the tag type. You can cycle through 
		the available tag types until the tag gives an answer to the request.
		
		Current the following tag types are supported:
		
		* Mifare Classic
		* NFC Forum Type 1
		* NFC Forum Type 2
		
		After you call :func:`RequestTagID` the NFC/RFID Bricklet will try to read 
		the tag ID from the tag. After this process is done the state will change.
		You can either register the :func:`StateChanged` callback or you can poll
		:func:`GetState` to find out about the state change.
		
		If the state changes to *RequestTagIDError* it means that either there was 
		no tag present or that the tag is of an incompatible type. If the state 
		changes to *RequestTagIDReady* it means that a compatible tag was found 
		and that the tag ID could be read out. You can now get the tag ID by
		calling :func:`GetTagID`.
		
		If two tags are in the proximity of the NFC/RFID Bricklet, this
		function will cycle through the tags. To select a specific tag you have
		to call :func:`RequestTagID` until the correct tag id is found.
		
		In case of any *Error* state the selection is lost and you have to
		start again by calling :func:`RequestTagID`.
		*/
		this.ipcon.sendRequest(this, BrickletNFCRFID.FUNCTION_REQUEST_TAG_ID, [tagType], 'B', '', returnCallback, errorCallback);
	};
	this.getTagID = function(returnCallback, errorCallback) {
		/*
		Returns the tag type, tag ID and the length of the tag ID 
		(4 or 7 bytes are possible length). This function can only be called if the
		NFC/RFID is currently in one of the *Ready* states. The returned ID
		is the ID that was saved through the last call of :func:`RequestTagID`.
		
		To get the tag ID of a tag the approach is as follows:
		
		* Call :func:`RequestTagID`
		* Wait for state to change to *RequestTagIDReady* (see :func:`GetState` or :func:`StateChanged`)
		* Call :func:`GetTagID`
		*/
		this.ipcon.sendRequest(this, BrickletNFCRFID.FUNCTION_GET_TAG_ID, [], '', 'B B B7', returnCallback, errorCallback);
	};
	this.getState = function(returnCallback, errorCallback) {
		/*
		Returns the current state of the NFC/RFID Bricklet.
		
		On startup the Bricklet will be in the *Initialization* state. The initialization
		will only take about 20ms. After that it changes to *Idle*.
		
		The functions of this Bricklet can be called in the *Idle* state and all of
		the *Ready* and *Error* states.
		
		Example: If you call :func:`RequestPage`, the state will change to 
		*RequestPage* until the reading of the page is finished. Then it will change
		to either *RequestPageReady* if it worked or to *RequestPageError* if it
		didn't. If the request worked you can get the page by calling :func:`GetPage`.
		
		The same approach is used analogously for the other API functions.
		*/
		this.ipcon.sendRequest(this, BrickletNFCRFID.FUNCTION_GET_STATE, [], '', 'B ?', returnCallback, errorCallback);
	};
	this.authenticateMifareClassicPage = function(page, keyNumber, key, returnCallback, errorCallback) {
		/*
		Mifare Classic tags use authentication. If you want to read from or write to
		a Mifare Classic page you have to authenticate it beforehand.
		Each page can be authenticated with two keys (A and B). A new Mifare Classic
		tag that has not yet been written to can can be accessed with key number A
		and the default key *[0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]*.
		
		The approach to read or write a Mifare Classic page is as follows:
		
		* Call :func:`RequestTagID`
		* Wait for state to change to *RequestTagIDReady* (see :func:`GetState` or :func:`StateChanged`)
		* Call :func:`GetTagID` and check if tag ID is correct
		* Call :func:`AuthenticateMifareClassicPage` with page and key for the page
		* Wait for state to change to *AuthenticatingMifareClassicPageReady*
		* Call :func:`RequestPage` or :func`WritePage` to read/write page
		*/
		this.ipcon.sendRequest(this, BrickletNFCRFID.FUNCTION_AUTHENTICATE_MIFARE_CLASSIC_PAGE, [page, keyNumber, key], 'H B B6', '', returnCallback, errorCallback);
	};
	this.writePage = function(page, data, returnCallback, errorCallback) {
		/*
		Writes 16 bytes starting from the given page. How many pages are written
		depends on the tag type. The page sizes are as follows:
		
		* Mifare Classic page size: 16 byte (1 page is written)
		* NFC Forum Type 1 page size: 8 byte (2 pages are written)
		* NFC Forum Type 2 page size: 4 byte (4 pages are written)
		
		The general approach for writing to a tag is as follows:
		
		* Call :func:`RequestTagID`
		* Wait for state to change to *RequestTagIDReady* (see :func:`GetState` or :func:`StateChanged`)
		* Call :func:`GetTagID` and check if tag ID is correct
		* Call :func:`WritePage` with page number and data
		* Wait for state to change to *WritePageReady*
		
		If you use a Mifare Classic tag you have to authenticate a page before you
		can write to it. See :func:`AuthenticateMifareClassicPage`.
		*/
		this.ipcon.sendRequest(this, BrickletNFCRFID.FUNCTION_WRITE_PAGE, [page, data], 'H B16', '', returnCallback, errorCallback);
	};
	this.requestPage = function(page, returnCallback, errorCallback) {
		/*
		Reads 16 bytes starting from the given page and stores them into a buffer. 
		The buffer can then be read out with :func:`GetPage`.
		How many pages are read depends on the tag type. The page sizes are 
		as follows:
		
		* Mifare Classic page size: 16 byte (one page is read)
		* NFC Forum Type 1 page size: 8 byte (two pages are read)
		* NFC Forum Type 2 page size: 4 byte (four pages are read)
		
		The general approach for reading a tag is as follows:
		
		* Call :func:`RequestTagID`
		* Wait for state to change to *RequestTagIDReady* (see :func:`GetState` or :func:`StateChanged`)
		* Call :func:`GetTagID` and check if tag ID is correct
		* Call :func:`RequestPage` with page number
		* Wait for state to change to *RequestPageReady*
		* Call :func:`GetPage` to retrieve the page from the buffer
		
		If you use a Mifare Classic tag you have to authenticate a page before you
		can read it. See :func:`AuthenticateMifareClassicPage`.
		*/
		this.ipcon.sendRequest(this, BrickletNFCRFID.FUNCTION_REQUEST_PAGE, [page], 'H', '', returnCallback, errorCallback);
	};
	this.getPage = function(returnCallback, errorCallback) {
		/*
		Returns 16 bytes of data from an internal buffer. To fill the buffer
		with specific pages you have to call :func:`RequestPage` beforehand.
		*/
		this.ipcon.sendRequest(this, BrickletNFCRFID.FUNCTION_GET_PAGE, [], '', 'B16', returnCallback, errorCallback);
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
		this.ipcon.sendRequest(this, BrickletNFCRFID.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletNFCRFID;
