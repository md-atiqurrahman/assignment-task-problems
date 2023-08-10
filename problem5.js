function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "please pay money";
  } else {
    let sum = 0;
    for (let denomination of changeArray) {
      sum += denomination;
    }
    return sum >= totalDue;
  }
}

const taka = [1, 2, 5];
const chipsPrice = 10;
const canPayTotalDue = canPay(taka, chipsPrice);
