const page = document.querySelector("body");

page.addEventListener("click", function (event) {
  if (event.target.className === "tab") {
    const tabsGroup = event.target.closest(".tabs");
    const tabs = Array.from(tabsGroup.querySelectorAll(".tab"));
    const tabsContent = Array.from(tabsGroup.querySelectorAll(".tab__content"));

    tabs.forEach(item => item.classList.remove("tab_active"));
    tabsContent.forEach(item => item.classList.remove("tab__content_active"));
    
    event.target.classList.add("tab_active");
    const tabIndex = tabs.indexOf(event.target);
    tabsContent[tabIndex].classList.add("tab__content_active");
  }
})