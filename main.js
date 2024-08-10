$(document).ready(function() {
    $('.team-list-item').hover(function() {
        $(this).find('.team-img').css('transform', 'scale(1.1) rotate(5deg)');
        $(this).find('.team-img').css('box-shadow', '5px 5px 10px rgba(0, 0, 0, 0.3)');
    }, function() {
        $(this).find('.team-img').css('transform', 'scale(1) rotate(0deg)');
        $(this).find('.team-img').css('box-shadow', 'none');
    });
});