$(function(){
    $(".top_slider").slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
        ]

    });
    $(".reviews_slider").slick({
      arrows: false,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive : [
        {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false
        }
      },
      ]
    });
    $('.menu_btn').on('click', function(){
            $('.menu_list').toggleClass('menu_list--active');
        });
   
});