'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}


const prices = [100, 150, 200];

prices.push(300);
// const taxOfprace = tax => {
//   const result = prices.map(price =>{
//     let x = []
//     if(price >= 150|| price!==0){
//       x.push(price);
//     }
//     return x * tax;
//   });
//   // const result = [];
//   // for(const price of prices){
//   //   result.push(price * tax);
//   console.log(result);
//   return result;
// }

// const priceOver150 = [];

// prices.forEach( price =>{
//   if(price >= 150){
//     priceOver150.push(price);
//     console.log(priceOver150);
//   }return priceOver150;
// })

const [onion,apple,snack] = prices;
// prices.pop(1);
// prices.pop(1);
// prices.pop(1);

console.log(prices);

console.log(snack);
console.log(apple);
const [yy,...others] = prices;

console.log(others);

const i= [1,2,3,4,5,...others];
console.log(i);

// console.log(taxOfprace(1.1));
// test(taxOfprace(1.1), [110, 165, 220,]);

// document.querySelector('button').addEventListener('click', () => {
//   // console.log('Clicked');
//   document.querySelector('p').textContent = 'こんにちは';
//   // document.querySelector('p').textContent = document.querySelector('button').textContent;
// });
