function rot13(str) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const shiftedAlphabet = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const charIndex = alphabet.indexOf(char);
  
      if (charIndex === -1) {
        // Character is not in the alphabet, e.g., punctuation or whitespace
        result += char;
      } else {
        // Rotate the character by 13 places
        const shiftedChar = shiftedAlphabet[charIndex];
        result += shiftedChar;
      }
    }
  
    return result;
  }