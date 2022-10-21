const words = [
  'Philippe', 
  'De Pauw',
  'Waterschoot',
  'Spitaalpoortstraat',
  'Zwijnaardsesteenweg',
  'Bergstraatwasje',
  '',
];

function generateTabs(n) {
  let str = ''
  for (let i = 0; i < n; i++) {
    str += '\t';
  }
  return str;
}

function generateTabsForWord(word, amountOfChars) {
  const n = Math.ceil((amountOfChars - word.length) / 8);
  console.log(n);
  let str = ''
  for (let i = 0; i < n; i++) {
    str += '\t';
  }
  return str;
}

let output = '';
for (let i = 0; i < words.length; i++) {
  output += words[i] + generateTabsForWord(words[i], 32) + 'Next text after tabs' + '\n';
}
console.log(output);
