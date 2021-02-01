let web = document.getElementsByClassName("web");
let photo = document.getElementsByClassName("photo");
let illustration = document.getElementsByClassName("illustration");
let app = document.getElementsByClassName("app");
let cards = document.getElementsByClassName("card");

let btnApp = document.querySelector(".btn-app");
let btnPhoto = document.querySelector(".btn-photography");
let btnDesign = document.querySelector(".btn-design");
let btnIllustr = document.querySelector(".btn-illustration");

let allbtn = document.querySelector(".cards-categories");

allbtn.addEventListener("click", (e) => {
  Array.from(cards).forEach((item) => {
    item.classList.add("active");
  });
  let target = e.target;
  if (target == btnIllustr) {
    openblock(illustration);
  } else if (target == btnDesign) {
    openblock(web);
  } else if (target == btnPhoto) {
    openblock(photo);
  } else if (target == btnApp) {
    openblock(app);
  } else {
    openblock(cards);
  }
});

function openblock(collection) {
  Array.from(collection).forEach((item) => {
    item.classList.remove("active");
  });
}
