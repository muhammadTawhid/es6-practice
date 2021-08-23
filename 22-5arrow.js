// single parameter arrow function
// const sum = num => num * 2;
// const result = sum(2)
// console.log(result);

// no parameter arrow function
// const sum = () => 2 + 1;
// const result = sum();
// console.log(result)

// more than one parameter
const sum = (num1, num2) => {
    const result1 = num1 + num2;
    const result2 = num1 - num2;
    const finalResult = result1 * result2;
    return finalResult;
}

const result = sum(7, 5);
console.log(result);