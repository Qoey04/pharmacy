// Prescription file validation
document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("prescriptionFile");
  if (fileInput) {
    fileInput.addEventListener("change", function () {
      let file = this.files[0];
      if (file && !file.type.startsWith("image/") && file.type !== "application/pdf") {
        alert("Please upload an image or PDF file.");
        this.value = "";
      }
    });
  }

  // Contact form submit
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Your message has been sent. We will contact you soon!");
      contactForm.reset();
    });
  }

  // Prescription form submit
  const prescriptionForm = document.getElementById("prescriptionForm");
  if (prescriptionForm) {
    prescriptionForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Prescription uploaded successfully!");
      prescriptionForm.reset();
    });
  }
});
