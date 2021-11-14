/** @format */

// header shrink JS
// function headerShrink() {
//   $(window).scroll(function () {
//     var scrollTop = $(this).scrollTop();
//     if (scrollTop > 10) {
//       $('header').addClass('fixed');
//     } else {
//       $('header').removeClass('fixed');
//     }
//   });
// }

function tabsMenuToggle() {
  $('.tabs_btn').click(function () {
    $('.nav-tabs').slideToggle(300);
  });
}

$(document).ready(function () {
  // headerShrink();
  tabsMenuToggle();
});
