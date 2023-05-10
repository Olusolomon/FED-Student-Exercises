function checkPalindrome(word) {
  const lowerword = word.toLowerCase();

  // split the word
  const chars = lowerword.split("");

  // Reverse the split word
  const reversedChars = chars.reverse();

  // Join the reversed word back to a string
  const reversedWord = reversedChars.join("");

  if (reversedWord == `${word}`) {
    console.log(`${word} is a palindrome!`);
  } else {
    console.log(`${word} is not a palindrome.`);
  }
}

checkPalindrome("Aba");
checkPalindrome("racecar");
checkPalindrome("hello");
