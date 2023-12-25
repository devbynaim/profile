// global variable
import { changeTheme, menuBar, menuToggle } from "./utils.js";
let isDayTheme = JSON.parse(localStorage.getItem("theme"));

if (isDayTheme === null) {
  localStorage.setItem("theme", JSON.stringify(false));
  isDayTheme = false;
}
window.onload = main();

function main() {
  menuBar();
  menuToggle();
  changeTheme();
}
