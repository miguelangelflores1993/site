<script>
  // Función para desplazamiento suave
  function smoothScroll(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const targetId = event.target.getAttribute('href'); // Obtiene el hash del enlace
    const targetElement = document.querySelector(targetId); // Selecciona el elemento objetivo

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start'       // Alinea el elemento en la parte superior de la ventana
      });
    }
  }
</script>