$(document).ready( function() {
    console.log("In text.js");

    $(window).scroll(function() {
        var yScroll = $(this).scrollTop();
        // console.log(yScroll);

        // this handdles the first trhee words "what an existance"
        $("#w1").css( { "transform" : "translateY(" + yScroll/2 + "%)" } );
        $("#w2").css( { "transform" : "translateY(" + yScroll/1.5 + "%)" } );
        $("#w3").css( { "transform" : "translateY(" + yScroll + "%)" } );
       
       
        if (yScroll > 1270 && yScroll <= 1370) {
            $("#w5, #w6").css( { "display" : "none" } );
            $("#w4").css( { "display" : "block" } );
        }
        else if (yScroll > 1370 && yScroll <= 1470) {
            $("#w4, #w6").css( { "display" : "none" } );
            $("#w5").css( { "display" : "block" } );
        }
        else if (yScroll > 1470 && yScroll <= 1570) {
            $("#w4, #w5").css( { "display" : "none" } );
            $("#w6").css( { "display" : "block" } );
        }
        else {
            $("#w4, #w5, #w6").css( { "display" : "none" } );
        }
        
        // following is for "just a phase"
        $("#w7").css( { "transform" : "translate(0px, " + yScroll*2 + "%)" } );
        // $("#w8").css( { });
        $("#w9").css( { "transform" : "translate(0px, -" + yScroll*2 + "%)" } );

        // following is for "or maybe a cycle"
        $("#w10").css( { "transform" : "translateY(" + yScroll/2 + "%)" } );
        $("#w11").css( { "transform" : "translateY(" + yScroll/2 + "%)" } );
        $("#w12").css( { "transform" : "translateY(" + yScroll/2 + "%)" } );
        $("#w13").css( { "transform" : "translateY(" + yScroll/2 + "%)" } );
    });
});