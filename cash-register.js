/*Design a cash register drawer function checkCashRegister() that accepts purchase price as the 
first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the 
third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it 
is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in 
highest to lowest order, as the value of the change key.

Currency Unit Amount
Penny $0.01 (PENNY)
Nickel  $0.05 (NICKEL)
Dime  $0.1 (DIME)
Quarter $0.25 (QUARTER)
Dollar  $1 (ONE)
Five Dollars  $5 (FIVE)
Ten Dollars $10 (TEN)
Twenty Dollars  $20 (TWENTY)
One-hundred Dollars $100 (ONE HUNDRED)

https://dev.to/frolovdev/how-to-operate-with-monetary-values-in-javascript-3fal
*/


function checkCashRegister(price, cash, cid) {
  let currencyUnits = {
      "PENNY": 1,
      "NICKEL": 5,
      "DIME": 10,
      "QUARTER": 25,
      "ONE": 100,
      "FIVE": 500,
      "TEN": 1000,
      "TWENTY": 2000,
      "ONE HUNDRED": 10000,
  };
  
  let totalCid = cid.reduce((sum, coin)=>sum + Math.round(coin[1]*100),0).toFixed(2);
  let changeNeeded = cash*100 - price*100;

  if(changeNeeded>totalCid) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  else if(changeNeeded==totalCid) {
    return {status: "CLOSED", change: [...cid]}
  }

  else {
    //Get an array with the coins in cid which its unit value is less than the change I need to give
    let cidNeeded = cid.filter(coin => currencyUnits[coin[0]]<=changeNeeded);
    
    //Prepare the returned object
    let returnValue = {
      status: "OPEN", 
      change: [],
      };
    
    let totalSum = 0;
    //Iterate on every filtered (and reversed) cid element and add a unit value until
    //the changeNeeded is reached or the cash available of the coin is empty
    cidNeeded.reverse().forEach(function(elementInCid){
      
      while(totalSum + currencyUnits[elementInCid[0]] <= changeNeeded && elementInCid[1]>0) {
        //console.log(currencyUnits[elementInCid[0]]); //how much is added in each iteration
            
        //The coin and the amount used is added to returnValue.change in array format
        //after checking if the coin is already in the array or not
        if(returnValue.change.some(elem => elem[0]==elementInCid[0])) {
          let repeatedElement = returnValue.change.find(elem => elem[0]==elementInCid[0]);
          let indexOfThatElement = returnValue.change.indexOf(repeatedElement);
          returnValue.change[indexOfThatElement][1] += currencyUnits[elementInCid[0]]/100;   
        }
        else {  
          returnValue.change.push([elementInCid[0],currencyUnits[elementInCid[0]]/100])   
        }

        totalSum += currencyUnits[elementInCid[0]];  
        elementInCid[1] -= currencyUnits[elementInCid[0]]/100;
       
      }

    });

    console.log(totalSum);
    console.log(returnValue);
    
    if(totalSum<changeNeeded){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }

    return returnValue;

  }

}

//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);