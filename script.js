$(document).ready(function() {
    $('.card-footer').hide();
    $('#options button').click(function() {
        $(this).addClass($(this).attr('id') === 'correct' ? 'correct' : 'wrong');
    });
    $('#options button').click(function() {
        $(this).closest('.card').find('.card-footer').show();
    });
});