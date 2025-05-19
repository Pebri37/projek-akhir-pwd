document.addEventListener("DOMContentLoaded", function () {
  const daftarSelect = document.getElementById("daftar-role");
  daftarSelect.addEventListener("change", function () {
    const selected = this.value;
    if (selected) {
      window.location.href = selected;
    }
  });
});
