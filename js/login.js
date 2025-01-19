function CheckJson() {
    $.getJSON("../json/wedding.json", function (data) {
        $.each(data, function (key, val) {
            console.log(data[key].user)
        });
    });
};
$(document).ready(function () {
    $("#login_button").on("click", function () {
        CheckJson();
    });
});