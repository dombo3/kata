const currencyValue = {
  "PENNY" : 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100,
}

function checkCashRegister(price, cash, cid) {
  const change = cash - price;
  const cidSum = cid.map(change => change[1]).reduce((a,b) => a + b);

  if (cidSum == 0 || cidSum === change) {
    return {status: "CLOSED", change: cid};
  } else if (cidSum - change < 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else {
    const cashOut = calculateCashOut(change, cid);
    const cashOutSum = cashOut.map(change => change[1]).reduce((a,b) => a + b);
    if (cashOutSum - change < 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else {
      return {status: "OPEN", change: cashOut};
    }
  }
}

function calculateCashOut(change, cid) {
  const orderedCID = cid.sort((a,b) => {
    return currencyValue[b[0]] - currencyValue[a[0]];
  }).filter(change => change[1] > 0);
  
  let result = [];
  
  orderedCID.forEach(currencyArray => {
    const currencyUnit = currencyArray[0];
    const currencyAmount = currencyArray[1];
    const denomination = currencyValue[currencyUnit];
    
    if (change % denomination != change) {
      const quantityInDrawer = Math.floor(currencyAmount / denomination);
      const requiredQuantity = Math.floor(change / denomination);

      let cashOut = quantityInDrawer < requiredQuantity 
        ? quantityInDrawer * denomination
        : requiredQuantity * denomination

      result.push([currencyUnit, cashOut]);
      change = Math.round((change - cashOut) * 100) / 100;
    }
  });

   return result;
}

module.exports = checkCashRegister;