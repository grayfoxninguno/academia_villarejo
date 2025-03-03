document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const relativeContainer = document.querySelector(".relative-container");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }
    });
    
    function actualizarPadding() {
        document.documentElement.style.setProperty('--header-height', header.offsetHeight + 'px');
    }

    actualizarPadding();
    window.addEventListener("resize", actualizarPadding);
});