let user = {
  firstName: "Srimal",
  lastName: "Priyanga",
};

function printFullName(age, surname, country) {
  console.log(
    `${this.firstName} ${this.lastName} ${surname}, ${age} , ${country}`
  );
}

const myName = printFullName.bind(user, 31, "Fonseka");
myName("Sri Lanka");

/**
 * myBind PolyFil
 * @param  {...any} params 
 * @returns 
 * @func access calling `function` by this
 * @self get `this` as `self` to pass in myBind
 * @args get other arguments
 * @innerParams get invocation time arguments
 * [...args, ...innerParams] pass combines arguments array to `apply`
 */
Function.prototype.myBind = function (...params) {
  let func = this, 
    self = params[0],
    args = params.slice(1);
  return function (...innerParams) {
    func.apply(self, [...args, ...innerParams]);
  };
};

const myName2 = printFullName.myBind(user, 31, "Fonseka");
myName2("Sri Lanka");
