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


//TRUE
telephoneCheck("555-555-5555");
telephoneCheck("1 555-555-5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("5555555555");
telephoneCheck("(555)555-5555");
telephoneCheck("1(555)555-5555"); 
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
