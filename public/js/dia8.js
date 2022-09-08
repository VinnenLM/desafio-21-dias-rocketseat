$(document).ready(function () {

    botao = document.querySelector('.botao');

    botao.addEventListener('click', function () {

        if (botao.classList.contains('margin')) {
            botao.classList.remove("margin");

            $(".fa-moon").addClass("transparente");
            $(".fa-moon").addClass("transicao-lua");

            $(".fa-sun").removeClass("transparente");
            $(".fa-sun").removeClass("transicao-sol");

            $("body").removeClass("fundo-escuro");
            $("h1").removeClass("cor");
        } else {
            botao.classList.add("margin");

            $(".fa-moon").removeClass("transparente");
            $(".fa-moon").removeClass("transicao-lua");

            $(".fa-sun").addClass("transparente");
            $(".fa-sun").addClass("transicao-sol");

            $("body").addClass("fundo-escuro");
            $("h1").addClass("cor");
        }
    });

});