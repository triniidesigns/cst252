/**
 Author:    Juan Trinidad
 Created:   04.17.2021
 License:   Public Domain
 **/

$(document).ready(function(){
// Init ScrollMagic
var controller = new ScrollMagic.Controller();

//build a scene
var ourScene = new ScrollMagic.Scene({
	triggerElement: '.tool'
})
.setClassToggle('.tool', '.fade-in');
.addTo(controller);
});
