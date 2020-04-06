

    $(window).on("load", function () {

        //attend pour que la page soit bien chargé
        setTimeout(function () {

            $({ value: 30 }).animate({ value: 0 }, {
                duration: 750,
                step: function () {
                    $("#bg-img, #title h1").css({
                        "filter": "blur(" + this.value + "px)",
                        "-moz-filter": "blur(" + this.value + "px)"
                    });
                    $("#title h1").css({
                        "opacity": (30 - this.value) / 30
                    });
                }
            });

            $('#title h1').animate({
                'padding': '0 25%'
            }, 1250);

        }, 500);

        //attend la fin de l'animation du début 
        setTimeout(function () {

            //affiche le titre au cas où l'animation aurait ratée
            $("#bg-img, #title h1").css({
                "filter": "blur(" + 0 + "px)"
            });
            $("#title h1").css({
                "opacity": 1
            });

            $('#title h1').css({
                'padding': '0 25%'
            });

            $("html").css({ 'overflow-y': 'visible' });

            $("#title").mouseenter(function () {
                $('#slide-top').stop(true, false)
                $('#slide-top').animate({
                    'padding-left': '21.875%'
                }, 500);

                $('#slide-bottom').stop(true, false)
                $('#slide-bottom').animate({
                    'padding-right': '21.875%'
                }, 500);

            });

            $("#title").mouseleave(function () {
                $('#title h1').stop(true, false)
                $('#title h1').animate({
                    'padding': '0 25%'
                }, 500);

            });

        }, 1750);


    });
