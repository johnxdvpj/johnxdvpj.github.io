$(document).ready(function () {
    $.getJSON("./json/wedding.json", function (json) {
        console.log(json[0].user)
        json[0].user = "test"
        console.log(json[0].user)
        jsonData = JSON.stringify(json)
        $.ajax({
            url: './json/save.php',
            data: { 'userIndex': 0, 'zusage': 1 },
            type: 'Get'
        });
    });
});