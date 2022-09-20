/**
 * Disadvantages of using callbacks in JS is:
 * 1. May lead to callback hell by code increasing horizontally instead of vertically { Unreadable & Unmaintainable }. This structure called as Pyramid of Doom.
 * 2. Loosing the control over the code on developer, there is huge chance to brake the operation while inside the callbacks. This is known as the Inversion of Control.
 */

const user = { name: "Srimal", age: 31 };

api.createUser(user, function () {
  api.saveUser(function () {
    api.getUser(function () {
      api.displayUser();
    });
  });
});
