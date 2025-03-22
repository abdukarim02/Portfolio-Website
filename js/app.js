
// alert('hello');
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
document.addEventListener("DOMContentLoaded", function () {
    const parallaxElements = [
        { selector: ".info", speed: -0.05 },
        { selector: ".bg", speed: 0.05  }
    ];

    document.addEventListener("scroll", function () {
        if (window.innerWidth < 990) return;

        let scrollPosition = window.scrollY;

        parallaxElements.forEach(({ selector, speed }) => {
            document.querySelectorAll(selector).forEach(element => {
                let rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    element.style.opacity = 1;
                    element.style.transform = `translateX(${scrollPosition * speed}px)`;
                } else {
                    element.style.opacity = 0;
                }
            });
        });
    });
});
document.addEventListener("scroll", () => {
    if (window.innerWidth < 990) return;
  
    document.querySelectorAll("[data-speed]").forEach((element) => {
      const speed = parseFloat(element.getAttribute("data-speed"));
      const scrollY = window.scrollY;
  
      // Параллакс-эффект (движение вверх-вниз)
      const yPos = scrollY * speed;
      
      // Изменение размера (уменьшение при прокрутке вниз)
      let scale = 1 - scrollY * 0.0005; 
      scale = Math.max(0.5, scale); // Минимальный размер - 0.5x
  
      // Объединение transform
      element.style.transform = `translateX(${yPos}px) scale(${scale})`;
    });
  });
  