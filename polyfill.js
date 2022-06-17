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

Function.prototype.mybind = function (...params) {
  let fun = this,
    params2 = params.slice(1);
  return function () {
    fun.call(params[0], params2);
  };
};

let polyfillmyBind = printName3.mybind(me, "callingToMyBind");
console.log(polyfillmyBind);
polyfillmyBind();
