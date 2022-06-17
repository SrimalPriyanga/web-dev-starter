document.querySelector("#grandParent").addEventListener(
  "click",
  (e) => {
    console.log("grandParent Clicked");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("parent Clicked");
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("child Clicked");
  },
  true
);
