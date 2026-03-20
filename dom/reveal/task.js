const revealElements = Array.from(document.querySelectorAll(".reveal"));
window.addEventListener("scroll", function() {
  for (let element of revealElements) {
    const revealElementTop = element.getBoundingClientRect().top;
    const revealElementBottom = element.getBoundingClientRect().bottom;
    const viewportHeight = this.window.innerHeight;
    if (revealElementTop >= 0 && revealElementBottom <= viewportHeight) {
      element.classList.add("reveal_active");
    } else {
      element.classList.remove("reveal_active");
    }
  }
});