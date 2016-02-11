$(".my-360-click").click(function () {
    margin = +$('#my-360').css('margin-left').replace('px', '');
    if (margin < 0) {
        $('#my-360').animate({
            marginLeft: "0px"
        }, 200);
        $('.my-360-click').attr('src', '../common/img/slide/360-tab-in.png');
    } else {
        $('#my-360').animate({
            marginLeft: "-400px"
        }, 200);
        $('.my-360-click').attr('src', '../common/img/slide/360-tab-out.png');
    }
});

$(".my-info-click").click(function () {
    margin = +$('#my-info').css('margin-right').replace('px', '');
    if (margin < 0) {
        $('#my-info').animate({
            marginRight: "0px"
        }, 200);
        $('.my-info-click').attr('src', '../common/img/slide/my-info-tab-in.png');
    } else {
        $('#my-info').animate({
            marginRight: "-485px"
        }, 200);
        $('.my-info-click').attr('src', '../common/img/slide/my-info-tab-out.png');
    }
});