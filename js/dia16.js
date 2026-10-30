const RC_API_KEY = "rc_live_52bd79d4a50549e89e79ef6377045c6f";
const RC_URL = "https://api.restcountries.com/countries/v5";
const RC_PAGE = 100;

// Busca todos os paises em paginas (limit/offset) ate meta.more ser false
async function buscarPaises() {
    const paises = [];
    let offset = 0;
    let mais = true;

    while (mais) {
        const res = await fetch(`${RC_URL}?limit=${RC_PAGE}&offset=${offset}`, {
            headers: { Authorization: `Bearer ${RC_API_KEY}` }
        });
        const json = await res.json();

        if (!res.ok || !json.data) {
            throw new Error((json.errors && json.errors[0] && json.errors[0].message) || `Erro ${res.status}`);
        }

        paises.push(...json.data.objects);
        mais = json.data.meta.more;
        offset += RC_PAGE;
    }

    return paises;
}

function populateCountry() {

    buscarPaises()
        .then(paises => {
            paises.forEach(pais => {
                const capital = pais.capitals && pais.capitals.length
                    ? pais.capitals.map(c => c.name).join(", ")
                    : "-";

                const moedas = pais.currencies && pais.currencies.length
                    ? pais.currencies.map(m => m.code).join(", ")
                    : "-";

                const area = pais.area ? pais.area.kilometers : 0;

                $('<tr>').append(
                    $('<td>').text(pais.names.common),
                    $('<td>').text(capital),
                    $('<td>').text(`${new Intl.NumberFormat('de-DE').format(area)} Km²`),
                    $('<td>').text(moedas),
                ).appendTo('tbody');
            });
        })
        .catch(err => {
            console.error(err);
            $('tbody').append($('<tr>').append($('<td>').attr('colspan', 4).text('Erro ao carregar os dados: ' + err.message)));
        })
}

$("#exportar").click(function (e) {
    e.preventDefault();
    var table_div = document.querySelector('table');
    var blobData = new Blob(['﻿' + table_div.outerHTML], { type: 'application/vnd.ms-excel' });
    var url = window.URL.createObjectURL(blobData);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'Meu arquivo Excel'
    a.click();
});

//fiz por fazer
function fundoRGB() {
    setInterval(function () {
        const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        $('body').css("background-color", randomColor);
    }, 400)
}

$(document).ready(function () {
    $('#importar').click(function () {
        $('#importar').attr('disabled', true);
        populateCountry();
    })
});
