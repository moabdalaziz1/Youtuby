$(document).ready(function() {
    $('.reply').click(function() {
        $(this).parents('div.row').next('div.card-inner').toggle();
    });
});