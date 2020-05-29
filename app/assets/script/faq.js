$(document).ready(function() {
    $(function () { 
        $('.faqList').click(function () { 
            $(this).children('.answer').toggleClass('active');
        }); 
    });
  });