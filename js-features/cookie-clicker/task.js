let counter = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");
cookie.onclick = function() {
  counter.textContent = Number(counter.textContent) + 1;
  cookie.width = 250;
  setTimeout(() => cookie.width = 200, 50);
}
