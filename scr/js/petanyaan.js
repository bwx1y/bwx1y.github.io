const scriptURL = "https://script.google.com/macros/s/AKfycbx9nkVKGFgPjUhUKMdmxUxBWEMCRzoYjw-mNWR7nFIWoRBHoQkdT3zWpcZRhXm2Pm3k/exec";
const form = document.forms["submit-to-google-sheet"];
const BtnKirim = document.querySelector(".kirim");
const BtnLoading = document.querySelector(".Loding");
const Nama = document.querySelector("#nama");
const user = document.querySelector("#User");
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

$.getJSON("https://api.ipify.org?format=json", function (data) {
  // console.log(data.ip);
  $("#ip").val(data.ip);
});

form.addEventListener("submit", (e) => {
  nama.value = navigator.userAgent;

  e.preventDefault();
  // tampilka tombol
  BtnLoading.classList.toggle("d-none");
  BtnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      BtnLoading.classList.toggle("d-none");
      BtnKirim.classList.toggle("d-none");
      form.reset();
      console.log("Success!");
      Toast.fire({
        icon: "success",
        title: "Your message has been sent",
      });
    })
    .catch((error) => {
      BtnLoading.classList.toggle("d-none");
      BtnKirim.classList.toggle("d-none");
      form.reset();
      console.error("Error!", error.message);
      Toast.fire({
        icon: "error",
        title: "There's a problem trying again",
      });
    });
});
