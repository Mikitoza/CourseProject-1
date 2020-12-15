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