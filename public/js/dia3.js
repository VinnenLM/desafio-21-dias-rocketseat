$(document).ready(function () {

    botao = document.getElementById('botao');

    botao.addEventListener('click', function () {

        if (botao.classList.contains('margin')) {
            botao.classList.remove("margin");
            $(".fundo img.top").toggleClass("transparent");
            $(".hello").toggleClass("transparent");
        } else {
            botao.classList.add("margin");
            $(".fundo img.top").toggleClass("transparent");
            $(".hello").toggleClass("transparent");
        }
    });
});