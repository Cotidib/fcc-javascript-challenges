/*Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.*/

function convertToRoman(num) {
  let numArr = [];
  let romanNum = "";

  //Helper function: get number of digits
  function getlength(number) {
      return number.toString().length;
    }

  //Add ceros before number if necesary
  for(let i=0; i<(4-getlength(num));i++)
  {
    numArr.push(0);
  }
 
  //Helper function: transform digits to array
  function numToArray() {
    let arr = num.toString().split("");
    return arr.map(n => parseInt(n));
  }

  //Get all digits in array of lenght 4
  let digits = numToArray();
  numArr = numArr.concat(digits);

  //Num greater than 1000
  if(numArr[0]>0) {
    for(let i=0;i<numArr[0];i++) {
      romanNum += "M";
    }
  }
  
  //Helper function: general algorithm to build roman number
  function toRomanNumber(number,a,b,c) {
    let roman = "";
    if(number>0 && number<4) {
      for(let i=0;i<number;i++) {
        roman += a;
    }
    }
    else if(number == 4) {
      roman += (a + b);
    }
    else if(number == 5) {
      roman += b;
    }
    else if(number>5 && number<9) {
      roman += b;
      for(let i=0;i<(number-5);i++) {
        roman += a;
      }
    }
    else if(number == 9) {
      roman += (a + c);
    }
  
    //console.log(roman);
    return roman;
  }

  //Complete Roman Number
  romanNum += toRomanNumber(numArr[1],"C","D","M") + toRomanNumber(numArr[2],"X","L","C") + toRomanNumber(numArr[3],"I","V","X");

  console.log(romanNum)
  return romanNum;
}

convertToRoman(2);
convertToRoman(12);
convertToRoman(29);
convertToRoman(44);
convertToRoman(97);
convertToRoman(500);
convertToRoman(798);
convertToRoman(1023);
convertToRoman(3999);