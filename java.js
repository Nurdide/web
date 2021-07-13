const burger = document.querySelector(".burger");
const list = document.querySelector(".list");

burger.addEventListener("click", mobileMenu);

function mobileMenu() {
   burger.classList.toggle("nav_active");
    list.classList.toggle("nav_active");
}

