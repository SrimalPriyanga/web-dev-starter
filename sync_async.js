// -------------- Synchronous ----------------

console.log("Synchronous");
let a = 1;
let b = 2;

console.log(a);
console.log(b);

// -------------- Asynchronous ----------------

console.log("Asynchronous");

setTimeout(() => console.log(`Timer ${a}`), 1000);

fetch("/")
  .then(() => {
    console.log("onSuccess");
  })
  .catch((reason) => {
    console.log(reason);
  });

console.log(a);
console.log(b);

a = 100;
