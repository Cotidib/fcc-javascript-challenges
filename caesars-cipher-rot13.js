/*One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), 
but do pass them on.*/

function rot13(str) {

  //Helper function: Transform one character to ROT13
  function transformCharToROT13(char) {
    let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let charIndex = alphabet.indexOf(char);
    let newCharIndex;
    if(charIndex + 13 > 25) {
        newCharIndex = charIndex + 13 - 26;}
    else {
        newCharIndex = charIndex + 13;}
    //console.log(alphabet[newCharIndex])
    return alphabet[newCharIndex];
  }
  
  let strArr = str.split("");
  let alphaRegex = /[A-Z]/;
  let newStr = "";
  
  for(let i=0;i<strArr.length;i++) {
    if(strArr[i].match(alphaRegex)) {
      newStr += transformCharToROT13(strArr[i]);
    }
    else {
      newStr += strArr[i];
    } 
  }

  console.log(newStr)
  return newStr;

}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");