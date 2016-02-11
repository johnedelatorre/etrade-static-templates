// (function() {
//     $('.main-nav')
// })();


/*****************************************************************
    function:   Mega Menu
    purpose:    selects, shows and hides correct mega menu
******************************************************************/

function showonlyone(thechosenone) {
    $('#main-nav').on('mouseover', function() {
        $('.megaContainer').slideDown(300);
    });

    $('.customer').on('mouseleave', function() {
        $('.megaContainer').slideUp(300);
    });

    $('.newboxes').each(function() {
        if ($(this).attr("id") === thechosenone) {
            $(this).show(0);
            $(this).find('.menu-wrap').fadeIn(100);
        } else {
            $(this).hide();
            $(this).find('.menu-wrap').hide(0);
        }
    });
    // $('.newboxes').mouseleave(function() {
    //     $(this).hide(0);
    // });
}



/******************************************************************
    function:   Mega Menu
    purpose:    adds and removes active class from main nav links
*******************************************************************/
(function() {
    var main = $('#main-nav li');
    main.find('a').on('hover', function() {
        main.removeClass('active');
        $(this).parent().addClass('active');
    });
    $('.megamenu').mouseleave(function() {
        main.removeClass('active');
    });
})();


/******************************************************************
    function:   Tooltips (Move Money and Alerts)
    purpose:    shows and hides tooltips for Alerts and Move Money
*******************************************************************/
// (function() {
//     var alerts = $('.alerts'),
//         alertsTip = $('.alerts-tooltip'),
//         alertsTrigger = $('.alerts-trigger'),
//         transfer = $('.transfer'),
//         transTip = $('.transfer-tooltip'),
//         transTrigger = $('.transfer-trigger');

//     transTip.hide();
//     alertsTip.hide();

//     transfer.hoverIntent(function() {
//         transTip.fadeToggle(160);
//     });

//     alerts.hoverIntent(function() {
//         alertsTip.fadeToggle(160);
//     });
// })();


(function() {
    var alerts = $('.alerts'),
        alertsTip = $('.alerts-tooltip'),
        alertsTrigger = $('.alerts-trigger'),
        transfer = $('.transfer'),
        transTip = $('.transfer-tooltip'),
        transTrigger = $('.transfer-trigger');
        balances = $('.balances'),
        balancesTip = $('.balances-tooltip'),
        balancesTrigger = $('.balances-trigger');


    balancesTip.hide();
    transTip.hide();
    alertsTip.hide();

    balances.on('click', function() {
        balancesTip.fadeToggle(100);
    });

    balances.hoverIntent({
        timeout: 100,
        interval: 200,
        out: hideBalances
    });

    // transfer.hoverIntent({
    //     over: showTransfer,
    //     timeout: 100,
    //     interval: 200,
    //     out: hideTransfer
    // });

    // alerts.hoverIntent({
    //     over: showAlerts,
    //     timeout: 100,
    //     interval: 200,
    //     out: hideAlerts
    // });

    function showBalances() {
        balancesTip.fadeToggle(100);
    }

    function hideBalances() {
        balancesTip.fadeToggle(50);
    }

    // function showTransfer() {
    //     transTip.fadeToggle(100);
    // }

    // function hideTransfer() {
    //     transTip.fadeToggle(50);
    // }

    // function showAlerts() {
    //     alertsTip.fadeToggle(100);
    // }

    // function hideAlerts() {
    //     alertsTip.fadeToggle(50);
    // }

})();


/******************************************************************
    function:   Symbol Search
    purpose:    shows and hides symbol location select list
*******************************************************************/
(function() {
    var locations = $('.locations'),
        trigger = $('.location-trigger');

    trigger.on('click', function() {
        locations.toggle();
    });
    locations.on('click', function() {
        $(this).toggle();
    });
    locations.on('mouseleave', function() {
        $(this).hide();
    });
    locations.find('li').on('click', function() {
        trigger.text($(this).text());
    });
})();



/******************************************************************
    function:   Mega Menu
    purpose:    adds shadow to the bottom of the mega menu
*******************************************************************/
(function() {
    var tray = $('.utilTray');
    $('#main-nav li a').on('click', function() {
        tray.addClass('utilTrayOpen');

        $('.megamenu').mouseleave(function() {
            tray.removeClass('utilTrayOpen');
        });
    });
})();

/******************************************************************
    function:   Mega Menu
    purpose:    Hide menu on click of a link
*******************************************************************/
(function() {
    $('.content-accounts a').on('click', function() {
        $('.newboxes').hide();
    });
})();


/******************************************************************
    function:   Market Indexes
    purpose:    shows and hides 10 second warning
*******************************************************************/
// $('.markets-warning').hide();
// $('.markets').on('mouseenter', function() {
//     $('.markets-warning').fadeIn();
// });
// $('.markets').on('mouseleave', function() {
//     $('.markets-warning').delay(600).fadeOut();
// });



/******************************************************************
    function:   Market Indexes
    purpose:    simulates 10 second streaming updates
*******************************************************************/
function tick1() {
    $('#ticker1 span:first').animate({
        'opacity': 0
    }, 300, function() {
        $(this).appendTo($('#ticker1')).css('opacity', 1);
    });
}
setInterval(function() {
    tick1()
}, 10000);


function tick2() {
    $('#ticker2 span:first').animate({
        'opacity': 0
    }, 300, function() {
        $(this).appendTo($('#ticker2')).css('opacity', 1);
    });
}
setInterval(function() {
    tick2()
}, 10000);

function tick3() {
    $('#ticker3 span:first').animate({
        'opacity': 0
    }, 300, function() {
        $(this).appendTo($('#ticker3')).css('opacity', 1);
    });
}
setInterval(function() {
    tick3()
}, 10000);



/******************************************************************
    function:   Market Indexes
    purpose:    shows and hides volume and change values
*******************************************************************/
$('.volume').hoverIntent('mouseover', function() {
    $('.volume').hide();
    $('.change').show();
});

$('.change').hoverIntent('mouseover', function() {
    $('.change').hide();
    $('.volume').show();
});