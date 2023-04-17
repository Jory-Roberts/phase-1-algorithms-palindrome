function isPalindrome(word) {
  // Write your algorithm here
  let length = word.length
  let startOfWord = word.substring(0, Math.floor(length / 2))
  let endOfWord = word.substring(length - Math.floor(length / 2))
  
  let flipWord = endOfWord.split('').reverse().join('')
  return (startOfWord === flipWord)
}

/* 
  Add your pseudocode here
  only lowercase strings
  only letters
  need to check start and end of given word
  by splitting
*/

/*
  Add written explanation of your solution here
  Defined length and set equal to the given word's length
  In order to check if a given word is a palindrome, need the word to be split in half
  This is accomplished by getting the start of the word(0) and grabbing the substring,
  using Math.floor, taking the length of the word and dividing by 2
  Now that the start of the word can be accounted for, we need to do the same for the end of the word
  Only this time, we're taking the length and accounting for the back half by taking full length of original word and subtracting
  Using flipWord, this splits the endOfWord, reverses, and joins again 

  

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
