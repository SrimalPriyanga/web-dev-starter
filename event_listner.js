// function fun(params) {
//   let count;
// }
// console.log(fun.toString());

function eventListenerClosure() {
let count = 0;
document
  .getElementById("count")
  .addEventListener("click", function eventClick() {
    console.log(`Count: ${++count}`);
  });
  
}

eventListenerClosure()