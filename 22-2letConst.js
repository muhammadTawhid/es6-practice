const babyName = "porimoni";
// babyName = "mahi" // this can't be changed cz it's declare by const.
console.log(babyName);

let hubbuyName = "jannTO";
hubbuyName = "lalTo";
console.log(hubbuyName);

sum = 0;
for(var i = 0; i < 10; i++){
    var element = sum[i];
}
console.log(i); // "i" is global variable cz it declare by "var";

let sum = 0;
for(let i = 0; i < 10; i++){
    var element = sum + i; // now "i" is global variable cz it declare by "let" so, we can't call outside of for loop
}
console.log(i);