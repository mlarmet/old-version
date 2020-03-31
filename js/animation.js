jQuery(function ($) {


    $(window).on("load", function () {

        $("#firstname").css("padding-right", "75%");
        $("#name").css("padding-left", "75%");

        $(function () {
            $({ blurRadius: 30 }).animate({ blurRadius: 0 }, {
                duration: 500,
                easing: 'swing', // or "linear"
                // use jQuery UI or Easing plugin for more options
                step: function () {
                    console.log(this.blurRadius);
                    $('.bg-img').css({
                        "-webkit-filter": "blur(" + this.blurRadius + "px)",
                        "filter": "blur(" + this.blurRadius + "px)"
                    });
                }
            });
        });

        $('.title h1').animate({
            'padding': '0 25%'
        }, "slow");
    });

});