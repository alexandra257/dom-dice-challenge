// * 6 gives us access to numbers 0 - 5.9999999
//we then add 1, and floor the whole thing, rounding it down so we get a random number between 1 & 6
let randomNum1 = Math.floor(Math.random() * 6 + 1);
console.log(randomNum1);

// selecting the src attribute of the img elements and randomly generating which dice png will be displayed
document
  .querySelector("img")
  .setAttribute("src", `images/dice${randomNum1}.png`);
g;
