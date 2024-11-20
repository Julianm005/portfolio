document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burger-menu");
  const navList = document.getElementById("nav-list");

  burgerMenu.addEventListener("click", () => {
    navList.classList.toggle("show");

    // Add a class to change the burger icon to a "close" icon
    burgerMenu.classList.toggle("open");
  });
});
