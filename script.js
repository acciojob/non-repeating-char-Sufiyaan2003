function firstNonRepeatedChar(str) {
 // Write your code here
	var freq = {};

  // Count frequencies using basic for loop
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (freq[char] === undefined) {
      freq[char] = 1;
    } else {
      freq[char]++;
    }
  }

  // Find first non-repeated character
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
