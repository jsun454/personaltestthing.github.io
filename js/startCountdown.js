var w;
function startCountdown() {
	console.log("test");
	document.getElementById("hidden").style.display = "block";
	if(typeof(Worker) !== "undefined") {
		if(typeof(w) == "undefined") {
			w = new Worker("js/countdown.js");
		}
		w.onmessage = function(event) {
			if(typeof(event.data) == "string") {
				document.getElementById("countdownMessage").innerHTML = event.data;
			} else {
				document.getElementById("countdown").innerHTML = event.data;
				if(event.data == 0) {
					w.terminate();
					w = undefined;
				}
			}
		};
	} else {
		document.getElementById("countdownMessage").innerHTML = "Nobody loves you";
	}
}
