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
