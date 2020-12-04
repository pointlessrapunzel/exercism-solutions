//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

let ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

export const isPangram = (string) => {
  const stringChars = new Map()
  for (let char of string) {
    stringChars.set(char.toLowerCase())
  }
  for (let letter of ALPHABET) { 
    if (!stringChars.has(letter)) return false
  }
  return true
};
