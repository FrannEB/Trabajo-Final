document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
  
    if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        handleLogin();
      });
    }
  
    function handleLogin() {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      fetch('https://franneb.github.io/Trabajo-Final.github.io/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            document.getElementById("loginMessage").innerText = "Inicio de sesión exitoso.";
            // Redirigir a la página principal
            window.location.href = "index.html";
          } else {
            document.getElementById("loginMessage").innerText = data.message;
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  });