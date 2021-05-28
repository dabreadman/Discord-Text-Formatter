// When the button is clicked, inject setPageBackgroundColor into current page
formatString.addEventListener("click", async () => {
  formatInput();
});

// The body of this function will be executed as a content script inside the
// current page
function formatInput() {
  const input = document.getElementById("input").value;
  const formattedText = discord_emote_format(input);
  console.log(formattedText);
  let output = document.getElementById("output");
  document.getElementById("input").value = "0️⃣"; //formattedText;
  //output.innerHTML = formattedText;
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
  console.log(input);
  for (const character of input) {
    console.log(character);
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
  if (emote_count < 28 && !input.match("[^A-Za-z0-9?! ]")) {
    output = output.map((character) => character.replace(" ", LARGE_SPACE));
  } else {
    output = output.map((character) => character.replace(" ", SMALL_SPACE));
  }
  return output.join(" ");
}
