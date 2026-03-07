let getHole = index => document.getElementById("hole" + index);
let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = function() {
    if (getHole(i).className.includes("hole_has-mole")) {
      dead.textContent = Number(dead.textContent) + 1;
    } else {
      lost.textContent = Number(lost.textContent) + 1;
    }

    if (dead.textContent == 10) {
      window.alert("Победа!");
    }

    if (lost.textContent == 5) {
      window.alert("Вы проиграли!");
    }

    if (dead.textContent == 10 || lost.textContent == 5) {
      dead.textContent = 0;
      lost.textContent = 0;
    }
  }
}