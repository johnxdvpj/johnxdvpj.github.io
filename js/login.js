function CheckJson() {
    $.getJSON("../json/wedding.json", function (data) {
        var nutzer = $('#nutzer').val();
        $.each(data, function (key, val) {
            console.log(data[key].user)
            if (data[key].user == nutzer) {
                console.log("success")
                return false
            }
        });
    });
};
$(document).ready(function () {
    $("#login_button").on("click", function () {
        CheckJson();
    });
});