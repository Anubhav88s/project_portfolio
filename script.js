/*Navbar Animation*/

gsap.from("nav", {
  y: -100,
  opacity: 0,
  duration: 1
});

/* Hero Section Animation */

gsap.from("#hero .content h2", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.5
});
gsap.from("#hero .content p", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.8
});
gsap.from("#hero img", {
  scale: 0,
  opacity: 0,
  duration: 1.2,
  delay: 1
});

/*Scroll-trigger Animations (applied to all sections)*/

gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    }
  });
});

/* EmailJS */

(function() {
  emailjs.init("CeoH_ddX6EWHSIlSU"); 
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const messageEl = document.getElementById("form-message");

  emailjs.sendForm("service_znw9smj", "template_g59ivfh", this)
    .then(() => {
      messageEl.textContent = "✅ Message sent successfully!";
      messageEl.className = "success";
      this.reset();

      setTimeout(() => { messageEl.textContent = ""; messageEl.className = ""; }, 5000);
    }, (error) => {
      messageEl.textContent = "❌ Failed to send message. Please try again.";
      messageEl.className = "error";
    
      setTimeout(() => { messageEl.textContent = ""; messageEl.className = ""; }, 5000);
    });
});
