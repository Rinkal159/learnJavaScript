function printSum(...num) {
    const sumOfAll = num.reduce((acc, value) => acc + value, 0);
    return sumOfAll;
}

console.log(`sum of all digits : ${printSum(10, 20, 30, 40, 50)}`);
