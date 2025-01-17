$(document).ready(function () {
    $.getJSON("../json/wedding.json", function (data) {
        data[0].user = "Hello"
        console.log(data[0].user);
        $.ajax({
            url: '../php/save.php', // Server-side script to handle saving 
            type: 'POST',
            contentType: 'json',
            async: false,
            data: JSON.stringify(data),
            success: function (response) {
                console.log('Data saved successfully:', response);
            },
            error: function (error) {
                console.error('Error saving data:', error);
            }
        });
    });
});