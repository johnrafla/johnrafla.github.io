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
