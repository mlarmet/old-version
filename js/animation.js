var scrollLimit = 50;
var move = 1;

function loop() {
    
    $('#arrow').css({ 'bottom': (move*10) + 'px' });
    move = 1- move;
}

$(document).ready(function(){
    if (document.body.scrollTop < scrollLimit ||
        document.documentElement.scrollTop < scrollLimit) {
        $(".navbar").slideUp(0);
    }

    setInterval(loop, 500);
  
});
    
$(window).scroll(function (event) {
    if (document.body.scrollTop > scrollLimit || 
        document.documentElement.scrollTop > scrollLimit){
        $(".navbar").slideDown();
    } else {
        $(".navbar").slideUp();
    }
});

$(window).on("load", function () {

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
    $("html, body").animate({ scrollTop: 0 }, 0);

    //attend pour que la page soit bien chargé
    setTimeout(function () {

        $({ value: 30 }).animate({ value: 0 }, {
            duration: 750,
            step: function () {
                $("header, #title h1").css({
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
        }, 1300);
    }, 750);
    //attend la fin de l'animation du début 
    setTimeout(function () {

        //affiche le titre au cas où l'animation aurait ratée
        $("header, #title h1").css({"filter": "blur(" + 0 + "px)"});
        $("#title h1").css({"opacity": 1});
        $('#title h1').css({'padding': '0 25%'});
        $("html").css({ 'overflow-y': 'visible' });
        
        //effet titre souris passe dessus
        $("#title").mouseenter(function () {
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


    //souris sur le mail (attention le "a" pas le "p")
    $("#mail a").mouseenter(function () {
        $('#mail').animate({
            'width': '25em'
        }, 300);
    }).mouseleave(function () {
        $('#mail').animate({
            'width': '10.25em'
        }, 300);
    });

});