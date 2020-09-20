$(function () {
  $(".slider__inner").slick({
    rows: 0,
    prevArrow:
      '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>',
    appendArrows: '.slider-arrows',
  });

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "13px",
    readOnly: true,
    ratedFill: "#ffc000"
  });

  var mixer = mixitup('.products__inner-box');
});
