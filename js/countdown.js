var time = Math.floor(Math.random() * 6) + 5;

function countdown() {
	postMessage(time--);
	setTimeout("countdown()", 1000);
}

countdown();
