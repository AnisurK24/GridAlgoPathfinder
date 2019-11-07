import Grid from "./grid";


$(document).ready(() => {
  new Grid($("#grid"));
  // console.log(Grid);
  const $newGridBtn = document.getElementById("GGrid");
  $newGridBtn.addEventListener("click", () => new Grid($("#grid")));

});


// console.log("Webpack is working!");