// Compound Statement
var a = 1000;
{
  var a = 10; // Shadowing
  let b = 200;
  const c = 3000;
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a); // been overridden

try {
  console.log(b); // can't access from the outside
} catch (error) {
  console.log(error);
}

try {
  console.log(c); // can't access from the outside
} catch (error) {
  console.log(error);
}
