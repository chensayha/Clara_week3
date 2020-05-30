$(document).ready(function() {
    $(function () { 
        $('.faqList').click(function () { 
            $('.faqList').children('.answer').removeClass('active');
            $(this).children('.answer').toggleClass('active');
        }); 
    });
  });

