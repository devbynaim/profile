let isMobile = false;
let isDayTheme = JSON.parse(localStorage.getItem("theme"));
const cssVariables = {
  day: {
    "--primary-color": "#F0F2F5",
    "--primary-color-light": "#ffffffbd",
    "--secondary-color": "#ffffff",
    "--secondary-color-light": "#ffffff5c",
    "--accent-color": "#0068a3",
    "--accent-color-light": "#0068a380",
    "--selected-color": "#000000",
    "--non-selected-color": "#a9a9a9",
    "--text-color": "#000000",
    "--activeTabBg-color": "#0068a3",
    "--activeTabTxt-color": "white",
    "--font-size": "16px",
    "--footer-link-color": "var(--non-selected-color)",
    "--shadow": "0px 0px 3px 1px #0d132212",
    "--shadow-project": "0px 0px 3px 1px #00000014",
  },
  night: {
    "--primary-color": "#222a42",
    "--primary-color-light": "#181f33",
    "--secondary-color": "#0d1322",
    "--secondary-color-light": "#0d1322",
    "--accent-color": "#0068a3",
    "--accent-color-light": "#0068a380",
    "--selected-color": "#ffffff",
    "--non-selected-color": "#a9a9a9",
    "--text-color": "#ffffff",
    "--activeTabBg-color": "#ffffff",
    "--activeTabTxt-color": "black",
    "--font-size": "16px",
    "--footer-link-color": "var(--non-selected-color)",
    "--shadow": "0px 0px 3px 1px #0d1322",
    "--shadow-project": "0px 0px 3px 1px #ffffff14",
  },
};
function menuBar() {
  const menuItems = document.querySelectorAll("#menu-list li a");
  const currentPage = window.location.pathname;

  menuItems.forEach((item) => item.classList.remove("active_page"));

  const pageToIndexMap = {
    "/index.html": 0,
    "/": 0,
    "/projects.html": 1,
    "/blog.html": 2,
    "/js.html": 3,
  };

  const activePageIndex = pageToIndexMap[currentPage];
  if (activePageIndex !== undefined) {
    menuItems[activePageIndex].classList.add("active_page");
  }
}

function menuToggle() {
  const menuList = document.getElementById("menu-list");
  const menu = document.getElementById("menu");
  const closeMenu = document.getElementById("close");

  menu.onclick = () => {
    menuList.classList.toggle("menu_active");
  };
  closeMenu.onclick = () => {
    menuList.classList.toggle("menu_active");
  };
}

function changeTheme() {
  const root = document.documentElement;
  const theme = document.getElementById("theme");
  const mode = document.getElementById("mode");
  const logo = document.querySelectorAll(".logo");
  const menu = document.getElementById("menu");
  let isDay = isDayTheme;
  function applyTheme(theme) {
    for (const variable in cssVariables[theme]) {
      root.style.setProperty(variable, cssVariables[theme][variable]);
    }
    const newTheme = theme === "day" ? "night" : "day";
    mode.src = `./public/images/${newTheme}.png`;
    menu.src = `./public/images/menu_${newTheme}.png`;
    logo.forEach((singleLogo) => {
      singleLogo.src = `./public/images/logo_${newTheme}.png`;
    });
  }
  changeTheme();

  theme.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("theme", JSON.stringify(isDay));
    changeTheme();
  });

  function changeTheme() {
    const currentTheme = isDay ? "day" : "night";
    applyTheme(currentTheme);
    isDay = !isDay;
  }
}

export { menuBar, menuToggle, changeTheme };
