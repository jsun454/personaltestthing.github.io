var time = Math.floor(Math.random() * 6) + 5;
console.log("hi");
var messageVisible = false;
/*document.getElementById("countdownMessage").innerHTML = "Time until it has been " + time + " seconds since countdown began: ";
*/
function countdown() {
	if(!messageVisible) {
		document.getElementById("countdownMessage").innerHTML = "Time until it has been " + time + " seconds since countdown began: ";
	}
	postMessage(time--);
	if(time == 0) {
		messageVisible = false;
	}
	setTimeout("countdown()", 1000);
}

countdown();
