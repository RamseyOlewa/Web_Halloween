// Sample data for eerie sounds with online links
const sounds = [
  {
    name: "Ghostly Whisper",
    file: "assets/ghost_whisper.mp3", // Ghostly Whisper sound
    image: "https://example.com/ghostly-whisper.jpg", // Replace with actual image link
  },
  {
    name: "Creepy Laughter",
    file: "assets/evil.mp3", // Creepy Laughter sound
    image: "https://example.com/creepy-laughter.jpg", // Replace with actual image link
  },
  {
    name: "Haunted House",
    file: "assets/haunted_house.mp3", // Haunted House sound
    image: "assets/haunted_house.jpg", // Replace with actual image link
  },
  {
    name: "Eerie Wind",
    file: "assets/eerie_wind.mp3", // Eerie Wind sound
    image: "https://example.com/eerie-wind.jpg", // Replace with actual image link
  },
];

let currentAudio = null; // Variable to keep track of the currently playing audio

// Function to populate the sound list
function populateSoundList() {
  const soundList = document.getElementById("soundList");
  sounds.forEach((sound) => {
    const listItem = document.createElement("li");
    listItem.className = "sound-item";
    listItem.innerHTML = `
            <img src="${sound.image}" alt="${sound.name}" class="sound-image" />
            <span class="sound-title">${sound.name}</span>
            <button class="play-button" data-file="${sound.file}">Play</button>
        `;
    soundList.appendChild(listItem);
  });
}

// Function to play sound
function playSound(file) {
  if (currentAudio) {
    currentAudio.pause(); // Stop the current audio if it's playing
  }

  currentAudio = new Audio(file);
  currentAudio.play().catch((error) => {
    console.error("Error playing sound:", error);
    alert("Failed to play sound. Please check your browser settings.");
  });
}

// Function to stop the currently playing sound
function stopSound() {
  if (currentAudio) {
    currentAudio.pause(); // Pause the audio
    currentAudio.currentTime = 0; // Reset to start
  }
}

// Event listener for play buttons
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("play-button")) {
    const file = event.target.getAttribute("data-file");
    playSound(file);
  }
});

// Event listener for the stop button
document.getElementById("stopButton").addEventListener("click", stopSound);

// Populate the sound list on page load
populateSoundList();
