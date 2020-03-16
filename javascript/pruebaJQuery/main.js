$(document).ready(() => {
    console.log('Página cargada');
    let parrafos = $('p');
    console.log(parrafos);

    let primerParrafo = $('p:nth-child(1)');
    console.log(primerParrafo.text());

    $('#btnPulsar').click(() => {
        console.log('Se ha pulsado el botón');
        $('p:nth-child(2)').text('Otro texto');
    });

    $('#btnInput').click(() => {
        console.log($('#campoTexto').val('Modificacion no se que'));
        $('p').css('border', '1px solid black').css('background-color', 'pink');
        $('div').addClass('fondoAzul');
    });

    $('#campoTexto').on('input', () => {
        console.log($('#campoTexto').val());
    });

    $.get('https://swapi.co/api/planets/?format=json', (data) => {
        console.log(data);
    })
});