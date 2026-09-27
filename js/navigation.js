const MOBILE_BREAKPOINT = 768;

function initNavigation() {
  const menuButton = document.querySelector(".menu-button");
  const navigationMenu = document.querySelector(".nav-links");

  if (!menuButton || !navigationMenu) {
    return;
  }

  menuButton.addEventListener("click", () => {
    const isOpen = navigationMenu.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navigationMenu.addEventListener("click", (event) => {
    if (event.target.matches("a") && window.innerWidth < MOBILE_BREAKPOINT) {
      navigationMenu.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

export { initNavigation };
