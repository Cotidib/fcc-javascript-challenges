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
