function isPalindrome(word) {
  // Write your algorithm here

  const reversedWord = reverseString(word);
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }

  function reverseString(word) {

    const wordArray = word.split("");
    const reversedWordArray = wordArray.reverse();
    const reversedWord = reversedWordArray.join("");
    return reversedWord;
  }  
}

/* 
  Add your pseudocode here
*/
  // type in input string
  //reverse the input string
  // if the input string is the same as the reverse string
  //   return value of true
  // else
  //   return value of false

/*
  Add written explanation of your solution here
*/
  // create an array from the input string, reverse the array
  // create a string from the reversed array, return the reversed string

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
