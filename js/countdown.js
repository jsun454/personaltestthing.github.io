var time = Math.floor(Math.random() * 6) + 5;
document.getElementById("countdownMessage").innerHTML = "Time until it has been " + time + " seconds since countdown began: ";

function countdown() {
	postMessage(time);
	if(time > 0) {
		time--;
	}
	setTimeout("countdown()", 1000);
}

countdown();