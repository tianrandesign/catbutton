var animation = lottie.loadAnimation({
  container: document.getElementById('lottie'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data.json'
});

function sleep() {
	"use strict";
    animation.playSegments([181, 300], true);
	document.getElementById("close").style.display = "none";
	document.getElementById("open").style.display = "inline";
//	about hide the btn after click> https://www.w3schools.com/jsref/prop_style_display.asp
}
function sleep_hover() {
	"use strict";
    animation.playSegments([0, 180], true);
//	playSegments allow for infinite looping if the loop param is set to true
}
//function sleep_out() {
//	"use strict";
//    animation.goToAndStop(0, true);
////	playSegments allow for infinite looping if the loop param is set to true
//}


function wake() {
	"use strict";
    animation.playSegments([0, 300], true); 
//	say 0 is a, 300is b
	animation.goToAndPlay(300, true);
//	300 comes from b-a
//	If you're at the first frame and set direction negative and loop is false it will stay on the first frame.
//You should set goToAndStop(lastFrame) for example before playing.
	animation.setDirection(-1);
	document.getElementById("close").style.display = "inline";
	document.getElementById("open").style.display = "none";
}

document.querySelector('.sleep').addEventListener('click', sleep);
document.querySelector('.sleep').addEventListener('mouseover', sleep_hover);
//document.querySelector('.sleep').addEventListener('mouseout', sleep_out);
document.querySelector('.wake').addEventListener('click', wake);