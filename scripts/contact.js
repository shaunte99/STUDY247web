document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const output = document.getElementById("formOutput");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();
  
      if (name && email && subject && message) {
        output.classList.remove("hidden");
        output.innerHTML = `
          <h3>Thank you for reaching out!</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p>We'll get back to you soon. 😊</p>
        `;
        form.reset();
      } else {
        output.classList.remove("hidden");
        output.innerHTML = `<p>Please fill in all fields before submitting.</p>`;
      }
    });
  });
  