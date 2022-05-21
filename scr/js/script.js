function github() {
  window.location.assign("https://github.com/bwx1y");
}
function instagram() {
  window.location.assign("https://instagram.com/nedy_888");
}
function facebook() {
  window.location.assign("https://www.facebook.com/nedy.nugroho.1");
}
$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass('active')
});
