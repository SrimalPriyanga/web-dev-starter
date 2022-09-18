const me = {
  firstName: "Srimal",
  lastName: "Priyanga",
};
const imal = {
  firstName: "Imalka",
  lastName: "Perera",
};

//1
function printName1(person) {
  return console.log(`1 My name is ${person.firstName} ${person.lastName}`);
}
printName1(me);

//2
function printName2(method) {
  return console.log(
    `2.${method} My name is ${this.firstName} ${this.lastName}`
  );
}
printName2.call(me, "call");
printName2.apply(me, ["apply"]);
let myName = printName2.bind(me, "bind");
myName();
printName2.call(imal, "call");
printName2.apply(imal, ["apply"]);
let imalName = printName2.bind(imal, "bind");
imalName();

//3
function printName3(method) {
  return console.log(
    `3.${method} My name is ${this.firstName} ${this.lastName}`
  );
}

Function.prototype.myBind = function (...params) {
  let fun = this,
    params2 = params.slice(1);
  return function () {
    fun.call(params[0], params2);
  };
};

let polyFillMyBind = printName3.myBind(me, "callingToMyBind");
console.log(polyFillMyBind);
polyFillMyBind();

//4
function printName4(method) {
  return console.log(
    `4.${method} My name is ${this.firstName} ${this.lastName}`
  );
}
Function.prototype.myCall = function (context, ...args) {
  context.myFn = this;
  context.myFn(...args);
};

Function.prototype.myCall2 = function (...params) {
  let self = params[0];
    self.fun = this;
    params2 = params.slice(1);
  self.fun([params2]);
};

printName4.myCall(me, "callingToMyCall");
printName4.myCall2(imal, "callingToMyCall2");
