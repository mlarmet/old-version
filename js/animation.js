var scrollLimit = 50;
var fait = false;

function start() {

    if (window.matchMedia("(max-width: 811px)").matches) {

        if ($(".navbar").is(":visible") && !fait) {
            $("#hamburger-button").removeClass("change");
            $(".navbar").hide(0);
            fait = true;
        }

        $("#hamburger-button, .nav-link").unbind().click(function() {

            if ($(".navbar").is(":visible")) {
                $("#hamburger-button").removeClass("change");
                $(".navbar").fadeOut(300);
                $("html").css({ "overflow-y": "scroll" });
            } else if ($(".navbar").is(":hidden")) {
                $("#hamburger-button").addClass("change");
                $(".navbar").fadeIn(300);
                $("html").css({ "overflow-y": "hidden" });
            }

        });
    } else {
        checkScroll();
        $("html").css({ "overflow-y": "scroll" });
        fait = false;
    }


    if (window.matchMedia("(min-width: 1080px)").matches) {

        $("#title h1").css({
            "padding": "0 25%"
        });

        //effet titre souris passe dessus
        $("#title h1").mouseenter(function() {
            $("#slide-top").stop(true, false)
            $("#slide-top").animate({
                "padding-left": "21.875%"
            }, 500);

            $("#slide-bottom").stop(true, false);
            $("#slide-bottom").animate({
                "padding-right": "21.875%"
            }, 500);
        }).mouseleave(function() {
            $("#title h1").stop(true, false);
            $("#title h1").animate({
                "padding": "0 25%"
            }, 500);
        });
    } else {
        $("#title h1").css({ "padding": "0" });
        $("#title h1").unbind("mouseenter");
        $("#title h1").unbind("mouseleave");
    }

};

function checkScroll() {
    if (window.matchMedia("(min-width: 812px)").matches) {
        if (document.body.scrollTop > scrollLimit ||
            document.documentElement.scrollTop > scrollLimit) {
            $(".navbar").slideDown();
        } else {
            $(".navbar").slideUp();
        }
    }
};

$(window).on("load", function() {

    //scroll up refresh page
    $("html, body").animate({ scrollTop: 0 }, 0);

    //attend pour que la page soit bien chargé
    setTimeout(function() {
        $({ value: 30 }).animate({ value: 0 }, {
            duration: 750,
            step: function() {
                $("header").css({
                    "filter": "blur(" + this.value + "px)",
                    "-moz-filter": "blur(" + this.value + "px)"
                });
                $("#title h1, #arrow, #hamburger-button").css({
                    "opacity": (30 - this.value) / 30
                });
            }
        });

        if (window.matchMedia("(min-width: 1080px)").matches) {

            $("#slide-top").css({
                "padding-right": "50%"
            });
            $("#slide-bottom").css({
                "padding-left": "50%"
            });

            $("#title h1").animate({
                "padding": "0 25%"
            }, 1300);
        }
    }, 750);

    setTimeout(function() {
        //affiche le titre au cas où l"animation aurait ratée
        $("header, #title h1").css({ "filter": "blur(" + 0 + "px)" });
        $("#title h1, #arrow, #hamburger-button").css({ "opacity": 1 });
        $(".navbar").hide();
        $(".navbar").css({ "opacity": "1" });
        $("html").css({ "overflow-y": "scroll" });
        $("#arrow a span").css({ "animation": "arrow_move 1s infinite" });

        start();

        $(window).on("orientationchange resize", function() {
            start();
        });

        $(window).scroll(function() {
            checkScroll();
        });

    }, 2050);
});