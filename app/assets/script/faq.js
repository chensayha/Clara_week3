$(document).ready(function() {
    $(function () { 
        $('.faqList').click(function () { 
            $('.answer').removeClass('active');
            $(this).children('.answer').slideToggle().addClass('active');
        }); 
    });
  });

