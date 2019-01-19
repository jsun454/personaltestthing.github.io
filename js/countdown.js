var time = Math.floor(Math.random() * 6) + 5;
document.getElementById("countdownMessage").innerHTML = "Time until it has been " + time + " seconds since countdown began: ";

function countdown() {
	console.log("What");
	postMessage(time);
	if(time > 0) {
		time--;
		console.log("2");
	}
	setTimeout("countdown()", 1000);
}

countdown();
