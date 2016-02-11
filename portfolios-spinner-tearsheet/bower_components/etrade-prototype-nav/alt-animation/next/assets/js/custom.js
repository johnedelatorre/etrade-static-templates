function showonlyone(thechosenone) {
    $('.newboxes').each(function (index) {
        if ($(this).attr("id") == thechosenone) {
            $(this).show(300);
        } else {
            $(this).hide();
        }
    });
    $(".newboxes").mouseleave(function () {
        $(this).hide(300);
    });
}


//Active Menu
//onclick add the active menu item li
$('#main-nav li a').click(function () {
    $('#main-nav li').removeClass('active');
    $(this).parent().addClass('active');
});
//on megamenu mouseout remove the active class from li
$('.megamenu').mouseleave(function () {
    $('#main-nav li').removeClass('active');
});

$('.custom-tooltip').tooltip()

//buying power tooltip
$("#example-target-1").mouseenter(function () {
    $("#example-content-1").hide().fadeIn(300);
});
$("#example-target-1").ezpz_tooltip({
    contentPosition: 'belowStatic',
    stayOnContent: true,
    offset: 0
});

//move money tooltip
$("#example-target-2").mouseenter(function () {
    $("#example-content-2").hide().fadeIn(300);
});
$("#example-target-2").ezpz_tooltip({
    contentPosition: 'belowStatic',
    stayOnContent: true,
    offset: 0
});

//alerts tooltip
$("#example-target-3").mouseenter(function () {
    $("#example-content-3").hide().fadeIn(300);
});
$("#example-target-3").ezpz_tooltip({
    contentPosition: 'belowStatic',
    stayOnContent: true,
    offset: 0
});

//customer service tooltip
$("#example-target-4").mouseenter(function () {
    $("#example-content-4").hide().fadeIn(300);
});
$("#example-target-4").ezpz_tooltip({
    contentPosition: 'belowStatic',
    stayOnContent: true,
    offset: 0
});



//Symbol Search Location Selector
$('.location-trigger').click(function () {
    $('.locations').toggle()
});
$('.locations').click(function () {
    $('.locations').toggle()
});
$(".locations li").click(function(){
    $("a.location-trigger").text($(this).text());
});



