/*Return true if the passed string looks like a valid US phone number.
The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
The area code is required. If the country code is provided, you must confirm that the country code is 1. 
Return true if the string is a valid US phone number; otherwise return false.*/

function telephoneCheck(str) {
  let validCombinationsRegex = [];
  validCombinationsRegex.push(/^\d{3}-\d{3}-\d{4}$/g);
  validCombinationsRegex.push(/^1 \d{3}-\d{3}-\d{4}$/g);
  validCombinationsRegex.push(/^1 \(\d{3}\) \d{3}-\d{4}$/g);
  validCombinationsRegex.push(/^\d{10}$/g);
  validCombinationsRegex.push(/^\(\d{3}\)\d{3}-\d{4}$/g);
  validCombinationsRegex.push(/^1\(\d{3}\)\d{3}-\d{4}$/g);
  validCombinationsRegex.push(/^1 \d{3} \d{3} \d{4}$/g);

  return validCombinationsRegex.some((regex)=> regex.test(str));
  
}

// {} : quantifier 
//^ : begins with (en este caso \d{3}) , $ : ends with (en este caso \d{4})
// Para que reconozca los () hay que escaparlos: \( y \)



/* PRIMERA VERSION QUE HICE QUE ESTA FEA --------------------------------------------------------------------------------------------------------------

function telephoneCheck(str) {
  let validSymbols = /\D|-|()/;
  //console.log(validSymbols.test(str))

  if(validSymbols.test(str)) {
      let digits = str.match(/\d/g);
      if(digits.length < 10) {
        console.log("false");
        return false;
      }
      else if(digits.length == 10) {
        //let validCombinations = new RegExp('a');
        let correctCombinations = [];
        correctCombinations.push(digits[0]+digits[1]+digits[2]+"-"+digits[3]+digits[4]+digits[5]+"-"+digits[6]+digits[7]+digits[8]+digits[9]);
        correctCombinations.push("("+digits[0]+digits[1]+digits[2]+")"+digits[3]+digits[4]+digits[5]+"-"+digits[6]+digits[7]+digits[8]+digits[9]);
        correctCombinations.push("("+digits[0]+digits[1]+digits[2]+")"+" "+digits[3]+digits[4]+digits[5]+"-"+digits[6]+digits[7]+digits[8]+digits[9]);
        correctCombinations.push(digits[0]+digits[1]+digits[2]+" "+digits[3]+digits[4]+digits[5]+" "+digits[6]+digits[7]+digits[8]+digits[9]);
        correctCombinations.push(digits[0]+digits[1]+digits[2]+digits[3]+digits[4]+digits[5]+digits[6]+digits[7]+digits[8]+digits[9]);

        console.log(correctCombinations.includes(str));
        return correctCombinations.includes(str);  
      }
      else if(digits.length == 11) {
        let correctCombinations = [];
        correctCombinations.push("1 "+digits[1]+digits[2]+digits[3]+"-"+digits[4]+digits[5]+digits[6]+"-"+digits[7]+digits[8]+digits[9]+digits[10]);
        correctCombinations.push("1 "+"("+digits[1]+digits[2]+digits[3]+")"+digits[4]+digits[5]+digits[6]+"-"+digits[7]+digits[8]+digits[9]+digits[10]);
        correctCombinations.push("1 "+"("+digits[1]+digits[2]+digits[3]+")"+" "+digits[4]+digits[5]+digits[6]+"-"+digits[7]+digits[8]+digits[9]+digits[10]);
        correctCombinations.push("1 "+digits[1]+digits[2]+digits[3]+" "+digits[4]+digits[5]+digits[6]+" "+digits[7]+digits[8]+digits[9]+digits[10]);
        correctCombinations.push("1 "+digits[1]+digits[2]+digits[3]+digits[4]+digits[5]+digits[6]+digits[7]+digits[8]+digits[9]+digits[10]);

        console.log(correctCombinations.includes(str));
        return correctCombinations.includes(str);

      }
      else if(digits.length>11) {
        console.log("false");
        return false;
      }
  }

  else {
    console.log("false");
    return false;
  }
}
----------------------------------------------------------------------------------------------------------------------------------------------------*/

//TRUE
telephoneCheck("555-555-5555");
telephoneCheck("1 555-555-5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("5555555555");
telephoneCheck("(555)555-5555");
telephoneCheck("1(555)555-5555"); //en la primera version que hice este da mal
telephoneCheck("1 555 555 5555");
telephoneCheck("1 456 789 4444");
//FALSE
telephoneCheck("555-5555");
telephoneCheck("5555555");
telephoneCheck("1 555)555-5555");
telephoneCheck("123**&!!asdf#");
telephoneCheck("55555555");
telephoneCheck("2 (757) 622-7382");
telephoneCheck("0 (757) 622-7382");
telephoneCheck("-1 (757) 622-7382");
telephoneCheck("2 757 622-7382");
telephoneCheck("27576227382");
telephoneCheck("(275)76227382");
telephoneCheck("2(757)6227382");
telephoneCheck("2(757)622-7382");
telephoneCheck("555)-555-5555");
telephoneCheck("(555)5(55?)-5555");
telephoneCheck("(555)5(55?)-5555");
telephoneCheck("55 55-55-555-5");
telephoneCheck("10 (757) 622-7382");