console.log("testing")

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "malzacher@gmail.com",
    Password: "5AE837F92DD55D21B561805A74948DF7C845",
    To: 'nicholas.malzacher@gmail.com',
    From: 'nicholas.malzacher@gmail.com',
    Subject: "You Got an Email from: " + document.getElementById("email").value,
    Body: "Name: " + document.getElementById("name").value + "<br> Email:" + document.getElementById("email").value + "<br> Subject:" + document.getElementById("subject").value
  }).then(
    message => alert("Mail sent successfully! Thank you for your message!")
  );
}