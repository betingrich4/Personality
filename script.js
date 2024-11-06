const traits = [
  { trait: "Kindness", emoji: "😊" },
  { trait: "Creativity", emoji: "🎨" },
  { trait: "Confidence", emoji: "💪" },
  { trait: "Humor", emoji: "😂" },
  { trait: "Intelligence", emoji: "🧠" },
  { trait: "Patience", emoji: "⏳" },
  { trait: "Ambition", emoji: "🚀" },
  { trait: "Empathy", emoji: "❤️" },
  { trait: "Leadership", emoji: "👑" },
  { trait: "Curiosity", emoji: "🔍" },
  { trait: "Resilience", emoji: "🏋️" },
  { trait: "Passion", emoji: "🔥" },
];

function generatePersonality() {
  const name = document.getElementById('name').value;
  if (name === "") return alert("Please enter your name.");

  document.getElementById('result-section').classList.remove('hidden');
  const traitsList = document.getElementById('traits-list');
  traitsList.innerHTML = ""; // Clear any previous results

  const selectedTraits = traits.sort(() => 0.5 - Math.random()).slice(0, 7);
  let resultText = `${name}'s Personality Traits:\n\n`;

  selectedTraits.forEach(traitObj => {
    const percentage = Math.floor(Math.random() * 101);
    resultText += `${traitObj.emoji} ${traitObj.trait}: ${percentage}%\n`;
    const traitElement = document.createElement("p");
    traitElement.innerHTML = `${traitObj.emoji} ${traitObj.trait}: ${percentage}%`;
    traitsList.appendChild(traitElement);
  });

  resultText += "\nDiscover yours at " + window.location.href;
  document.getElementById("copy").setAttribute("data-text", resultText);
}

function copyToClipboard() {
  const textToCopy = document.getElementById("copy").getAttribute("data-text");
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("Personality traits copied to clipboard!");
  });
}

function shareResult() {
  const textToShare = document.getElementById("copy").getAttribute("data-text");
  alert("Share this on your status:\n\n" + textToShare); // Simulates sharing
}

function followChannel() {
  window.open("https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x", "_blank");
                                                                   }
