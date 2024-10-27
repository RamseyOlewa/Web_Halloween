// spooky-alarm.js

document.getElementById("startTimer").addEventListener("click", function () {
  const timerInput = document.getElementById("timer").value;
  const timerDisplay = document.getElementById("timerDisplay");
  const alarmMessage = document.getElementById("alarmMessage");
  const spookySound = document.getElementById("spookySound");
  const horrorImagesContainer = document.getElementById("horrorImages");

  let timeRemaining = parseInt(timerInput);

  if (!timeRemaining || timeRemaining <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  timerDisplay.classList.remove("hidden");
  alarmMessage.classList.add("hidden");
  timerDisplay.textContent = formatTime(timeRemaining);
  horrorImagesContainer.classList.add("hidden"); // Hide horror images initially

  const countdown = setInterval(() => {
    timeRemaining--;

    if (timeRemaining < 0) {
      clearInterval(countdown);
      spookySound.play(); // Play spooky sound
      alarmMessage.textContent = "👻 Time's up! 👻";
      alarmMessage.classList.remove("hidden");
      timerDisplay.classList.add("hidden");
      showHorrorImages(); // Show horror images when time is up
    } else {
      timerDisplay.textContent = formatTime(timeRemaining);
    }
  }, 1000); // Update every second
});

// Function to show horror images with animations
function showHorrorImages() {
  const horrorImagesContainer = document.getElementById("horrorImages");
  horrorImagesContainer.classList.remove("hidden"); // Show the container of horror images

  const horrorImages = document.querySelectorAll(".horror-image");
  let displayDuration = 5000; // Duration to display images in milliseconds
  let interval = 1000; // Interval between images in milliseconds
  let currentImageIndex = 0;

  const showNextImage = () => {
    if (currentImageIndex < horrorImages.length) {
      const img = horrorImages[currentImageIndex];
      img.classList.add("animate-in"); // Add in animation
      img.src = img.src; // Trigger reflow to restart animation

      img.addEventListener(
        "animationend",
        () => {
          img.classList.remove("animate-in"); // Remove the in animation class
          img.classList.add("animate-out"); // Add out animation class
        },
        { once: true }
      ); // Only run once

      currentImageIndex++;

      // Show the next image after the interval
      setTimeout(showNextImage, interval);
    }

    // Hide images after the total display duration
    setTimeout(() => {
      horrorImages.forEach((img) => {
        img.classList.add("animate-out"); // Start fade out after display duration
      });
    }, displayDuration);
  };

  showNextImage(); // Start showing the images
}

// Helper function to format time as MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}
