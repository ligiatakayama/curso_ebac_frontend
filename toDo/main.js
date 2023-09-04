$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        novoItem.text(novaTarefa);
        $('ul').appendTo(novoItem);
        $('#nova-tarefa').val('');
    })

    $('ul').on('click','li',function() {
        $(this).toggleClass('riscado');
    });
})

