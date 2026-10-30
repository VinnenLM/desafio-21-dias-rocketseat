var opacidade;
    var escurecer;
    var numero;

    function aumentarNumero() {
        numero = setInterval(function () {
            let texto = document.getElementById("porcento");
            if (texto.innerHTML < 100) {
                texto.innerHTML = parseInt(texto.innerHTML) + 1;
            }
        }, 30);
    }

    function escurecerTexto() {
        escurecer = setInterval(function () {
            let texto = document.getElementById("porcento");
            texto.classList.add('escuro');
            let porcentagem = document.getElementById("porcentagem");
            porcentagem.classList.add('escuro');
        }, 950);
    }

    function mudarOpacidade(elem) {
        opacidade = setInterval(function () {
            elem.classList.add('tamanho');
            elem.classList.add('opacidade');
        }, 50);
    }

    function mover() {
        clearInterval(opacidade);
        clearInterval(escurecer);
        clearInterval(numero);
        let elem = document.getElementById("loading-bar");
        elem.classList.remove('tamanho');
        elem.classList.remove('opacidade');
        let valor = document.getElementById("porcento");
        valor.innerHTML = 0;
        valor.classList.remove('escuro');
        let porcentagemTexto = document.getElementById("porcentagem");
        porcentagemTexto.classList.remove('escuro');
        aumentarNumero();
        escurecerTexto();
        mudarOpacidade(elem);
    }