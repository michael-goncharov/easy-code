$(document).ready(function() {

  $('.accordion .accordion-body').hide();

    $('.accordion .accordion-header').on('click', function() {
        const content = $(this).next();
        console.log($(this).next());
        if (content.is(':visible')) {
            content.slideUp('fast');
        } else {
            $(this).closest('.accordion').find('.accordion-body').slideUp('fast');
            content.slideDown('fast');
            }
    });

});
