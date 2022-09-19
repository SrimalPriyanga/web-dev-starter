/**
 * Using .bing() method
 * @param {*} num1 first value
 * @param {*} num2 second value
 * @returns console log multiplication of num1 & num2
 */
const multiply = function (num1, num2) {
  return console.log(num1 * num2);
};

const multiplyBy2 = multiply.bind(this, 2); // request a function copy passing initializing params
multiplyBy2(5); // access and call that function passing more params

const multiplyBy3 = multiply.bind(this, 3); // request a function copy passing initializing params
multiplyBy3(10); // access and call that function passing more params
multiplyBy3(9); // access and call that function passing more different params

/**
 * Using closures
 * @param {*} num1 closure function param
 * @returns a function including outer function's lexical scope value(num1).
 * The return function console log multiplication of num1 & num2
 */
const multiplyByClosure = function (num1) {
  return function (num2) {
    console.log(num1 * num2);
  };
};

const multiplyBy10 = multiplyByClosure(10);
multiplyBy10(7);

const multiplyBy20 = multiplyByClosure(20);
multiplyBy20(8);
