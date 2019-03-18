$(document).ready( function() {
    console.log("In main.js");
    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        console.log(wScroll);

        if (wScroll > 600 && wScroll <=2500) {
            $("#spires-back").css( {
                "transform" : "translate(0px, -" + wScroll/80 + "%)"
                }
            );
            $("#spires-mid1").css( {
                "transform" : "translate(0px, -" + wScroll/40 + "%)"
            });
            $("#spires-mid2").css( {
                "transform" : "translate(0px, -" + wScroll/14 + "%)"
            });
            $("#spires-front").css( {
                "transform" : "translate(0px, -" + wScroll/5 + "%)"
            })
            $("#stars-front-small").css( {
                "transfrom" : "translate(0px, -" + wScroll/10 + "%)"
            });
        }
        if (wScroll >= 1300) {
            $("#extra-white").css( {
                "height" : "80vh"
            });
        }
        else $("#extra-white").css( {
            "height" : "0px"
        })
    });
});