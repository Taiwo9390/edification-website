// Gold particle animation effect
const background = document.querySelector('.background');

for (let i = 0; i < 80; i++) {
  const particle = document.createElement('div');
  particle.classList.add('gold-particle');
  particle.style.top = Math.random() * window.innerHeight + 'px';
  particle.style.left = Math.random() * window.innerWidth + 'px';
  particle.style.width = particle.style.height = `${2 + Math.random() * 4}px`;
  particle.style.animationDuration = (4 + Math.random() * 4) + 's';
  background.appendChild(particle);
}


// Form submission logic
document.getElementById("entryForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && email) {
    // Simulate redirect to main homepage
    window.location.href = "homepage.html";
  } else {
    alert("Please enter both your name and email.");
  }
});
document.getElementById("entryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  localStorage.setItem("eteUserName", name);
  localStorage.setItem("eteUserEmail", email);

  // Redirect to homepage
  window.location.href = "homepage.html";
});

