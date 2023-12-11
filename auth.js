document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            handleLogin();
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            handleRegister();
        });
    }

    function handleLogin() {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        
        const storedUserData = JSON.parse(localStorage.getItem(email));

        console.log("Datos almacenados:", storedUserData);

        if (storedUserData && storedUserData.username === username && storedUserData.password === password) {
            document.getElementById("loginMessage").innerText = "Inicio de sesión exitoso.";

            
            window.location.replace("index.html");
        } else {
            document.getElementById("loginMessage").innerText = "Nombre de usuario, correo electrónico o contraseña no válidos.";
        }
    }

    function handleRegister() {
        const newUsername = document.getElementById("newUsername").value;
        const newEmail = document.getElementById("newEmail").value;
        const newPassword = document.getElementById("newPassword").value;

        
        const newUser = {
            username: newUsername,
            password: newPassword,
        };

        localStorage.setItem(newEmail, JSON.stringify(newUser));
        document.getElementById("registerMessage").innerText = "Registro exitoso.";
    }
});
