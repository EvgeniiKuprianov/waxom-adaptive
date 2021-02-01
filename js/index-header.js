let showHeader = document.querySelector(".wrapper-header");
let scroll = 0;

window.addEventListener("scroll", function () {
  let currentPos = offset(showHeader).top ;

  if (currentPos < scroll) {
    showHeader.classList.add("fixed");
  } else if (currentPos > scroll) {
    showHeader.classList.remove("fixed");
  } else if (currentPos == 0) {
    showHeader.classList.remove("fixed");
  }
  function offset (el) {
    const rect = el.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: scrollTop }
  }
  scroll = currentPos;
});


