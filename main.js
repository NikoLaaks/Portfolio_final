// Initialize EmailJS with your public key
emailjs.init('sYSWu1bBdfZ3k1C30'); // Replace with your actual public key from EmailJS

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    console.log('Form submitted'); // Debug log
    console.log('Form element:', this); // Debug log
    
    // Send the form using EmailJS
    emailjs.sendForm('service_wjfx8u8', 'template_6iwbx1o', form)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        form.reset(); // Clear the form after successful submission
      }, function(error) {
        console.log('FAILED...', error);
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
