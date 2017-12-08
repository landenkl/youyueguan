window.onload = function () {
  function scale() {
    var Ww = document.documentElement.clientWidth;
    var sc = Ww/667;
    document.body.style.zoom=sc;
  }
  scale();
  window.onresize=function () {
    scale();
  }
}
