$(document).ready(function() {
    $('.card-footer').hide();
    $('#options button').click(function() {
        $('#options button').removeClass('correct wrong');
        if ($(this).attr('id') === 'correct') {
            $(this).addClass('correct');
        } else {
            $(this).addClass('wrong');
        }
    });
});