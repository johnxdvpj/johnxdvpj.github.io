$(document).ready(function () {
    $.getJSON("https://jsonkeeper.com/b/Y4U8", function (json) {
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