const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event)
{

    event.preventDefault();

    const senhaInput = document.getElementById('senha');
    const senhaUsuario = senhaInput.value;
    const messageElement = document.getElementById('message');

    if (senhaUsuario === "admin"){
        messageElement.textContent = 'Correto, seja bem-vindo';
        messageElement.style.color = 'green';
        window.location.href = 'lista.html';
    } else{
        messageElement.textContent = 'Incorreto, a senha é admin, sem maiusculas nem espaços';
        messageElement.style.color = 'red';
    }
});