var time = Math.floor(Math.random() * 6) + 5;
var init = false;
function countdown() {
	if(!init) {
		document.getElementById("countdownMessage").innerHTML = "Time until it has been " + time + " seconds since countdown began: ";
		init = true;
	}
	postMessage(time);
	if(time > 0) {
		time--;
	}
	setTimeout("countdown()", 1000);
}

countdown();
