// legal shadowing
let x = 0.1;
const y = 0.2;
var z = 0.3;
{
  let x = 100; // let inside a block
  const y = 200; // const inside a block
  let z = 300; // var using let inside a block
  console.log(x);
  console.log(y);
  console.log(z);
}
console.log(x);
console.log(y);
console.log(z);

function func() {
  let x = 1;
  const y = 2;
  var z = 3; // legal because var is function scope
  console.log(x);
  console.log(y);
  console.log(z);
}
func();

console.log(x);
console.log(y);
console.log(z);
