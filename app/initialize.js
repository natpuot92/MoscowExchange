(function () {
var topLine = document.querySelector('.top-line');
var pageHeader = document.querySelector('.page-header');
var pageHeaderHeight = pageHeader.offsetHeight

window.addEventListener('scroll', function() {
  if (pageHeaderHeight > window.pageYOffset) {
    topLine.classList.remove('sticky');
  } else {
    topLine.classList.add('sticky');
  }
})
})();
