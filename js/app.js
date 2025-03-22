document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    });
  });
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".header__body-burger");
    const nav = document.querySelector(".header__body-menu");

    burger.addEventListener("click", function () {
        this.classList.toggle("active");
        nav.classList.toggle("active");
    });

    // Закрытие меню при клике вне его
    document.addEventListener("click", function (e) {
        if (!nav.contains(e.target) && !burger.contains(e.target)) {
            nav.classList.remove("active");
            burger.classList.remove("active");
        }
    });
});
  