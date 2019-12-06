/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"VoiceText/VoiceText/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});