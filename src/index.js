import Grid from "./grid";


$(document).ready(() => {
  new Grid($("#grid"));
  const $newGridBtn = document.getElementById("GGrid");
  $newGridBtn.addEventListener("click", () => new Grid($("#grid")));
});
