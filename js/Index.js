$("#button-open-menu").click(function () {
    $(".div-list").fadeToggle(1000);
    $(".fa-bars").toggleClass("fa-times");
});
$(window).load("this", function () {
    $(".div-wrap-loading").delay(2000).fadeOut(1000);
    $(".nav-bar").addClass('on');
    $(".brand-heading-center-ap").addClass('on');
    $(".button-acessar-conta").addClass('on');
});
    
