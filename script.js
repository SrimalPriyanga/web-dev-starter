const arr = [1, 2, 3, 4];
// const arr2 = arr.filter((item) => item % 2);

//console.log(arr2);

// function fun(params) {
//   let count;
// }

// console.log(fun.toString());

// console.log(
//   arr.reduce((previous, current) => {
//     if (current % 2) {
//       console.log(current, previous);
//       previous.push(current);
//     }
//     return previous;
//   }, [])
// );

let myName = {
  firstName: "Srimal",
  lastName: "Priyanga",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

let otherName = {
  firstName: "I",
  lastName: "am",
};

myName.printFullName();
myName.printFullName.call(otherName);
