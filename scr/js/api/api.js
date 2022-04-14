function apiDb() {
  $.getJSON("https://sheetdb.io/api/v1/sgsvu1x0tpsjn", function (data) {
    // console.log(data)
    $.each(data, function (i, data) {
    //   console.log(data)
      $("#Hasil").append('<div class="card border-dark mb-3"><div class="card-header"><h3>?</h3></div><div class="card-body text-dark"><p class="card-text">' + data.Pesan + "</p></div></div>");
    });
  });
}
