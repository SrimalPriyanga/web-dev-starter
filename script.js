const arr = [1, 2, 3, 4];
// // const arr2 = arr.filter((item) => item % 2);

// //console.log(arr2);

// // function fun(params) {
// //   let count;
// // }

// // console.log(fun.toString());

// // console.log(
// //   arr.reduce((previous, current) => {
// //     if (current % 2) {
// //       console.log(current, previous);
// //       previous.push(current);
// //     }
// //     return previous;
// //   }, [])
// // );

// let myName = {
//   firstName: "Srimal",
//   lastName: "Priyanga",
//   printFullName: function (town, year) {
//     console.log(this.firstName + " " + this.lastName + " " + town + year);
//   },
// };

// const printFullName = function (town, year) {
//   console.log(this.firstName + " " + this.lastName + " " + town + year);
// };

// let friendName = {
//   firstName: "Alex",
//   lastName: "Rox",
// };

// let studentName = {
//   firstName: "Bob",
//   lastName: "Allen",
// };

// myName.printFullName("City", 2012);
// // Function burrowing
// myName.printFullName.call(friendName, "Maharagama", 2013);
// myName.printFullName.apply(studentName, ["Colombo", 2016]); // arguments as array

// // bind
// myName.printFullName.bind();
// const output = myName.printFullName.bind(friendName, "New York", 2020);
// console.log(output);
// output();

const inst = {
  key: "Va",
  __proto__: {
    bar_prop: "bar val",
    __proto__: {
      foo_prop: "foo val",
      // This can be omitted
      __proto__: Object.prototype,
    },
  },
};
console.log(inst.foo_prop);
console.log(inst.bar_prop);
console.log(inst);
