const scriptURL = "https://script.google.com/macros/s/AKfycbyCo9xFxL_6aAC1m2aXjNklonvUpb5YfcOjCF4nIwRiQSdW89xxBEiNkZ4UmEUJYYnsng/exec";
const form = document.forms["faldibule-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //ketika submit diklik
  //tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      //tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      //reset form
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
