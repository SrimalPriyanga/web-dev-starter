setTimeout(() => {
  console.log('log from timer');
}, 3000)

function higherOrderFunction(callbackFunction) {
  console.log("inside higher order function");
  callbackFunction();
}

higherOrderFunction(function () {
  console.log("inside callback function");
});
