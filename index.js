document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const closeMenu = document.getElementById("close-menu");

  // Mostrar menú
  menuToggle.addEventListener("click", function () {
    menu.classList.add("show");
  });

  // Cerrar menú con la "X"
  closeMenu.addEventListener("click", function () {
    menu.classList.remove("show");
  });

  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll(".menu nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const offset = 100; // Ajusta el desplazamiento superior (ajusta este valor según tu necesidad)
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });
});