// Initialize EmailJS with your public key
emailjs.init('sYSWu1bBdfZ3k1C30'); // Replace with your actual public key from EmailJS

const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_USER_ID' with actual values from your EmailJS account
    emailjs.sendForm('service_wjfx8u8', 'template_6iwbx1o', this)
      .then(function(response) {
        alert('Message sent successfully!');
      }, function(error) {
        alert('Failed to send message. Please try again later.');
      });
  });


  function toggleAbout() {
    const moreText = document.getElementById("more-text");
    const btn = document.getElementById("toggle-btn");
  
    moreText.classList.toggle("show");
  
    if (moreText.classList.contains("show")) {
      btn.innerText = "Show less";
    } else {
      btn.innerText = "Read more";
    }
  }
