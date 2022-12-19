function activityNav(activity) {
    switch (activity) {
        case 'workshop':
            $('.workshop-carousel').css({
                "height": "initial",
                "opacity": 1
            });
            $('.palestra-carousel').css({
                "height": "0px",
                "opacity": 0
            });
            $('.tudo-carousel').css({
                "height": "0px",
                "opacity": 0
            });
            $('.outros-carousel').css({
                "height": "0px",
                "opacity": 0
            });
            break;
        case 'palestra':
            $('.palestra-carousel').css({
                "height": "initial",
                "opacity": 1
            });
            $('.workshop-carousel').css({
                "height": "0px",
                "opacity": 0
            });
            $('.tudo-carousel').css({
                "height": "0px",
                "opacity": 0
            });
            $('.outros-carousel').css({
                "height": "0px",
                "opacity": 0
            });
            break;
        case 'tudo':
            $('.tudo-carousel').css({
                "height": "initial",
                "opacity": 1
            });
            $('.workshop-carousel').css({
                "height": "0px",
                "opacity": 0
            });
            $('.palestra-carousel').css({
                "height": "0px",
                "opacity": 0
            });
            $('.outros-carousel').css({
                "height": "0px",
                "opacity": 0
            });
            break;
        case 'outros':
            $('.outros-carousel').css({
                "height": "initial",
                "opacity": 1
            });
            $('.workshop-carousel').css({
                "height": "0px",
                "opacity": 0
            });
            $('.palestra-carousel').css({
                "height": "0px",
                "opacity": 0
            });
            $('.tudo-carousel').css({
                "height": "0px",
                "opacity": 0
            });
            break;

    }
}

$('.palestra-carousel').css({
    "height": "0px",
    "opacity": 0
});
$('.workshop-carousel').css({
    "height": "0px",
    "opacity": 0
});
$('.outros-carousel').css({
    "height": "0px",
    "opacity": 0
});
$(document).ready(activityNav);