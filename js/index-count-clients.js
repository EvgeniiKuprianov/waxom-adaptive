const time1 = 1000;
const step1 = 1;
let clients = document.querySelector(".clients");

function outNum(num1, tag1) {
  n1 = 0;
  let t1 = Math.round(time1 / (num1/ step1));
  let interval1 = setInterval(() => {
    n1 = n1 + step1;
    if (n1 == num1) {
      clearInterval(interval1);
    }
    tag1.innerHTML = n1;
  }, t1);
}

outNum(clients.innerHTML, clients)