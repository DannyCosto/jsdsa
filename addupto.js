//example write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
let t1 = performance.now();
addUpTo(10);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
/*
function addUpTo(){
  return n * (n+1) / 2;
}
*/

console.log(addUpTo(6));
//6+5+4+3+2+1=21
