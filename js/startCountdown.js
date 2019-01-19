var w;
function startCountdown() {
	document.getElementById("hidden").style.display = "block";
	if(typeof(Worker) !== "undefined") {
		if(typeof(w) == "undefined") {
			w = new Worker("js/countdown.js");
		}
		w.onmessage = function(event) {;
			document.getElementById("countdown").innerHTML = event.data;
			if(event.data == 0) {
				w.terminate();
				w = undefined;
			}
		};
	} else {
		document.getElementById("countdownMessage").innerHTML = "Nobody loves you";
	}
}
