const hamburger = document.querySelector(".hamburger"),
    navUl = document.querySelector(".nav-ul"),
    navBrand = document.querySelector(".nav-brand"),
    inputBtn = document.querySelector("input[type='submit']");

hamburger.addEventListener("click", function () {
    if (hamburger.src.includes('hamburger')) {
        hamburger.setAttribute("src", "../images/icon-close.svg");
    } else {
        hamburger.setAttribute("src", "../images/icon-hamburger.svg");
    }
    navUl.classList.toggle("nav-ul-top");
    navBrand.classList.toggle("nav-brand-top");
});

inputBtn.addEventListener('click', function (e) {
    e.preventDefault();
});