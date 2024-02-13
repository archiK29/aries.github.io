$(document).ready(function () {
  $(".header__img").on("click", function () {
    $(".header__inner").toggleClass("menu-active");
    $(".header__img").toggleClass("header__img_active");
    $("body").toggleClass("body-lock");
  });

  $(".slider-blog__inner").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          vertical: true,
          verticalSwiping: true,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  });
});
