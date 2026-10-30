var btn = document.querySelectorAll(".botoes span");
    var input = document.querySelector(".input");
    var operador = document.querySelectorAll(".operador");

    for (var i = 0; i < btn.length; i++) {
        //teclado
        document.onkeydown = function (event) {
            var key = event.keyCode;
            console.log(key);
            for (var e = 0; e <= 10; e++) {
                if (key === (48 + e)) {
                    input.innerHTML += e;
                }
            }
            for (var e = 0; e <= 9; e++) {
                if (key === (96 + e)) {
                    input.innerHTML += e;
                }
            }
            switch (key) {
                //backspace
                case 8:
                    input.innerHTML = input.innerHTML.slice(0, -1);
                    break;
                //apagar tudo
                case 27:
                    input.innerHTML = "";
                    break;
                //soma
                case 107:
                    input.innerHTML += "+";
                    break;
                //sub
                case 189:
                case 109:
                    input.innerHTML += "-";
                    break;
                //mult
                case 106:
                    input.innerHTML += "*";
                    break;
                //div
                case 111:
                case 193:
                    input.innerHTML += "/";
                    break;
                //ponto
                case 188:
                case 190:
                case 110:
                case 194:
                    input.innerHTML += ".";
                    break;
                //result
                case 13:
                case 187:
                    var equacao = input.innerHTML;
                    if (equacao) {
                        try {
                            input.innerHTML = eval(equacao);
                        } catch (e) {
                            alert('Erro na expressão');

                        }
                    }
                    break;

                default:
                    break;
            }
        };
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
