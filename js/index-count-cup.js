const time2 = 1000;
const step2 = 5;
let cups = document.querySelector(".cups");

function outNum(num2, tag2) {
  n2 = 0;
  let t2 = Math.round(time2 / (num2 / step2));
  let interval2 = setInterval(() => {
    n2 = n2 + step2;
    if (n2 == num2) {
      clearInterval(interval2);
    }
    tag2.innerHTML = n2;
  }, t2);
}

outNum(cups.innerHTML, cups)