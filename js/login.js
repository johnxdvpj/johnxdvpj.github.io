function CheckJson() {
    var password = $('#password').val();
    if (password == "1") {
        $(".Login_Segment").addClass("hide_Login_Segment");
        $("body").css({ "height": "auto", "overflow": "auto" });
    }
    else {
        $('#password').val("");
        $('.Login_Error').css("display", "block");
    }

};
$(document).ready(function () {
    $("#login_button").on("click", function () {
        CheckJson();
    });
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            CheckJson();
        }
    });
});