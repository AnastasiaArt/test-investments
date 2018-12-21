$(function() {
  if ( $(window).width() < 768 ) {

  $(".invest__item .hidden").hide();
  $a = $(".invest__item a");
  $a.on("click", function(event) {
    event.preventDefault();
    // var itemId = $(this).attr("id");
    // $("#invest").attr("style", "background: url(img/bg-item"+itemId+".jpg) no-repeat !important; transition: 1s;");
    $("#invest").attr('style', 'background-color: #f3f2da;');
    $a.not(this).next().slideUp(500);
    $(this).next().slideToggle(500);
  });
}
});
