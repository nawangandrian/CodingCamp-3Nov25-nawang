  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80; 
      if (pageYOffset >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("text-blue-600", "font-bold"); 
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("text-blue-600", "font-bold"); 
      }
    });
  });

  const modal = document.getElementById("welcomeModal");
  const submitBtn = document.getElementById("submitName");
  const guestInput = document.getElementById("guestName");
  const greetingEl = document.getElementById("greeting");

  submitBtn.addEventListener("click", () => {
    const name = guestInput.value.trim();
    if(name === "") {
      alert("Silakan masukkan namamu dulu!");
      return;
    }

    modal.classList.add("hidden");

    const message = `Hi, ${name}, please welcome I'm...`;
    let index = 0;

    function type() {
      if(index < message.length) {
        greetingEl.textContent += message.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    }

    type();
});
function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const output = document.getElementById("submittedData");

  if (!name || !email || !message) {
    alert("Please fill in all fields!");
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email address!");
    return false;
  }

  output.classList.remove("hidden");
  output.innerHTML = `
    <h3 class="text-blue-700 font-bold mb-2">Your Message:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  document.getElementById("contactForm").reset();
  return true;
}
