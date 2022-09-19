// Illegal shadowing
let xX = 0.01;
const yY = 0.02;
{
  var xX = 1000; // can't shadow let using var inside a block
  var yY = 2000; // can't shadow const using var inside a block
  console.log(xX);
  console.log(yY);
}
console.log(xX);
console.log(yY);
