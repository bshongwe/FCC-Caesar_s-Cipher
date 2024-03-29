function rot13(str) {
  // Initialization
  let result = '';

// ROT13 Setup

// Looping through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // ASCII code of the current character
    let charCode = str.charCodeAt(i);

    // Checking if current character is a letter
    if (charCode >= 65 && charCode <= 90) {
      // Rotating the letter by 13 positions (Option A)
      charCode = ((charCode - 65 + 13) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      // Rotating the letter by 13 positions (Option B)
      charCode = ((charCode - 97 + 13) % 26) + 97;
    }

    // Converting ASCII code back to character and appending to result
    result += String.fromCharCode(charCode);
  }

  return result;
}

// ROT13 Output:
console.log(rot13("SERR PBQR PNZC")); // "SERR PBQR PNZC"
