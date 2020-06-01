$(function () { 
    $('.faqList').click(function () { 
        $('.answer').removeClass('active').slideUp();
        $(this).children('.answer').addClass('active').slideDown();
    }); 
});
