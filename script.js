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

$(function() {
    if ( document.location.href.indexOf('#') > -1 ) {
        $('html, body').animate({scrollTop: '0px'}, 300);
    }
    else {
        $(location).attr('href', '#Home');
    }
});




//* Spotify *//
$(function() {
    if ( document.location.href.indexOf('#Spotify') > -1 ) {
        document.title = 'Spotify';
    }

//* Gmail *//
$(function() {
    if ( document.location.href.indexOf('#Gmail') > -1 ) {
        document.title = 'Gmail';
    }

//* Calendar *//
$(function() {
    if ( document.location.href.indexOf('#Calender') > -1 ) {
        document.title = 'Calendar';
    }
    
//* Powerschool *//
$(function() {
    if ( document.location.href.indexOf('#Powerschool') > -1 ) {
        location.reload();
        document.title = 'Powerschool';
    }
    
//* Drive *//
$(function() {
    if ( document.location.href.indexOf('#Drive') > -1 ) {
        document.title = 'Drive';
    }

//* Schoology *//
$(function() {
    if ( document.location.href.indexOf('#Schoology') > -1 ) {
        document.title = 'Schoology';
    }

//* Schedule *//
$(function() {
    if ( document.location.href.indexOf('#Schedule') > -1 ) {
        document.title = 'Schedule';
    }
