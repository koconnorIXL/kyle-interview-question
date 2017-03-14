
var A_ASCII = 'A'.charCodeAt(0);
var a_ASCII = 'a'.charCodeAt(0);

function toAscii(c) {
  return c.charCodeAt(0);
}

function isUpper(c) {
  var n = toAscii(c);
  return n >= A_ASCII && n < A_ASCII + 26;
}

function isLower(c) {
  var n = toAscii(c);
  return n >= a_ASCII && n < a_ASCII + 26;
}

function shift(c, offset) {
  if (isUpper(c)) {
    let n = toAscii(c) - A_ASCII;
    return String.fromCharCode(A_ASCII + ((n + offset) % 26));
  }
  else if (isLower(c)) {
    let n = toAscii(c) - a_ASCII;
    return String.fromCharCode(a_ASCII + ((n + offset) % 26));
  }
}

function upperCaseCharFromIndex(index) {
  return String.fromCharCode(A_ASCII + index % 26);
}

function indexFromUpperCaseChar(c) {
  return c.charCodeAt(0) - A_ASCII; 
}

function applyCipher(source, cipherKeyword) {
  if (!cipherKeyword) {
    return '';
  }

  let sourceChars = source.toUpperCase().split('');
  for (let i = 0; i < sourceChars.length; i++) {
    let offset = indexFromUpperCaseChar(cipherKeyword[i % cipherKeyword.length]);
    sourceChars[i] = shift(sourceChars[i], offset); 
  }
  return sourceChars.join('');
}

module.exports = {
  upperCaseCharFromIndex: upperCaseCharFromIndex,
  indexFromUpperCaseChar: indexFromUpperCaseChar,
  shift: shift,
  isUpper: isUpper,
  isLower: isLower,
  applyCipher: applyCipher
};


