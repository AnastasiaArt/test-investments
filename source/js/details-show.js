$(function() {
  $(".invest__item .hidden").hide();
  $a = $(".invest__item a");

  $a.on("click", function(event) {
    event.preventDefault();
    //   // var itemId = $(this).attr("id"); //если нужно менять bg-image при смене invest__item
    //   // $("#invest").attr("style", "background: url(img/bg-item"+itemId+".jpg) no-repeat !important; transition: 1s;");
    if ( $(window).width() < 960 ) {
      $(this).toggleClass("active");
      $("#invest").toggleClass("invest__bg");
      $a.not(this).next().slideUp(500);
      $(this).next().slideToggle(500);
    } else {
      $a.not(this).next().hide();
      $(this).next().show();
    }

    $('.invest__link--active').removeClass('invest__link--active');
    $(this).addClass("invest__link--active");
    $(this).siblings().removeClass("invest__link--active");
    $(".tab-nav-wrapper ul li").eq($(this).parent().index()).find(".tab-nav-wrapper__link").addClass("current");
    $(".tab-nav-wrapper ul li").eq($(this).parent().index()).siblings().find(".tab-nav-wrapper__link").removeClass("current");
  });
  
  if ( $(window).width() > 960 ) {
    $(".invest__item .detail--self").show();
    $(".invest__link--self").addClass("invest__link--active");
    $(".one .tab-nav-wrapper__link").addClass("current");
    $('.tab-nav-wrapper ul li a').click(function(){
      $('.current').removeClass('current');
      $(this).addClass('current');
      $('.invest__list > li').find(".hidden").hide();
      $('.invest__list > li').eq($(this).parent().index()).find(".hidden").show();
      $(".invest__list > li").eq($(this).parent().index()).find(".invest__link").addClass("invest__link--active");
      $(".invest__list > li").eq($(this).parent().index()).siblings().find(".invest__link").removeClass("invest__link--active");
    });
  }
});
