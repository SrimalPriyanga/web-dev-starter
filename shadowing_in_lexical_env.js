let a = 1;
const aA = 0.1;
var aAa = "aAa";
{
  {
    {
      console.log(a);
      console.log(aA);
      console.log(aAa);
    }
  }
}

let b = 2;
const bB = 0.2;
var bBb = "bBb";
{
  let b = 20;
  const bB = 0.02;
  var bBb = "bBbB";
  {
    {
      console.log(b);
      console.log(bB);
      console.log(bBb);
    }
  }
}

let c = 3;
{
  let c = 30;
  {
    let c = 300;
    {
      console.log(c);
    }
  }
}

let d = 4;
{
  let d = 40;
  {
    let d = 400;
    {
      let d = 4000;
      console.log(d);
    }
  }
}
