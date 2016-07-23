$('.js-tabs__titles a').click(function () {
    $(this).parents('.js-tabs').find('.js-tabs__titles a').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.js-tabs').find('.js-tabs__content .js-tabs__item').removeClass('active');
    var currentSelector = '.js-tabs__content .js-tabs__item:eq(' + $(this).index() + ')';
    $(this).parents('.js-tabs').find(currentSelector).addClass('active');
    return false;
});


$(".b-carousel_a").owlCarousel({
    items: 6,
    dots: false,
    smartSpeed: 500,
    navText: [],
    nav: true,
    margin: 40,
});
$(".b-carousel_b").owlCarousel({
    items: 5,
    dots: false,
    smartSpeed: 500,
    navText: [],
    nav: true,
    margin: 40,
});
$(".b-carousel_c").owlCarousel({
    items: 4,
    dots: false,
    smartSpeed: 500,
    navText: [],
    nav: true,
    margin: 40,
});
$(".b-carousel-foto").owlCarousel({
    items: 12,
    dots: false,
    smartSpeed: 500,
    navText: [],
    nav: true,
    margin: 5,
});
$(".b-slider").owlCarousel({
    items: 1,
    smartSpeed: 500,
    navText: [],
    loop: true,
    nav: true,
});


function setEqualHeight(columns){
    var tallestcolumn = 0;
    columns.each(function(){
        currentHeight = $(this).height();
        if(currentHeight > tallestcolumn) {
            tallestcolumn = currentHeight;
        }
    });
    columns.height(tallestcolumn);
}

$(window).on('load resize', function () {
	setEqualHeight($(".b-prod-item__content"));
});


// sticky menu
var menu = document.querySelector('.b-header-menu');
var origOffsetY = menu.offsetTop;

function scroll () {
  if ($(window).scrollTop() >= origOffsetY) {
    $('.b-header-menu').addClass('sticky');
  } else {
    $('.b-header-menu').removeClass('sticky');
  }
}

document.onscroll = scroll;
