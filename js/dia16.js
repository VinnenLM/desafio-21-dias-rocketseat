function populateCountry() {

    fetch("https://restcountries.com/v3.1/all")

        .then(res => res.json())
        .then(countries => {
            countries.forEach(country => {
                let capital = "";
                if (country.capital) {
                    capital = country.capital
                } else {
                    capital = "-"
                }

                let currencies = [];
                if (country.currencies) {
                    Object.keys(country.currencies).forEach(function (currency) {
                        currencies.push(currency);
                    })
                } else {
                    currencies.push("-")
                }

                $('<tr>').append(
                    $('<td>').text(country.name.common),
                    $('<td>').text(capital),
                    $('<td>').text(`${new Intl.NumberFormat('de-DE').format(country.area)} Km²`),
                    $('<td>').text(currencies),
                ).appendTo('tbody');
            });
        })
}

$("#exportar").click(function (e) {
    e.preventDefault();
    var table_div = document.querySelector('table');
    var blobData = new Blob(['\ufeff' + table_div.outerHTML], { type: 'application/vnd.ms-excel' });
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