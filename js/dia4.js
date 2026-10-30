var btn = document.querySelectorAll(".botoes span");
    var input = document.querySelector(".input");
    var operador = document.querySelectorAll(".operador");

    for (var i = 0; i < btn.length; i++) {
        //botoes
        btn[i].addEventListener('click', function () {

            var btnVal = this.innerHTML;
            var inputVal = input.innerHTML;

            switch (btnVal) {
                case "√":
                    input.innerHTML = parseFloat((Math.sqrt(inputVal)).toFixed(4));
                    break;
                case "x²":
                    input.innerHTML = Math.round(inputVal * inputVal);
                    break;
                case "C":
                    input.innerHTML = "";
                    break;
                case "DEL":
                    input.innerHTML = inputVal.slice(0, -1);
                    break;
                case "=":

                    var equacao = inputVal;
                    if (equacao) {
                        try {
                            input.innerHTML = eval(equacao);
                        } catch (e) {
                            alert('Erro na expressão');

                        }
                    }
                    break;
                default:
                    input.innerHTML += btnVal;
                    break;
            }

        });
    }