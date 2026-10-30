var entrar = document.getElementById('entrar');
        var email = document.getElementById('email');

        entrar.addEventListener('click', function () {
            var email = document.getElementById('email').value;
            var emailErrado = document.getElementById('emailInvalido');
            var senha = document.getElementById('senha').value;
            var validacao = validarEmail(email);
            if (validacao == true) {
                emailErrado.classList.add("naoMostrar");
                if (senha == '') {
                    alert('Preencha o campo de senha!');
                } else {
                    alert('Logado com sucesso!');
                }
            } else {
                emailErrado.classList.remove("naoMostrar");
            }
        });

        email.addEventListener('keydown', function () {
            var emailErrado = document.getElementById('emailInvalido');
            emailErrado.classList.add("naoMostrar");
        })

        function validarEmail(email) {
            var validar = /\S+@\S+\.\S+/;
            return validar.test(email);
        }
