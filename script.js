document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById('background-audio');
    var toggleButton = document.getElementById('toggle-sound');
    var isPlaying = false;

    // Play the audio when the page loads
    audio.play();
    isPlaying = true;
    toggleButton.textContent = "Pause Sound";

    // Toggle sound on button click
    toggleButton.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            toggleButton.textContent = "Play Sound";
        } else {
            audio.play();
            toggleButton.textContent = "Pause Sound";
        }
        isPlaying = !isPlaying;
    });
});
