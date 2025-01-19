function CheckJson() {
    $.getJSON("./json/wedding.json", function (data) {
        $.each(data, function (key, val) {
            console.log("hello")
        });
    });
};
$(document).ready(function () {
    $("#login_button").on("click", function () {
        console.log("login_button")
        CheckJson();
    });
});