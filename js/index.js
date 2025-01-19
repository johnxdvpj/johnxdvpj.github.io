$(document).ready(function () {
    $.getJSON("./json/wedding.json", function (json) {
        console.log(json[0].user)
        json[0].user = "test"
        console.log(json[0].user)
        jsonData = JSON.stringify(json)
        $.ajax({
            type: "GET",
            dataType: 'json',
            async: false,
            url: 'save.php',
            data: { data: jsonData }
        });
    });
});