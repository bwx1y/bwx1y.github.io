$.getJSON("https://api.github.com/users/bwx1y", function (data) {
  // console.log(data);
  gsap.to("#Name", { duration: 1.5, text: data.name, delay: 1 });
  gsap.to("#Bio", { duration: 1.5, text: data.bio, delay: 1.1 });
});

$.getJSON("/scr/data/data.json", (data) => {
    // console.log(data)
    $.each(data.Project, function (i, data) { 
      //  console.log(data)
      $("#listProject").append('<div class="col-md-4 m-3 animation"><div class="card for " data-aos="zoom-in"><img src="'+data.img+'" class=" card-img-top" alt="project"><div class="card-body"><h5 class="card-title">'+data.title+'</h5><p class="card-text">'+data.info+'</p><a href="'+data.link+'" class=" btn btn-outline-primary">Go There</a></div></div></div>');
    });
    $("#aboutMe1").append(data.Profile.aboutMe1);
    $("#aboutMe2").append(data.Profile.aboutMe2);
  }
);

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
