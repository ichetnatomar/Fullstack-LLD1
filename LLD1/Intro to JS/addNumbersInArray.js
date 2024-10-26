const numbers = [1, 2, 3, 4, 5];

// reduce() syntax:
// array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Let's break down how it works step by step:
// Round 1: acc = 0 (initial value), curr = 1 → 0 + 1 = 1
// Round 2: acc = 1, curr = 2 → 1 + 2 = 3
// Round 3: acc = 3, curr = 3 → 3 + 3 = 6
// Round 4: acc = 6, curr = 4 → 6 + 4 = 10
// Round 5: acc = 10, curr = 5 → 10 + 5 = 15
// Final result: 15

// More verbose version to understand better:
const sum2 = numbers.reduce(function(accumulator, currentValue) {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
}, 0);

// You can also write it with arrow function and console.log:
const sum3 = numbers.reduce((acc, curr) => {
    console.log(`Accumulator: ${acc}, Current Value: ${curr}`);
    return acc + curr;
}, 0);

// The 0 at the end is the initial value. If we don't provide it:
const sum4 = numbers.reduce((acc, curr) => acc + curr);
// Then first value becomes accumulator:
// Round 1: acc = 1, curr = 2 → 1 + 2 = 3
// Round 2: acc = 3, curr = 3 → 3 + 3 = 6
// Round 3: acc = 6, curr = 4 → 6 + 4 = 10
// Round 4: acc = 10, curr = 5 → 10 + 5 = 15