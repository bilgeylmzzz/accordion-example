$(document).ready(function() {
    $('.accordion-title').click(function() {
        var content = $(this).next('.accordion-content');
        if (!$(this).parent().hasClass('active')) {
            $('.accordion.active').removeClass('active').children('.accordion-content').slideUp('fast');
        }
        $(this).parent('.accordion').toggleClass('active');
        content.slideToggle('fast');
    });
});
