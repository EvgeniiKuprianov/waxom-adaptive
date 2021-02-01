const time4 = 1000;
const step4 = 5;
let likes = document.querySelector(".likes");

function outNum(num4, tag4) {
  n4 = 0;
  let t4 = Math.round(time4 / (num4 / step4));
  let interval4 = setInterval(() => {
    n4 = n4 + step4;
    if (n4 == num4) {
      clearInterval(interval4);
    }
    tag4.innerHTML = n4;
  }, t4);
}

outNum(likes.innerHTML, likes)