function apiDb() {
  $.getJSON("https://sheetdb.io/api/v1/sgsvu1x0tpsjn", function (data) {
    // console.log(data)
    $.each(data, function (i, data) {
      //   console.log(data)
      $("#Hasil").append('<div class="col-md-4"><div class="card border-dark text-center mb-2"><div class="card-header"><h3>?</h3></div><div class=" card-body"><p class="card-text">' + data.Pesan + "</p></div></div></div>");
    });
  });
}

function profile() {

  $.getJSON("https://v1.nocodeapi.com/bwx1y/instagram/oLpKoXvywoPkbzSU", function (data) {
    console.log(data.data[0].media_url)
    // document.getElementById("Profile").innerHTML = '<img alt="BWX1Y" scr="'+data.data[0].media_url+'" width="200" class="rounded-circle img-thumbnail" id="Profile"/>'
  });
}
