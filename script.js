var scrollDuration = 500;

var leftPaddle = document.getElementsByClassName("left-paddle");
var rightPaddle = document.getElementsByClassName("right-paddle");

var itemsLength = $(".card").length;
var itemSize = $(".card").outerWidth(true);

var paddleMargin = 20;

var getMenuWrapperSize = function () {
  return $(".menu-wrapper").outerWidth();
};
var menuWrapperSize = getMenuWrapperSize();

$(window).on("resize", function () {
  menuWrapperSize = getMenuWrapperSize();
});

var menuVisibleSize = menuWrapperSize;

var getMenuSize = function () {
  return itemsLength * itemSize;
};
var menuSize = getMenuSize();

var menuInvisibleSize = menuSize - menuWrapperSize;

var getMenuPosition = function () {
  return $(".scrollmenu").scrollLeft();
};

$(".scrollmenu").on("scroll", function () {
  menuInvisibleSize = menuSize - menuWrapperSize;

  var menuPosition = getMenuPosition();

  var menuEndOffset = menuInvisibleSize - paddleMargin;
});

// scroll to left
$(rightPaddle).on("click", function () {
  $(".scrollmenu").animate(
    {
      scrollLeft: getMenuPosition() + 100,
    },
    scrollDuration
  );
});

// scroll to right
$(leftPaddle).on("click", function () {
  $(".scrollmenu").animate(
    {
      scrollLeft: getMenuPosition() - 100,
    },
    scrollDuration
  );
});
