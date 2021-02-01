
let videoBlock = document.querySelector(".video-block");
let partnerBlock = document.querySelector(".wrapper-partner-block");

window.addEventListener("scroll", () => {
  let video = videoBlock.getBoundingClientRect().top;
  let partner = partnerBlock.getBoundingClientRect().top;
  videoBlock.style.backgroundPositionY = -(video / 6) + "px";
  partnerBlock.style.backgroundPositionY = -(partner / 3) + "px";
});

