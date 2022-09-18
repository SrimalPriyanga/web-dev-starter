// Function burrowing methods

let friendName = {
  firstName: "Alex",
  lastName: "Rox",
};

let studentName = {
  firstName: "Bob",
  lastName: "Allen",
};

let myName = {
  firstName: "Srimal",
  lastName: "Priyanga",
  printFullName: function (town, year) {
    console.log(this.firstName + " " + this.lastName + " " + town + " " + year);
  },
};

const printFullName = function (town, year) {
  console.log(this.firstName + " " + this.lastName + " " + town + year);
};

// Call to function within the object
myName.printFullName("City", 2012);

// call & apply methods
printFullName.call(friendName, "Maharagama", 2013);
printFullName.apply(studentName, ["Colombo", 2016]); // arguments as array

// bind
myName.printFullName.bind();

const outputFndName = printFullName.bind(friendName, "New York", 2020);
console.log(outputFndName); // this is the function which can invoke later
outputFndName(); // Calling when it needed
