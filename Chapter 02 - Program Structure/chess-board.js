// Make an 8x8 chess board
var chessBoard = '';

for (var num = 0; num < 8; num++) {
  if (num % 2 === 0) {
    chessBoard += '# # # # \n';
  } else {
    chessBoard += ' # # # #\n';
  }
}

console.log(chessBoard);

// ************************************

// Generalize the program above
// Make a SizexSize chess board
var chessBoard = '';
var size = 8;

// Outer loop -> row
for (var row = 0; row < size; row++) {
  // Inner loop -> individual character in the row
  for (var char = 0; char < size; char++) {
    if ((row + char) % 2 === 0) {
      chessBoard += '#';
    } else {
      chessBoard += ' ';
    }
  }
  chessBoard += '\n';
}

console.log(chessBoard);
