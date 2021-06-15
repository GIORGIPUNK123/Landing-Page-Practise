let burgerBar = document.getElementById("burger-bar");
let barHeader = document.getElementById("mobile-header");
let horizontalHeader = document.getElementById("horizontal-header");
let header = document.getElementById("header");
let nav = document.getElementById("mobile-navbar");
let newLogo = document.getElementById("logo-logo-div");
let oldLogoDiv = document.getElementById("logo-div");
let headerUL = document.getElementById("header-nav-ul");
let body = document.getElementById("body");

burgerBar.addEventListener("click", function () {
  horizontalHeader.classList.toggle("button-clicked");
  header.classList.toggle("padding-disable");
  nav.classList.toggle("mobile-nav-turned-on");
  newLogo.classList.toggle("button-clicked-logo");
  oldLogoDiv.classList.toggle("old-logo-div");
  headerUL.classList.toggle("header-ul-button-clicked");
  burgerBar.classList.toggle("burger-bar-30-percent");
  body.classList.toggle("vertical-scrollbar")
});
