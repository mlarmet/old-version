jQuery(function ($) {


    $(window).on("load", function () {

        $("#firstname").css("padding-right", "75%");
        $("#name").css("padding-left", "75%");
        $(".bg-img").css("filter", "blur(30px)");

        setTimeout(function () {

            $({ value: 30 }).animate({ value: 0 }, {
                duration: 750,
                easing: 'swing',
                step: function () {
                    console.log(this.value);
                    $('.bg-img').css({
                        "filter": "blur(" + this.value + "px)"
                    });
                }
            });
            
            $('.title h1').animate({
                'padding': '0 25%'
            }, 1250);

        }, 500);
        
    });

});