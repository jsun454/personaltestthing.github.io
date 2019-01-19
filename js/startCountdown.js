var w;
function startCountdown() {
	document.getElementById("hidden").style.display = "block";
	if(typeof(Worker) !== "undefined") {
		if(typeof(w) == "undefined") {
			try {
				w = new Worker("js/countdown.js");
			} catch(err) {
				console.log(`Error: ${err.message}`);
				document.getElementById("countdown").innerHTML = 0;
				return;
			}
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
