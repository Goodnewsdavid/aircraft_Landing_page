/*=============== EMAIL JS ===============*/

const contactForm = document.querySelector("#contact-form");
contactMessage = document.querySelector("#contact-message");


contactForm.addEventListener("submit", sendEmail)

const serviceID = "service_vbp9q3v";
const templateID = "template_0q4dmo5";
function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(serviceID, templateID, contactForm).then(
    () => {
      contactMessage.textContent = "Message Sent Successfully ✅";

      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);

      contactForm.reset();
    },
    () => {
      contactMessage.textContent = "Message not sent (service error) ❌";
    }
  );
}