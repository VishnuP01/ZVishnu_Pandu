sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("VoiceText.VoiceText.controller.View1", {
		onInit: function () {
			alert("123");
			alert("hi");
			debugger; 
			if('webkitSpeechRecognition' in window){
        	   this.recognition = new webkitSpeechRecognition() ;
    	  }else{
        	  this.recognition = new SpeechRecognition();
        	}
			 this.recognition.continuous = true;
			 this.recognition.interimResults = false;
		 this.recognition.lang = 'en-IN';
		 this.recognition.onresult = function(event) {
            var vFinal = "";
            for (var i = event.resultIndex; i<event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    vFinal = event.results[i][0].transcript;
                }
            }
            if (vFinal != "") {
                alert(vFinal);
            }
		 }

		},
		fnPressMic:function(obj){
			this.recognition.start();
			
		}
	});
});
