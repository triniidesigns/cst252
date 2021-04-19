/**
 Author:    Juan Trinidad
 Created:   04.17.2021
 License:   Public Domain
 **/

$(document).ready(function(){
// Init ScrollMagic
var controller = new ScrollMagic.Controller();

//build a scene
var ourScene = new Scrollmagic.Scene({
	triggerElement: '.tool'
)}
.setClassToggle('.tool', 'fade-in')
.addIndicators()
.addTo(controller);
});
