$(document).ready(function () {
    $.getJSON("../json/wedding.json", function (data) {
        data[0].user = "Hello"
        console.log(data[0].user);
    });
});