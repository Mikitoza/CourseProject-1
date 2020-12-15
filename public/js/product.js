$(document).ready(function(){
    $("a[href^='#'").click(function(){
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $(".button").hover(function() {
        $( this ).fadeOut( 300 );
        $( this ).fadeIn( 300 );
    });

    $(".nav-item-instruments-button").click(function(){
        window.location.href="/category";
    });

    $(".nav-item-feedbacks-button").click(function(){
        window.location.href="/feedback";
    });

    $(".nav-item-about-us-button").click(function(){
        window.location.href="/about_us";
    });

    $(".nav-item-discount-button").click(function(){
        window.location.href="/on-sales";
    });

    $(".content-item-button").click(function(){
        window.location.href="/category";
    });

    $(".feedbacks-button").click(function(){
        window.location.href="/feedback";
    });

    $(".question-button").click(function(){
        window.location.href="/category";
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