var iniciado;

    function contador() {
        $('#iniciar').prop("disabled", true);
        iniciado = setInterval(function () {
            //aumenta segundos
            let segAnterior = parseInt($('#seg').text());
            $('#seg').text(segAnterior + 1);
            if (segAnterior == 9) {
                //aumenta dezena de segundos
                $('#seg').text(0);
                let decSegAnterior = parseInt($('#decSeg').text());
                $('#decSeg').text(decSegAnterior + 1);
                if (decSegAnterior == 9) {
                    //aumenta minuto
                    $('#decSeg').text(0);
                    let minAnterior = parseInt($('#min').text());
                    $('#min').text(minAnterior + 1);
                    if (minAnterior == 9) {
                        //aumenta dezena de minuto
                        $('#min').text(0);
                        let decMinAnterior = parseInt($('#decMin').text());
                        $('#decMin').text(decMinAnterior + 1);
                        if (decMinAnterior == 5) {
                            //aumenta hora
                            $('#decMin').text(0);
                            let hrAnterior = parseInt($('#hr').text());
                            $('#hr').text(hrAnterior + 1);
                            if (hrAnterior == 9) {
                                //aumenta dezena de hora
                                $('#hr').text(0);
                                let decHrAnterior = parseInt($('#decHr').text());
                                $('#decHr').text(decHrAnterior + 1);
                            }
                        }
                    }

                }
            }
        }, 10);
        //1000 fica o normal igual os comentários, hr/min/seg
        //10 está min/seg/mili
    }

    function pausar() {
        clearInterval(iniciado);
        $('#iniciar').prop("disabled", false);
    }


    $('#iniciar').click(function () {
        contador();
    });

    $('#pausar').click(function () {
        pausar();
    });

    $('#resetar').click(function () {
        pausar();
        $('#seg').text(0);
        $('#decSeg').text(0);
        $('#min').text(0);
        $('#decMin').text(0);
        $('#hr').text(0);
        $('#decHr').text(0);
    });
