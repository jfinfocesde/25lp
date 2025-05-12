document.addEventListener('DOMContentLoaded', function() {
  // Función para generar hash SHA-256
  async function sha256(message) {
    // Codificar como UTF-8
    const msgBuffer = new TextEncoder().encode(message);
    // Hash el mensaje
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    // Convertir ArrayBuffer a Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    // Convertir bytes a string hexadecimal
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }

  // Buscar todos los elementos con la clase 'password-protected'
  const protectedElements = document.querySelectorAll('.password-protected');
  
  protectedElements.forEach(function(element) {
    const contentElement = element.querySelector('.protected-content');
    const passwordForm = element.querySelector('.password-form');
    const passwordInput = element.querySelector('.password-input');
    const submitButton = element.querySelector('.password-submit');
    const passwordHint = element.querySelector('.password-hint');
    
    // Ocultar el contenido protegido inicialmente
    if (contentElement) {
      contentElement.style.display = 'none';
    }
    
    // Manejar el envío del formulario de contraseña
    if (submitButton && passwordInput) {
      submitButton.addEventListener('click', async function(e) {
        e.preventDefault();
        const password = passwordInput.value.trim();
        
        // Obtener el hash almacenado (o usar un hash predeterminado)
        const correctHash = element.getAttribute('data-password-hash') || '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4'; // Hash de '1234'
        
        // Calcular el hash de la contraseña ingresada
        const inputHash = await sha256(password);
        
        if (inputHash === correctHash) {
          // Mostrar el contenido protegido
          if (contentElement) {
            contentElement.style.display = 'block';
          }
          // Ocultar el formulario de contraseña
          if (passwordForm) {
            passwordForm.style.display = 'none';
          }
        } else {
          // Mostrar mensaje de error
          if (passwordHint) {
            passwordHint.textContent = 'Contraseña incorrecta. Inténtalo de nuevo.';
            passwordHint.style.color = 'red';
            passwordHint.style.display = 'block';
          }
        }
      });
    }
  });
});