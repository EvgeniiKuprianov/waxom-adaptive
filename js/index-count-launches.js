const time3 = 1000;
const step3 = 5;

let launches = document.querySelector(".launches");


function outNum(num3, tag3) {
  n3 = 0;
  let t3 = Math.round(time3 / (num3 / step3));
  let interval3 = setInterval(() => {
    n3 = n3 + step3;
    if (n3 == num3) {
      clearInterval(interval3);
    }
    tag3.innerHTML = n3;
  }, t3);
}

outNum(launches.innerHTML, launches)