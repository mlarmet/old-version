var scrollLimit = 50;

var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

var previousW = $(window).width();

jQuery(function () {
    
    //alert($(window).width());
    $(window).resize(function () {
        var w = $(window).width();
        console.log("w=" + w);
        console.log("previous=" + previousW);

        if (previousW < 700 && w > 700 || previousW > 700 && w < 700) {
            location.reload();
            previousW = w;
        }

        //reset mouse hover action (only for large devices)
        else if (previousW < 1080 && w > 1080 || previousW > 1080 && w < 1080) {
            location.reload();
            previousW = w;
        }
        

    });

    $(document).ready(function () {
        if (document.body.scrollTop < scrollLimit ||
            document.documentElement.scrollTop < scrollLimit) {
            $(".navbar").slideUp(0);
        }
    });

    
        
        $(window).scroll(function (event) {
            if (window.matchMedia("(min-width: 700px)").matches){
                if (document.body.scrollTop > scrollLimit ||
                    document.documentElement.scrollTop > scrollLimit) {
                    $(".navbar").slideDown();
                } else {
                    $(".navbar").slideUp();
                }
            }
        });
    


    $(window).on("load", function () {

        w = $(document).width();

        $(function () {

            var $img = $('header img'),
                totalImg = $img.length;
            var waitImgDone = function () {
                totalImg--;
            };

            $('header img').each(function () {
                $(this)
                    .load(waitImgDone)
                    .error(waitImgDone);
            });
        });

        //scroll up refresh page
        //$("html, body").animate({ scrollTop: 0 }, 0);


        //attend pour que la page soit bien chargé
        setTimeout(function () {
            $({ value: 30 }).animate({ value: 0 }, {
                duration: 750,
                step: function () {
                    $("header, #title h1").css({
                        "filter": "blur(" + this.value + "px)",
                        "-moz-filter": "blur(" + this.value + "px)"
                    });
                    $("#title h1, #arrow").css({
                        "opacity": (30 - this.value) / 30
                    });
                }
            });

        }, 750);

        setTimeout(function () {
            //affiche le titre au cas où l'animation aurait ratée
            $("header, #title h1").css({ "filter": "blur(" + 0 + "px)" });
            $("#title h1, #arrow").css({ "opacity": 1 });
            $("html").css({ 'overflow-y': 'visible' });
        }, 2005);

        
        function sizeChange() {
            
        }
        //attend pour que la page soit bien chargé
        if (!isMobile){
            
            if (window.matchMedia("(min-width: 1080px)").matches) {
                setTimeout(function () {
                    $('#slide-top').css({
                        'padding-right': '50%'
                    });
                    $('#slide-bottom').css({
                        'padding-left': '50%'
                    });

                    $('#title h1').animate({
                        'padding': '0 25%'
                    }, 1300);
                }, 750);
                
                //attend la fin de l'animation du début 
                setTimeout(function () {
                    $('#title h1').css({ 'padding': '0 25%' });

                    //effet titre souris passe dessus
                    $("#title h1").mouseenter(function () {
                        $('#slide-top').stop(true, false)
                        $('#slide-top').animate({
                            'padding-left': '21.875%'
                        }, 500);

                        $('#slide-bottom').stop(true, false);
                        $('#slide-bottom').animate({
                            'padding-right': '21.875%'
                        }, 500);
                    }).mouseleave(function () {
                        $('#title h1').stop(true, false);
                        $('#title h1').animate({
                            'padding': '0 25%'
                        }, 500);
                    }); 
                }, 2005); 
            }
            if (window.matchMedia("(min-width: 700px)").matches){
                //souris sur le mail (attention le "a" pas le "p")
                $("#mail a").mouseenter(function () {
                    $('#mail').animate({
                        'width': '22em'
                    }, 300);

                }).mouseleave(function () {
                    $('#mail').animate({
                        'width': '10.25em'
                    }, 300);
                });
            }
        
        }

        if(isMobile) {
            $("header, #title h1").css({ "filter": "blur(" + 0 + "px)" });
            $("#title h1, #arrow").css({ "opacity": 1 });            
            $("html").css({ 'overflow-y': 'visible' });
        }
        

    });
    // $(windows).resize(function () {
    //     if (window.matchMedia("(max-width:699px)").matches){

    //         $("header, #title h1").css({ "filter": "blur(" + 0 + "px)" });
    //         $("#title h1, #arrow").css({ "opacity": 1 });
    //         $('#title h1').css({ 'padding': '0 25%' });
    //         $("html").css({ 'overflow-y': 'visible' });

    //         $(".navbar").slideUp(0);
    //     }

    // });

});