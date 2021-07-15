function palindrome(str) {
  let symbolsRegex = /\W|_/g;
  let cleanStr = str.replace(symbolsRegex, "").toLowerCase();
  //console.log(cleanStr)
  let reversedStr = cleanStr.split("").reverse().join("")
  //console.log(reversedStr) 
  return cleanStr == reversedStr
}



console.log(palindrome("ey-6y_e"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|\_/|four"));
