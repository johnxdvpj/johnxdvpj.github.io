
$(document).ready(function () {
    var offset1 = $('#segment_01').offset().top;
    var offset2 = $('#segment_02').offset().top;
    var offset3 = $('#segment_03').offset().top;
    var offset4 = $('#segment_04').offset().top;
    var offset5 = $('#segment_05').offset().top;
    var offset6 = $('#segment_06').offset().top;
    var offset7 = $('#segment_07').offset().top;

    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date();
    const secondDate = new Date(2025, 8, 4);

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    $("#countdown").text(diffDays + " Tage bis zur Hochzeit")
    $(window).scroll(function () {
        var scrollPos = $(document).scrollTop() + $(window).height() / 3;
        if (scrollPos >= offset1 && scrollPos < offset2) {
            $(".navlink").each(function () {
                $(this).removeClass("active");
            });
            $('#click1').addClass("active")
        }
        if (scrollPos >= offset2 && scrollPos < offset3) {
            $(".navlink").each(function () {
                $(this).removeClass("active");
            });
            $('#click2').addClass("active")
        }
        if (scrollPos >= offset3 && scrollPos < offset4) {
            $(".navlink").each(function () {
                $(this).removeClass("active");
            });
            $('#click3').addClass("active")
        }
        if (scrollPos >= offset4 && scrollPos < offset5) {
            $(".navlink").each(function () {
                $(this).removeClass("active");
            });
            $('#click4').addClass("active")
        }
        if (scrollPos >= offset5 && scrollPos < offset6) {
            $(".navlink").each(function () {
                $(this).removeClass("active");
            });
            $('#click5').addClass("active")
        }
        if (scrollPos >= offset6 && scrollPos < offset7) {
            $(".navlink").each(function () {
                $(this).removeClass("active");
            });
            $('#click6').addClass("active")
        }
        if (scrollPos >= offset7) {
            $(".navlink").each(function () {
                $(this).removeClass("active");
            });
            $('#click7').addClass("active")
        }
    });
    $(".Selector_Foto").on("click", function () {
        $(".Selector_Foto").each(function () {
            $(this).removeClass("active")
        });
        $(this).addClass("active")
        $(".Foto_container").each(function () {
            $(this).css("display", "none")
        });
        var id_String = "#" + $(this).attr('id').split("_")[0]
        $(id_String).css("display", "block")
    });
    $(".Selector_Info").on("click", function () {
        $(".Selector_Info").each(function () {
            $(this).removeClass("active")
        });
        $(".Info_container").each(function () {
            $(this).css("display", "none")
        });
        $(".Info_container_mobile").each(function () {
            $(this).css("display", "none")
        });
        $(this).addClass("active")
        if ($(window).width() > 576) {
            var id_String = "#" + $(this).attr('id').split("_")[0] + ".Info_container"
            $(id_String).css("display", "block")
        }
        else {
            var id_String = "#" + $(this).attr('id').split("_")[0] + ".Info_container_mobile"
            $(id_String).css("display", "block")
        }
    });
});