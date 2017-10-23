drive();

function drive() {
    $(document).ready(function() {
        $("#history_button").click(function() {
            $("#language_arts").hide(300);
            $("#language_arts_button").show();
            $("#history").show(300);
            $("#history_button").hide();
        });
        $("#language_arts_button").click(function() {
            $("#history").hide(300);
            $("#history_button").show();
            $("#language_arts").show(300);
            $("#language_arts_button").hide();
        });
    });
}

RemoveJumping();

function RemoveJumping() {
    $("#tab").click(function(e) { //Note the e for event
        e.preventDefault();
      });
}


RemoveHash();

function RemoveHash() {
    (function($) {
        $('#tab').on('click', function(evt) {
            evt.preventDefault(); //prevents hash from being append to the url
        });
        (window.jQuery);
    });
}

SmootherScroll();

function SmootherScroll() {
    $(window).scroll(function() {
        var newTop = $(window).scrollTop();
        if (newTop <= 130) {
            newTop = 130;
        }
        $("#idofElementToScroll").stop()
            .animate({ 'top': newTop }, "slow");
    });
}
