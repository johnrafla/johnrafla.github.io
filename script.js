drive();

function drive() {
    $(document).ready(function() {
        $("#history_button").click(function() {
            $("#Random").hide(300);
            $("#random_folder_button").show();
            $("#history").show(300);
            $("#history_button").hide();
        });
        $("#random_folder_button").click(function() {
            $("#history").hide(300);
            $("#history_button").show();
            $("#Random").show(300);
            $("#random_folder_button").hide();
        });
    });
}

$(document).ready(function() {
    if (document.location.href.indexOf('#') > -1 ) {
        $('html, body').animate({scrollTop: '0px'}, 300);
    }
    else {
        $(location).attr('href', '#Home');
    }
});

$(function() {
if (window.screen.availWidth >= 768) { 
    $('#iframe').html('<iframe src="Home _ Schoology.htm" height="575" width="100%" frameborder="0" scrolling="no" style="border-radius:20px; position:sticky;"></iframe>');
  } else if ((window.screen.availWidth < 799) && (window.screen.availWidth >= 480)) {
    $('#iframe').html('<iframe src="Home _ Schoology2.htm" height="355" width="100%" frameborder="0" scrolling="no" style="border-radius:20px; position:sticky;"></iframe>');
  } else { 
    $('#iframe').html('<iframe src="Home _ Schoology2.htm" height="355" width="100%" frameborder="0" scrolling="no" style="border-radius:20px; position:sticky;"></iframe>');
  }  
});