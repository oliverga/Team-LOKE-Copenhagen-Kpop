const btn = document.querySelector(".toggle-btn");
const menuMobile = document.querySelector(".header_nav_menu_container_mobile");

function toggleMenu() {
  menuMobile.classList.toggle("shown");

  const menuShown = menuMobile.classList.contains("shown");

  if (menuShown) {
    console.log(menuShown); 
    btn.textContent = "Close";
  } else {
    console.log(menuShown); 
    btn.textContent = "Menu";
  }
}

btn.addEventListener("click", toggleMenu);