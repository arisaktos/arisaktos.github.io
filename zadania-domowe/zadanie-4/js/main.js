function Pobierz() {

    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {

        var programista = "Imie:" + data.imie + " Nazwisko:" + data.nazwisko + " Zawod:" + data.zawod + " Firma:" + data.firma;

        var newDiv = $("<div/>")
            .attr("id", "dane-programisty")
            .html(programista);

        $(newDiv).insertAfter("button");

    });

}
