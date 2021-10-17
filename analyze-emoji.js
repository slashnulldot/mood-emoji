const fs = require('fs');
const fileContents = fs.readFileSync('mood-dict.json');
const emojiToMood = JSON.parse(fileContents);

// 0 - path to node, 1 - path to "analyze-emoji.js", [2:] - args to analyze
const userInput = [... process.argv[2].replace(/[а-яa-z\d\s.,?!]/gi, '') ];

let textMood = 0;
let counter = 0;

for(const emoji in userInput) {
  const emojiMood = emojiToMood[userInput[emoji]];

  if(emojiMood) {
    textMood += emojiMood;
    counter++; 
  }
}
// Ternary operation for cases without emojis in text
console.log("Настроение сообщения: " + (textMood/counter ? textMood/counter : 0));