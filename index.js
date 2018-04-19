
// progress scroll border
$(document).on("scroll", function () {
  // total border length
  var borderLen = ($(window).height() * 2) + ($(window).width() * 2);

  // percentage of current scrolled position
  var percentScrolled = $(document).scrollTop() / ($(document).height() - $(window).height());

  // ratio of horizontal border to total border
  var horizontal = $(window).width() / borderLen;

  // ratio of vertical border to total border
  var vertical = $(window).height() / borderLen;

  var bordertop = percentScrolled / horizontal;
  var borderright = (percentScrolled - horizontal) / vertical;
  var borderbottom = (percentScrolled - horizontal - vertical) / horizontal;
  var borderleft = (percentScrolled - horizontal - vertical - horizontal) / vertical;

  $("div.border-top").css("width",  100 * bordertop + "%");
  $("div.border-right").css("height", 100 * borderright + "%");
  $("div.border-bottom").css("width",  100 * borderbottom + "%");
  $("div.border-left").css("height", 100 * borderleft + "%");
})