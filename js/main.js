$(document).ready( function() {
    console.log("In main.js");

    // dynamically change the position of the front tunnel so that it is resonsive
    var centerPX = $(window).width();
    var centerEdge = centerPX/2 + 92;
    // console.log(centerEdge);

    $("#tunnel-front-right").css( {
        "left" :  centerEdge + "px"
    });
    $("#tunnel-front-left").css( {
        "right" : centerEdge + "px"
    });

    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        //console.log(wScroll);

        // this handles the parallax for the first section
        if (wScroll > 600 && wScroll <=2500) {
            $("#spires-back").css( {
                "transform" : "translate(0px, -" + wScroll/80 + "%)"
            });
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
        // this handles the extra space left by the front spires moving upwards
        if (wScroll >= 1300) {
            $("#extra-white").css( {
                "height" : "80vh"
            });
        }
        else $("#extra-white").css( {
            "height" : "0px"
        });

        // this handles the parallax in the tunnel
        if (wScroll > 1800 && wScroll <=5000) {
            $("#tunnel-back-right").css( {
                "transform" : "translate(0px, -" + wScroll/8 + "px) scale(-1)"
            });
            $("#tunnel-back-left").css( {
                "transform" : "translate(0px, -" + wScroll/8 + "px)"
            });
            $("#tunnel-mid1-right").css( {
                "transform" : "translate(0px, " + wScroll/3 + "px) scale(-1)"
            });
            $("#tunnel-mid1-left").css( {
                "transform" : "translate(0px, " + wScroll/3 + "px)"
            });
            $("#tunnel-mid2-right").css( {
                "transform" : "translate(0px, -" + wScroll/2 + "px) scale(-1)"
            });
            $("#tunnel-mid2-left").css( {
                "transform" : "translate(0px, -" + wScroll/2 + "px)"
            });
          }   
        
        // this will hand the reverse spires section
        if (wScroll > 4400 && wScroll <= 6500) {
            $("#spires-front-bottom").css( {
                "transform" : "translate(0px, -" + wScroll/12 + "%) scaleY(-1)"
            });
            $("#spires-mid2-bottom").css( {
                "transform" : "translate(0px, -" + wScroll/21 + "%) scaleY(-1)"
            });
            $("#spires-mid1-bottom").css( {
                "transform" : "translate(0px, -" + wScroll/50 + "%) scaleY(-1)"
            });
            $("#spires-back-bottom").css( {
                "transform" : "translate(0px, -" + wScroll/100 + "%) scaleY(-1)"
            });
            $("#stars-front-small-bottom").css( { 
                "transform" : "translate(0px, -" + wScroll/16 + "%) scaleY(-1)"
            })
        }

        //remove "just"
        if  (wScroll > 6000) {
            $("#w7").css("display", "none");
        }
        else {
            $("#w7").css("display", "block");
        }
    });
});