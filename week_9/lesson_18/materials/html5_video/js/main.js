window.onload = function () {
    var video = document.getElementById("video"),
        playButton = document.getElementById("video_button"),
        videoPlaying = false,
        volumeUp = document.getElementById("video_volume_up"),
        volumeDown = document.getElementById("video_volume_down");


    playButton.addEventListener("click", function(event) {
        event.preventDefault();

        if (videoPlaying) {
            video.pause();
            videoPlaying = false;
            updateButton("Play");
        }

        else {
            video.play();
            videoPlaying = true;
            updateButton("Pause");
        }
    });

    volumeUp.addEventListener("click", function(event) {
        event.preventDefault();
        video.volume += 0.1;
    });

    volumeDown.addEventListener("click", function(event) {
        event.preventDefault();
        video.volume -= 0.1;
    });
};

function updateButton(text) {
    document.getElementById("video_button").innerHTML = text;
}




