/*
Programming 1: Essentials
Week: 2
Date: 27-09-2022
=========================
Loops
*/

// Na iedere iteratie of lus de waarde van i met een vermeerderen
for (let i = 0;i <= 100;i++) {
  console.log(i);
}

// Na iedere iteratie of lus de waarde van j met een verminderen
for (let j = 1000; j >= 0; j--) {
  console.log(`Counter with value: ${j}`);
}

// Na iedere iteratie of lus de waarde van k vemenigvuldigen met twee
for (let k = 1; k <= 256; k*=2) {
  console.log(`k with value: ${k}`);
}

// Geneste Lus (Eng. Nested Loop)
for (let r = 0; r < 6; r++) {
  for (let c = 0; c < 4; c++) {
    console.log(`r is ${r} and c is ${c}`);
  }
}

// Draw some Grid with loops
let nRows = 8, nCols = 8, output = '', ch = '👾';
for (let r = 0; r < nRows; r++) {
  for (let c = 0; c < nCols; c++) {
    output += `${ch}`;
  }
  output += '\n';
}
console.log(output);

ch = '💩';
for (let i = 0; i < nRows * nCols; i++) {
  output += `${ch}`;
  if ((i + 1) % nCols == 0) {
    output += '\n';
  }
}
console.log(output);