// global variable
import { changeTheme, menuBar, menuToggle } from "./utils.js";
let isDayTheme = JSON.parse(localStorage.getItem("theme"));

if (isDayTheme === null) {
  localStorage.setItem("theme", JSON.stringify(false));
  isDayTheme = false;
}
window.onload = main();

function main() {
  menuBar();
  menuToggle();
  smoothScroll();
  topBar();
  changeTheme();
  youtubeLazyLoading();
}

function smoothScroll() {
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');

    function scrollToTarget(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const topOffset = target.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }

    links.forEach((link) => {
      link.addEventListener("click", scrollToTarget);
    });
  });
}

function topBar() {
  const tabs = document.querySelectorAll("#top_bar a");
  const tabItems = document.querySelectorAll("#top_bar_tab .tab_item");
  let isMobile = window.screen.width <= 564;

  function handleTabClick(index) {
    const selectedTab = `${tabs[index].innerText.split(" ")[0]}_active`;
    for (let i = 0; i < 3; i++) {
      const tmpSelect = `${tabs[i].innerText.split(" ")[0]}_active`;
      if (!isMobile) {
        tabItems[i].classList.remove(tmpSelect);
      }
      tabs[i].classList.remove("tab_active");
    }
    tabs[index].classList.add("tab_active");
    if (!isMobile) {
      tabItems[index].classList.add(selectedTab);
    }
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      handleTabClick(index);
    });
  });

  if (!isMobile) {
    tabs.forEach((tab) => {
      tab.href = "#";
    });
  } else {
    for (let i = 0; i < 3; i++) {
      const tmpSelect = `${tabs[i].innerText.split(" ")[0]}_active`;
      tabItems[i].classList.add(tmpSelect);
    }
  }
}

function youtubeLazyLoading() {
  const introDiv = document.getElementById("intro");
  document.onload = setTimeout(() => {
    introDiv.style.display = "block";
  }, 500);
}
