document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const submitButton = document.getElementById("submit");
    const copyButton = document.getElementById("copy");
    const shareButton = document.getElementById("share");
    const followChannelButton = document.getElementById("follow-channel");
    const traitsList = document.getElementById("traits-list");
    const resultSection = document.getElementById("result-section");

    const traits = [
        { trait: "Kindness", emoji: "😊" },
        { trait: "Creativity", emoji: "🎨" },
        { trait: "Leadership", emoji: "👑" },
        { trait: "Humor", emoji: "😄" },
        { trait: "Intelligence", emoji: "🧠" },
        { trait: "Empathy", emoji: "❤️" },
        { trait: "Adventurous", emoji: "🌍" },
        { trait: "Patience", emoji: "⏳" },
        { trait: "Honesty", emoji: "🤝" },
        { trait: "Optimism", emoji: "🌞" },
        // Add more traits as desired
    ];

    function getRandomPercentage() {
        return Math.floor(Math.random() * 101); // Generate random percentage between 0 and 100
    }

    function generatePersonality() {
        const selectedTraits = [];
        while (selectedTraits.length < 7) {
            const randomTrait = traits[Math.floor(Math.random() * traits.length)];
            if (!selectedTraits.includes(randomTrait)) {
                selectedTraits.push(randomTrait);
            }
        }

        traitsList.innerHTML = "";
        selectedTraits.forEach(traitObj => {
            const percentage = getRandomPercentage();
            const listItem = document.createElement("p");
            listItem.textContent = `${traitObj.trait}: ${percentage}% ${traitObj.emoji}`;
            traitsList.appendChild(listItem);
        });
        
        resultSection.classList.remove("hidden");
    }

    function copyToClipboard() {
        const personalityText = `${nameInput.value}'s Personality Traits:\n\n${traitsList.innerHTML.replace(/<[^>]+>/g, "")}\n\nCheck yours here: ${window.location.href}`;
        navigator.clipboard.writeText(personalityText)
            .then(() => alert("Personality info copied to clipboard!"))
            .catch(() => alert("Failed to copy text."));
    }

    function shareToStatus() {
        const personalityText = `${nameInput.value}'s Personality Traits:\n\n${traitsList.innerHTML.replace(/<[^>]+>/g, "")}\n\nCheck yours here: ${window.location.href}`;
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(personalityText)}`;
        window.open(whatsappUrl, '_blank');
    }

    submitButton.addEventListener("click", () => {
        if (nameInput.value.trim() === "") {
            alert("Please enter your name.");
            return;
        }
        generatePersonality();
    });

    copyButton.addEventListener("click", copyToClipboard);
    shareButton.addEventListener("click", shareToStatus);

    followChannelButton.addEventListener("click", () => {
        window.open("https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x", '_blank');
    });
});
