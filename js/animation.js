jQuery(function ($) {

    var ready;        
    ready = false;

    $(window).on("load", function () {


        setTimeout(function () {
                        
            $({ value: 30 }).animate({ value: 0 }, {
                duration: 750,
                step: function () {
                    $("#bg-img, #title h1").css({
                        "filter": "blur(" + this.value + "px)"
                    });
                    $("#title h1").css({
                        "opacity": (30 - this.value) / 30
                    });
                }
            });

            $('#title h1').animate({
                'padding': '0 25%'
            }, 1250);

            
            ready = true;
        }, 500);
        

            
        $("#firstname, #name").mouseenter(function () {
            if (ready){
                $('#firstname').stop(true, false)
                $('#firstname').animate({
                    'padding-left': '12.5%'
                }, 500);

                $('#name').stop(true, false)
                $('#name').animate({
                    'padding-right': '12.5%'
                }, 500);
            }

        });

        $("#firstname, #name").mouseleave(function () {
            if (ready) {
                $('#title h1').stop(true, false)
                $('#title h1').animate({
                    'padding': '0 25%'
                }, 500);

            }
            else {
                console.log(ready);
            }
        });
        
    });

});