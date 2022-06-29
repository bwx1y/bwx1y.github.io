$.getJSON("https://api.github.com/users/bwx1y", function (data) {
  // console.log(data);
  gsap.to("#Name", { duration: 1.5, text: data.name, delay: 1 });
  gsap.to("#Bio", { duration: 1.5, text: data.bio, delay: 1.1 });
});

$(".fa-github-square").click(function (e) {
  e.preventDefault();
  window.location.assign("https://github.com/bwx1y");
});
$(".fa-instagram").click(function (e) {
  e.preventDefault();
  window.location.assign("https://instagram.com/nedy_888");
});
$(".fa-facebook").click(function (e) {
  e.preventDefault();
  window.location.assign("https://www.facebook.com/nedy.nugroho.1");
});
