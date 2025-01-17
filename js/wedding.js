$(document).ready(function () {
    $.getJSON("https://jsonhost.com/json/f21d790128db3973f683655d1e58d6a0", function (data) {
        data[0].user = "Hello"
        console.log(data[0].user);
        $.ajax({
            url: '../php/save.php', // Server-side script to handle saving 
            type: 'POST',
            contentType: 'application/json',
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