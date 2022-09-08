function gerarSenha() {
    let tamanhoSenha = document.querySelector('#tamanho').value;
    if (tamanhoSenha > 0 && tamanhoSenha <= 25) {
        let valores = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
        let senha = "";
        for (let i = 0; i < tamanhoSenha; ++i) {
            var valorAleatorio = Math.floor(Math.random() * valores.length);
            senha += valores.substring(valorAleatorio, valorAleatorio + 1);
        }
        document.querySelector('.campo').innerText = senha;
    } else {
        alert("Bota um numero decente ae!")
    }
}