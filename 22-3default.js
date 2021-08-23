// function sum(num1, num2){
//     const sum = num1 + num2;
//     return sum;
// }

// function sum(num1, num2){
//     if(num2 == undefined){
//         num2 = 0
//     }
//     const sum = num1 + num2;
//     return sum;
// }

// function sum(num1, num2){
//     num2 = num2 || 0;
//     const sum = num1 + num2;
//     return sum;
// }

// es6 method to set default value
function sum(num1, num2 = 0){
    num2 = num2 || 0;
    const sum = num1 + num2;
    return sum;
}

const result = sum(1, );
console.log(result);
