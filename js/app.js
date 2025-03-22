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
        { selector: ".info", speed: -0.3 },
        { selector: ".bg", speed: 0.3 }
    ];

    document.addEventListener("scroll", function () {
        if (window.innerWidth < 990) return;

        let scrollPosition = window.scrollY;

        parallaxElements.forEach(({ selector, speed }) => {
            let element = document.querySelector(selector);
            if (element) {
                element.style.transform = `translateX(${scrollPosition * speed}px)`;
            }
        });
    });
});



