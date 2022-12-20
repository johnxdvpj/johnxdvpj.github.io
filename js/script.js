$(document).ready(function () {
    $(".web-selector").click(function () {
        $(".web-container").css("display", "block");
        $(".game-container").css("display", "none");
        $(".web-selector").addClass("active");
        $(".game-selector").removeClass("active");
        $(".all-selector").removeClass("active");
    });
    $(".game-selector").click(function () {
        $(".web-container").css("display", "none");
        $(".game-container").css("display", "block");
        $(".game-selector").addClass("active");
        $(".web-selector").removeClass("active");
        $(".all-selector").removeClass("active");
    });
    $(".all-selector").click(function () {
        $(".web-container").css("display", "block");
        $(".game-container").css("display", "block");
        $(".all-selector").addClass("active");
        $(".web-selector").removeClass("active");
        $(".game-selector").removeClass("active");
    });
    $(".work").click(function () {
        $(".section1").css("visibility", "visible");
        $(".section1").css("opacity", "1");
        $(".section2").css("left", "0");
        $(this).css("color", "#333")
        $(".section3").css("left", "-200%");
        $(".contact").css("color", "#aaa")
        $(".shooter3d").css("left", "-200%")
        $(".toontower").css("left", "-200%")
        $(".ml").css("left", "-200%")
        $(".codi_site").css("left", "-200%")
        $(".studi").css("left", "-200%")
        $(".hes").css("left", "-200%")
        $(".conic").css("left", "-200%")
        $(".erli").css("left", "-200%")
        $(".ssb-ag").css("left", "-200%")
    });
    $(".contact").click(function () {
        $(".section1").css("visibility", "visible");
        $(".section1").css("opacity", "1");
        $(".section3").css("left", "0");
        $(this).css("color", "#333")
        $(".section2").css("left", "-200%");
        $(".work").css("color", "#aaa")
        $(".shooter3d").css("left", "-200%")
        $(".toontower").css("left", "-200%")
        $(".ml").css("left", "-200%")
        $(".codi_site").css("left", "-200%")
        $(".studi").css("left", "-200%")
        $(".hes").css("left", "-200%")
        $(".conic").css("left", "-200%")
        $(".erli").css("left", "-200%")
        $(".ssb-ag").css("left", "-200%")
    });
    $(".home").click(function () {
        $(".section1").css("visibility", "visible");
        $(".section1").css("opacity", "1");
        $(".section2").css("left", "-200%");
        $(".work").css("color", "#aaa")
        $(".section3").css("left", "-200%");
        $(".contact").css("color", "#aaa")
        $(".shooter3d").css("left", "-200%")
        $(".toontower").css("left", "-200%")
        $(".ml").css("left", "-200%")
        $(".codi_site").css("left", "-200%")
        $(".studi").css("left", "-200%")
        $(".hes").css("left", "-200%")
        $(".conic").css("left", "-200%")
        $(".erli").css("left", "-200%")
        $(".ssb-ag").css("left", "-200%")
    });
    $(".shooter").click(function () {
        $(".section1").css("visibility", "hidden");
        $(".section1").css("opacity", "0");
        $(".section2").css("left", "-200%");
        $(".section3").css("left", "-200%");
        $(".shooter3d").css("left", "0")
    });
    $(".towerdefense").click(function () {
        $(".section1").css("visibility", "hidden");
        $(".section1").css("opacity", "0");
        $(".section2").css("left", "-200%");
        $(".section3").css("left", "-200%");
        $(".toontower").css("left", "0")
    });
    $(".maulwurf").click(function () {
        $(".section1").css("visibility", "hidden");
        $(".section1").css("opacity", "0");
        $(".section2").css("left", "-200%");
        $(".section3").css("left", "-200%");
        $(".ml").css("left", "0")
    });
    $(".codi").click(function () {
        $(".section1").css("visibility", "hidden");
        $(".section1").css("opacity", "0");
        $(".section2").css("left", "-200%");
        $(".section3").css("left", "-200%");
        $(".codi_site").css("left", "0")
    });
    $(".studistutti").click(function () {
        $(".section1").css("visibility", "hidden");
        $(".section1").css("opacity", "0");
        $(".section2").css("left", "-200%");
        $(".section3").css("left", "-200%");
        $(".studi").css("left", "0")
    });
    $(".hesem").click(function () {
        $(".section1").css("visibility", "hidden");
        $(".section1").css("opacity", "0");
        $(".section2").css("left", "-200%");
        $(".section3").css("left", "-200%");
        $(".hes").css("left", "0")
    });
    $(".conica").click(function () {
        $(".section1").css("visibility", "hidden");
        $(".section1").css("opacity", "0");
        $(".section2").css("left", "-200%");
        $(".section3").css("left", "-200%");
        $(".conic").css("left", "0")
    });
    $(".erling").click(function () {
        $(".section1").css("visibility", "hidden");
        $(".section1").css("opacity", "0");
        $(".section2").css("left", "-200%");
        $(".section3").css("left", "-200%");
        $(".erli").css("left", "0")
    });
    $(".ssb").click(function () {
        $(".section1").css("visibility", "hidden");
        $(".section1").css("opacity", "0");
        $(".section2").css("left", "-200%");
        $(".section3").css("left", "-200%");
        $(".ssb-ag").css("left", "0")
    });
});