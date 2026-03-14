const page = document.querySelector("body");

page.addEventListener("click", function (event) {
  if (event.target.className === "dropdown__value") {
    const dropdown = event.target.closest(".dropdown");
    const dropdownValue = event.target;
    const dropdownList = dropdown.querySelector(".dropdown__list");
    const dropdownItems = Array.from(dropdown.querySelectorAll(".dropdown__item"));

    dropdownList.classList.toggle("dropdown__list_active");
    dropdownItems.forEach(item => item.addEventListener("click", function (event) {
      event.preventDefault();
      dropdownValue.textContent = item.textContent;
      dropdownList.classList.remove("dropdown__list_active");
    }))
  }
})