$(document).ready(function () {
    $.getJSON("../json/wedding.json", function (data) {
        data[0].user = "Hello"
        console.log(data[0].user);
        $.ajax({
            type: 'POST',
            url: '../json/wedding.json',
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