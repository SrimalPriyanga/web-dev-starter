// Debouncing in Javascript
let counter = 0;
const getData = () => {
  // calls an API and get data
  console.log("Fetching Data..." + counter++);
};

const debounce = function (fn, delay) {
  let timer;

  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, delay);
  };
};

const setTimer = debounce(getData, 300);
