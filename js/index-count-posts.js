const time5 = 1000;
const step5 = 5;

let posts = document.querySelector(".posts");

function outNum(num5, tag5) {
  n5 = 0;
  let t5 = Math.round(time5 / (num5 / step5));
  let interval5 = setInterval(() => {
    n5 = n5 + step5;
    if (n5 == num5) {
      clearInterval(interval5);
    }
    tag5.innerHTML = n5;
  }, t5);
}

outNum(posts.innerHTML, posts)
