// Creating instance
const instance = {
  key: "Value",
  __proto__: {
    bar_prop: "bar prototype values",
    __proto__: {
      foo_prop: "foo prototype values",
      // This can be omitted
      __proto__: Object.prototype,
    },
  },
};
console.log(instance.foo_prop);
console.log(instance.bar_prop);
console.log(instance);
console.log(instance.__proto__);
console.log(instance.__proto__.__proto__);
console.log(instance.__proto__.__proto__.__proto__);
console.log(instance.__proto__.__proto__.__proto__.__proto__);

// Object
console.log(Object.prototype);
console.log(Object.prototype.__proto__);
console.log(Object.__proto__.__proto__.__proto__);

const obj = {};
console.log(obj.__proto__);
console.log(obj.__proto__.__proto__);

// Array prototype
const arr = [];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

// Function prototype
const func = function () { };
console.log(func.__proto__);
console.log(func.__proto__.__proto__);
console.log(func.__proto__.__proto__.__proto__);

Function.prototype.myMethod = function (params) {
  console.log(params);
}
func.myMethod('Hello');
const func2 = function (params) { }
func2.myMethod("world");
