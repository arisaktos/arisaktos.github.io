function createContainer() {
    var newDiv = $("<div/>")
        .attr("id", "dane-programisty")
    $(newDiv).insertAfter("button");
}

function Pobierz() {
    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
        var programista = "<p>Imie:" + data.imie + " Nazwisko:" + data.nazwisko + " Zawod:" + data.zawod + " Firma:" + data.firma + "</p>";

        if ($("#dane-programisty").length === 0) {
            createContainer();
        }
        $('#dane-programisty').append(programista);

    });

}
