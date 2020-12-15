$(document).ready(function () {
    $("#Guitar").click(function () {
        $(".piano").hide();
        $(".wind").hide();
        $(".drum").hide();
        $(".guitar").show();
    });
});
$(document).ready(function () {
    $("#Piano").click(function () {
        $(".guitar").hide();
        $(".wind").hide();
        $(".drum").hide();
        $(".piano").show();
    });
});
$(document).ready(function () {
    $("#Wind").click(function () {
        $(".wind").show();
        $(".piano").hide();
        $(".guitar").hide();
        $(".drum").hide();
    });
});
$(document).ready(function () {
    $("#Drum").click(function () {
        $(".drum").show();
        $(".piano").hide();
        $(".wind").hide();
        $(".guitar").hide();
    });
});
$(document).ready(function () {
    $("#All").click(function () {
        $(".drum").show();
        $(".piano").show();
        $(".wind").show();
        $(".guitar").show();
    });
});

$(document).ready(function () {
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });
});

$("#DeleteCart").click(function () {
        window.location.href="/cart/clear";
});
$("#BuyCart").click(function () {
    window.location.href="/cart/buynow";
});