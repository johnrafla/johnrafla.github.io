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

$(function() {
    if ( document.location.href.indexOf('#') > -1 ) {
        $('html, body').animate({scrollTop: '0px'}, 300);
    }
    else {
        $(location).attr('href', '#Home');
    }
});