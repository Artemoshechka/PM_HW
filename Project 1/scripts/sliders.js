$(document).ready(function(){
    let new_legth = NEW.length;
    if (new_legth >= 4){
        $('.products-list-new__items').slick({
            arrows:true,
            infinite:false,
            speed:500,
            slidesToShow:4,
            responsive:[
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
    }else if(new_legth === 3){
        $('.products-list-new__items').slick({
            arrows:true,
            infinite:false,
            speed:500,
            slidesToShow:3,
            responsive:[
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow:1
                    }
                },
            ]
        });
    }else if(new_legth === 2){
        $('.products-list-new__items').slick({
            arrows:true,
            infinite:false,
            speed:500,
            slidesToShow:2,
            responsive:[
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow:1
                    }
                },
            ]
        });
    }else if(new_legth === 1){
        $('.products-list-new__items').slick({
            arrows:true,
            infinite:false,
            speed:500,
            slidesToShow:1,
        });
    }

    let recommended_legth = RECOMMENDED.length;
    if (recommended_legth >= 4){
        $('.products-list-recommended__items').slick({
            arrows:true,
            infinite:false,
            speed:500,
            slidesToShow:4,
            responsive:[
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
    }else if(recommended_legth === 3){
        $('.products-list-recommended__items').slick({
            arrows:true,
            infinite:false,
            speed:500,
            slidesToShow:3,
            responsive:[
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow:1
                    }
                },
            ]
        });
    }else if(recommended_legth === 2){
        $('.products-list-recommended__items').slick({
            arrows:true,
            infinite:false,
            speed:500,
            slidesToShow:2,
            responsive:[
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow:1
                    }
                },
            ]
        });
    }else if(recommended_legth === 1){
        $('.products-list-recommended__items').slick({
            arrows:true,
            infinite:false,
            speed:500,
            slidesToShow:1,
        });
    }

    let sale_legth = RECOMMENDED.length;
    if (sale_legth >= 4){
        $('.products-list-sale__items').slick({
            arrows:true,
            infinite:false,
            speed:500,
            slidesToShow:4,
            responsive:[
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
    }else if(sale_legth === 3){
        $('.products-list-sale__items').slick({
            arrows:true,
            infinite:false,
            speed:500,
            slidesToShow:3,
            responsive:[
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow:1
                    }
                },
            ]
        });
    }else if(sale_legth === 2){
        $('.products-list-sale__items').slick({
            arrows:true,
            infinite:false,
            speed:500,
            slidesToShow:2,
            responsive:[
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow:1
                    }
                },
            ]
        });
    }else if(sale_legth === 1){
        $('.products-list-sale__items').slick({
            arrows:true,
            infinite:false,
            speed:500,
            slidesToShow:1,
        });
    }


    $('.promosWrapper').slick({
        arrows:true,
        infinite:false,
        speed:500,
        slidesToShow:4,
        responsive:[
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

    $('.we-in-numbers__items').slick({
        arrows:true,
        infinite:false,
        speed:500,
        slidesToShow:6,
        responsive:[
            {
                breakpoint: 980,
                settings: {
                    slidesToShow:4
                }
            },
        ]
    });

    let items_number = MENU.length
    if (items_number > 10){
        $('.products').slick({
            arrows:true,
            infinite:false,
            speed:500,
            slidesToShow:10,
        });
    }

    $('.news-and-slider__right__slides').slick({
        arrows:true,
        infinite:true,
        dots:true,
        speed:500,
        slidesToShow:1,
        autoplay:true,
        autoplaySpeed:5000,
    });
});