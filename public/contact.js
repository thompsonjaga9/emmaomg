;window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("service_jdr9aq4", "template_2j62v6r", this).then(
        function () {
          alert("Message sent Successfully!");
        },
        function (error) {
          alert("FAILED...", error);
        }
      );
    });
};