document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const submitButton = document.getElementById("submit");
    const copyButton = document.getElementById("copy");
    const shareButton = document.getElementById("share");
    const followChannelButton = document.getElementById("follow-channel");
    const traitsList = document.getElementById("traits-list");
    const resultSection = document.getElementById("result-section");
    const nameDefinitionDisplay = document.getElementById("name-definition");

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

    const nameDefinitions = {
        "Alice": "Alice: Noble and kind-hearted.",
        "John": "John: Gracious and merciful.",
        "Maria": "Maria: Sea of sorrow or sea of beauty.",
        "David": "David: Beloved and cherished.",
        "Emily": "Emily: Industrious and eager.",
        // Add more name definitions as desired
    };

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

    function displayDefinition(name) {
        const definition = nameDefinitions[name] || "No specific definition available for this name.";
        nameDefinitionDisplay.textContent = definition;
    }

    function copyToClipboard() {
        // Prepare each trait as a new line with HTML bold tags for the clipboard
        const personalityText = `${nameInput.value}'s Personality Traits:\n\n` +
            Array.from(traitsList.children)
                .map(item => `<b>${item.textContent}</b>`)
                .join("\n") +
            `\n\nCheck yours here: ${window.location.href}`;
        
        // Use Clipboard API to write HTML (for rich-text environments)
        navigator.clipboard.write([
            new ClipboardItem({
                "text/plain": new Blob([personalityText.replace(/<[^>]+>/g, "")], { type: "text/plain" }),
                "text/html": new Blob([personalityText], { type: "text/html" })
            })
        ]).then(() => alert("Personality info copied to clipboard!"))
          .catch(() => alert("Failed to copy text."));
    }

    function shareToStatus() {
        // Prepare each trait as a new line with Markdown-style bold for WhatsApp
        const personalityText = `${nameInput.value}'s Personality Traits:\n\n` +
            Array.from(traitsList.children)
                .map(item => `*${item.textContent}*`) // Markdown-style bold
                .join("\n") +
            `\n\nCheck yours here: ${window.location.href}`;
        
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(personalityText)}`;
        window.open(whatsappUrl, '_blank');
    }

    followChannelButton.addEventListener("click", () => {
        window.open("https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x", '_blank');
    });

    submitButton.addEventListener("click", () => {
        const name = nameInput.value.trim();
        if (name === "") {
            alert("Please enter your name.");
            return;
        }
        displayDefinition(name);
        generatePersonality();
    });

    copyButton.addEventListener("click", copyToClipboard);
    shareButton.addEventListener("click", shareToStatus);
});
