$(document).ready(function () {
    $.getJSON("https://jsonhost.com/json/f7bde75a58266a788c1bdef99fd65c39", function (json) {
        console.log(json[0].user)
        json[0].user = "test"
        console.log(json[0].user)
        jsonData = JSON.stringify(json)
        $.ajax({
            type: "GET",
            dataType: 'json',
            async: false,
            url: './json/save.php',
            data: { data: jsonData }
        });
    });
});