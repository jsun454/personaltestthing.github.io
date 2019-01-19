var time = Math.floor(Math.random() * 6) + 5;
var messageVisible = false;

function countdown() {
	if(!messageVisible) {
		postMessage("Time until it has been " + time + " seconds since countdown began: ");
		messageVisible = true;
	}
	postMessage(time--);
	setTimeout("countdown()", 1000);
}

countdown();
