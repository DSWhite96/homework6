var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var vol;
	vol = video.volume * 100;
	document.getElementById("volume").innerHTML = vol + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate /= 1.10;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.10;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.ended) {
		video.play();
	}
	else {
		var skipped_time;
		skipped_time = video.currentTime + 5;
		if (skipped_time > video.duration) {
			video.currentTime = 0;
		}
		else {
			video.currentTime += 5;
		}
	}
	console.log("Current location " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	var button;
	button = document.querySelector("#mute");
	if (button.innerHTML== "Mute") {
		video.muted = true;
		button.innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		button.innerHTML = "Mute";
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	var new_vol;
	new_vol = this.value;
	video.volume = new_vol / 100.0;
	document.getElementById("volume").innerHTML = new_vol + "%";
});

document.querySelector("#old").addEventListener("click", function() {
	document.getElementById("myVideo").className = "oldTime";
});

document.querySelector("#original").addEventListener("click", function() {
	document.getElementById("myVideo").className = null;
});