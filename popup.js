formatString.addEventListener("click", async() => {
    formatInputSetText();
    copyClipboard();
    showCopiedNotification();
});

copyNotification.addEventListener("click", async() => {
    copyClipboard();
    showCopiedNotification();
});

function formatInputSetText() {
    const input = document.getElementById("input").value;
    const formattedText = discord_emote_format(input);
    let output = document.getElementById("output");
    output.value = formattedText;
}

const LARGE_SPACE = "      ";
const SMALL_SPACE = "  ";
const NUMBER_ENGLISH = [
    "0️⃣",
    "1️⃣",
    "2️⃣",
    "3️⃣",
    "4️⃣",
    "5️⃣",
    "6️⃣",
    "7️⃣",
    "8️⃣",
    "9️⃣",
];
const ALPHABETS = [
    "🇦",
    "🇧",
    "🇨",
    "🇩",
    "🇪",
    "🇫",
    "🇬",
    "🇭",
    "🇮",
    "🇯",
    "🇰",
    "🇱",
    "🇲",
    "🇳",
    "🇴",
    "🇵",
    "🇶",
    "🇷",
    "🇸",
    "🇹",
    "🇺",
    "🇻",
    "🇼",
    "🇽",
    "🇾",
    "🇿",
];

function discord_emote_format(input) {
    let emote_count = 0;
    let output = [];
    for (const character of input) {
        emote_count++;
        if (character.match("[A-Za-z]")) {
            output.push(`${ALPHABETS[character.toLowerCase().charCodeAt(0) - 97]}`);
        } else if (character.match("[0-9]")) {
            output.push(`${NUMBER_ENGLISH[parseInt(character)]}`);
        } else if (character === "!") {
            output.push("❕");
        } else if (character === "?") {
            output.push("❔");
        } else {
            emote_count--;
            output.push(character);
        }
    }
    output.forEach((item) => console.log(item));
    if (emote_count < 28 && !input.match("[^A-Za-z0-9?! ]")) {
        output = output.map((character) => character.replace(" ", LARGE_SPACE));
    } else {
        output = output.map((character) => character.replace(" ", SMALL_SPACE));
    }
    return output.join(" ");
}

function copyClipboard() {
    const output = document.getElementById("output");
    output.select();
    document.execCommand("copy");
}

function showCopiedNotification() {
    let notification = document.getElementById("copyNotification");
    notification.innerHTML = "Copied!";
    setTimeout(function() {
        notification.innerHTML = "Copy";
    }, 3000);
}