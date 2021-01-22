$(document).ready(function(){
    $('.products-list-new__items').slick({
        arrows:true,
        infinite:false,
        speed:500,
        slidesToShow:4,
        responsive:[
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow:4
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow:3
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow:1
                }
            },
        ]
    });

    $('.products-list-recommended__items').slick({
        arrows:true,
        infinite:false,
        speed:500,
        slidesToShow:4,
        responsive:[
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow:4
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow:3
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow:1
                }
            },
        ]
    });

    $('.products-list-sale__items').slick({
        arrows:true,
        infinite:false,
        speed:500,
        slidesToShow:4,
        responsive:[
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow:4
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow:3
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow:1
                }
            },
        ]
    });

    $('.promosWrapper').slick({
        arrows:true,
        infinite:false,
        speed:500,
        slidesToShow:4,
        responsive:[
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow:4
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow:3
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow:1
                }
            },
        ]
    });

    $('.key-brands__wrapper').slick({
        arrows:true,
        infinite:true,
        speed:500,
        slidesToShow:9,
        responsive:[
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow:7
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow:5
                }
            },
        ]
    });
});

