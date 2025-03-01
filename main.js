const menuBtn = document.querySelector("#menu-btn");
const dropMenu = document.querySelector("#drop-menu");
let show = false;

menuBtn.addEventListener("click", () => {
  show = !show;
  if (show === false) {
    dropMenu.style.height = "0px";
  } else {
    dropMenu.style.height = "25vh";
  }
});
