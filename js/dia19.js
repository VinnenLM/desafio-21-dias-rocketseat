let ativo = false;
let clientID = "SEpZT9Unc1kl4yuBgR5ZfcE4nUrnR6X5l50nXx_Z_8I";
const endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;

// Mostra ou esconde o loading e bloqueia o botao enquanto carrega
function mostrarLoading(ligado) {
    $('.loading').prop('hidden', !ligado);
    $('.botao button').prop('disabled', ligado);
}

function exibirImagem(url) {
    if (ativo == false) {
        let imagem = $('<img>').attr({ 'src': url, 'class': 'img-importada' });
        $('.imagem').append(imagem);
        ativo = true;
    } else {
        $('.img-importada').attr('src', url);
    }
}

function gerarImagem() {
    mostrarLoading(true);

    fetch(endpoint)
        .then(res => res.json())
        .then(image => {
            const url = image.links.download;

            // So troca a imagem depois que ela terminou de baixar
            const pre = new Image();
            pre.onload = () => {
                exibirImagem(url);
                mostrarLoading(false);
            };
            pre.onerror = () => mostrarLoading(false);
            pre.src = url;
        })
        .catch(() => mostrarLoading(false));
}

$(document).ready(function () {
    gerarImagem();
});
