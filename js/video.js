var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

	window.addEventListener("load", function() {
		video = document.querySelector('video');
		video.autoplay = false;
		video.loop = false;
	});

document.querySelector("#play").addEventListener("click", function() {
    console.log("The video is now playing");
    video.play();
    updateVolumeInfo();
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("The video is now paused");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate *= 0.9;
    console.log("The video speed is now updated to be slower at " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate /= 0.9;
    console.log("The video speed is now updated to be faster at " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    if (video.currentTime + 10 > video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime += 10;
    }
    console.log("New track position fo the video is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted) {
        video.muted = false;
        this.textContent = "Mute";
		console.log("The video is now unmuted")
    } else {
        video.muted = true;
        this.textContent = "Unmute";
		console.log("The video is now muted")
    }
});

document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    updateVolumeInfo();
    console.log("The current volume level is " + video.volume);
});

function updateVolumeInfo() {
    var uservolume = document.querySelector('#volume');
     uservolume.textContent = Math.round(video.volume * 100) + "%";
}

document.querySelector("#vintage").addEventListener("click", function() {
    if (!video.classList.contains('oldSchool')) {
        video.classList.add('oldSchool');
	console.log("The video player is now in old school style");
    }
});

document.querySelector("#orig").addEventListener("click", function() {
    if (video.classList.contains('oldSchool')) {
        video.classList.remove('oldSchool');
	console.log("The video player is now in original style");
    }
});
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });