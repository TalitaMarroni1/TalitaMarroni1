function verifyEmail(emailString) {
    try {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(emailString);
    } catch (error) {
        console.error("Erro ao verificar o e-mail:", error);
        return false;
    }
}

function verifyPassword(passwordString) {
    try {
        console.log("Senha recebida para verificação:", passwordString); // Adicionado para depuração
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const result = regex.test(passwordString);
        console.log("Resultado da verificação da senha:", result); // Adicionado para depuração
        return result;
    } catch (error) {
        console.error("Erro ao verificar a senha:", error);
        return false;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const RegisterButton = document.getElementById('RegisterButton');
    if (RegisterButton) {
        RegisterButton.addEventListener('click', function () {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const emailError = document.getElementById('emailError');
            const passwordError = document.getElementById('passwordError');

            const isEmailValid = verifyEmail(email);
            const isPasswordValid = verifyPassword(password);

            if (isEmailValid) {
                emailError.textContent = "";
                console.log("E-mail válido!");
            } else {
                emailError.textContent = "E-mail inválido!";
                console.log("E-mail inválido!");
            }

            if (isPasswordValid) {
                passwordError.textContent = "";
                console.log("Senha válida!");
            } else {
                passwordError.textContent = "Senha inválida! A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.";
                console.log("Senha inválida!");
            }
        });
    } else {
        console.error("Botão de registro não encontrado!");
    }
});