let timer = document.getElementById("timer");
let timerId = setInterval(function() {
  if (timer.textContent != 0) {
    timer.textContent -= 1;
  } else {
    window.alert("Вы победили в конкурсе!");
    clearInterval(timerId);
  }    
}, 1000);