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

  document
    .getElementById("emailForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;
      let recipient = "destinatario@example.com"; // correo de destino

      let mailtoLink = `mailto:${recipient}?subject=Mensaje de ${email}&body=${encodeURIComponent(
        message
      )}`;

      window.location.href = mailtoLink;
    });
});
