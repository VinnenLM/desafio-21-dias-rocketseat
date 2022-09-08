var opcao = document.querySelectorAll(".quiz-respostas span");
    var botao = document.querySelector(".botao button");

    var tentativa = false;

    opcao.forEach(op => {
        op.addEventListener('click', function () {
            if (tentativa == false) {
                var opcaoSelecionada = this.innerHTML;
                if (opcaoSelecionada == '&lt; br &gt;') {
                    op.style.backgroundColor = "green";
                    op.style.boxShadow = "1px 1px 1px 1px black inset";
                } else {
                    op.style.backgroundColor = "red";
                    op.style.boxShadow = "1px 1px 1px 1px black inset";
                }
                tentativa = true;
            }

        })
    });

    botao.addEventListener('click', function () {
        tentativa = false;
        opcao.forEach(op => {
            op.style.backgroundColor = "rgba(70,70,70)";
            op.style.boxShadow = "none";
        })
    })