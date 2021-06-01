# 🇩 🇮 🇸 🇨 🇴 🇷 🇩    _    🇫 🇴 🇷 🇲 🇦 🇹 🇪

Format text to emotes in Discord!

<a href="https://chrome.google.com/webstore/detail/discord-formate/nmgpmpibbphoiajjgaoabdplpnjgjlad" target="_blank"><img src="https://github.com/dabreadman/Discord-Text-Formatter/blob/master/images/Formate_64.png" width="64" height="64"></a>

## What is this?

`Discord Formate` is a web extension that helps to convert sentenses into their emote-equivalents.

## How to use it?

1. Download extension.
2. Click on it or open `option page`.
3. Type something.
4. Formate & Copy  
![Use screenshot](https://github.com/dabreadman/Discord-Text-Formatter/blob/master/.github/assests/Type%20Something.jpg)
5. Paste into Discord!

<b> Input:  Hell0 W0rld 1234 </b>  
<b> Output: 🇭 🇪 🇱 🇱 0️⃣        🇼 0️⃣ 🇷 🇱 🇩        1️⃣ 2️⃣ 3️⃣ 4️⃣ </b>

## How does it work?

- We map each characters to it's Unicode equivalent, and replace them.  
- Discord detects the Unicode, and renders it's own flavour of the characters.  

## Supported Characters

<b> We use default emotes, so no Nitro or server-specified emotes required! </b>

- Any digits: `0-9`
- Any English alphabets: `a-z`
- Question Mark: `?`
- Exclamation Mark: `!`

## Spaces Replacement

We replace `1` space `_` with `2` spaces `__` or `6` spaces `______`.  
`2` spaces if:
- More than 28 emotes, or include non-emote (space excluded) characters.  

This is due to the fact that Discord renders a smaller emote when either of these condition occurs, making `1` too small, and `6` too big.

## Limitation

Discord has a character limit of 5000 before a message will be converted into a text file.

- We need to separate each emote with a space, otherwise Discord will encode them differently.  
<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/282/regional-indicator-symbol-letter-c_1f1e8.png" alt="c" width="64"/> <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/282/regional-indicator-symbol-letter-d_1f1e9.png" alt="d" width="64"/> to <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/282/flag-congo-kinshasa_1f1e8-1f1e9.png" alt="cd_flag" width="64"/>
- We used to replace `a` with `:regional_indicator_a:`, and 1 with `one` instead of  🇦 1️⃣.

This puts us to around `~530` alphabets characters long per message.

## Development

- [`popup.js`](https://github.com/dabreadman/Discord-Text-Formatter/blob/master/popup.js) is the core component.
It handles all the logic and interaction, from getting and parsing input to displaying and copying output to clipboard.
- [`popup.html`](https://github.com/dabreadman/Discord-Text-Formatter/blob/master/popup.html) provides a structure for the interaction.  
It is both the `Popup` and the `Option` page.  
```html 
<meta charset="UTF-8" />
```
Ensures that the Unicode will retain its encoding.
- [`pages.css`](https://github.com/dabreadman/Discord-Text-Formatter/blob/master/page.css) houses our CSS.  
It has minimal `CSS` declartion, mainly to make the interact `good enough`.
- [`manifest.json`](https://github.com/dabreadman/Discord-Text-Formatter/blob/master/manifest.json) is the manifest for our extension.  
Let more [here](https://developer.chrome.com/docs/extensions/mv3/getstarted/).
