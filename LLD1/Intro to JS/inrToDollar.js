let transactions = [1000, 3000, 2000, 4500];

//using imperative

function convertInrToDollar(inr) {
  return inr / 84;
}

function calculateHOF(transactions) {
  let dollars = [];
  for (let i = 0; i < transactions.length; i++) {
    dollars.push(Math.ceil(transactions[i] / 84.00 * 100.00) / 100.00);
  }
  return dollars;
}

let finalDollars = calculateHOF(transactions);
console.log(`final ans using imperative: ${finalDollars}`);



//Using Declarative

function convertInrToDollarsDeclarative(num) {
  return num / 84;
}

let finalDollars2 = transactions.map(convertInrToDollarsDeclarative);
console.log(`final ans using declarative: ${finalDollars2}`);
