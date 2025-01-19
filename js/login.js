function CheckJson() {
    $.getJSON("../json/wedding.json", function (data) {
        var nutzer = $('#nutzer').val();
        var password = $('#password').val();
        $.each(data, function (key, val) {
            console.log(data[key].user)

            console.log(key)
            if (data[key].user == nutzer) {
                return false;
            }
        });
    });
};
$(document).ready(function () {
    $("#login_button").on("click", function () {
        CheckJson();
    });
});