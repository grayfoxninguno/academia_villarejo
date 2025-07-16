document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });

  function actualizarPadding() {
    document.documentElement.style.setProperty(
      "--header-height",
      header.offsetHeight + "px"
    );
  }

  actualizarPadding();
  window.addEventListener("resize", actualizarPadding);

/* Menu desplegable */
const menu = document.querySelector('.nav-links');
const toggleBtn = document.querySelector(".menu-toggle");

// Mostrar menu
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  // Si el clic fue fuera del menú y del botón
  if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
    menu.classList.remove("show");
  }
});


/*Carousel*/
const carrusel = document.getElementById("carouselImages");
const total = carrusel.children.length;
let indice = 0;

function moverCarrusel(direccion) {
  indice = (indice + direccion + total) % total;
  actualizarCarrusel();
}

function actualizarCarrusel() {
  carrusel.style.transform = `translateX(-${indice * 100}%)`;
}

function abrirModal(src) {
  document.getElementById("modalImg").src = src;
  document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}