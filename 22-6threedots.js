const ages = [1, 2, 3, 4, 5,];
const ages2 = [6, 7, 8, 9,];
const ages3 = [11, 12, 13, 14, 15];
// const allAges = ages.concat(ages2).concat([10]).concat(ages3);
// by using spread oporater
const allAges2 = [...ages, ...ages2, 10, ...ages3];
// console.log(allAges2);

const businessMan = 450;
const minister = 350;
const prasident = 250;
// const rich = Math.max(businessMan, minister, prasident);

const takaPoisha = [1, 2, 3, 54, 44];
const maxValue = Math.max(... takaPoisha);
console.log(maxValue);