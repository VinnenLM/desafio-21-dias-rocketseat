let ativo = false;
let clientID = "SEpZT9Unc1kl4yuBgR5ZfcE4nUrnR6X5l50nXx_Z_8I";
const endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;

function gerarImagem() {
    fetch(endpoint)
        .then(res => res.json())
        .then(image => {
            if (ativo == false) {
                let imagem = $('<img>').attr({ 'src': image.links.download, 'class': 'img-importada' });
                $('.imagem').append(imagem);
                ativo = true;
            } else {
                $('.img-importada').attr('src', image.links.download);
            }
        })
}

$(document).ready(function () {
    gerarImagem();
});