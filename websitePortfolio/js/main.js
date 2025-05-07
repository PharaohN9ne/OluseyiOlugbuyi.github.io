// Smooth scroll for internal links
document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple contact form handler (you can wire up to an email service)
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for reaching out! I’ll get back to you soon.');
  e.target.reset();
});

// Generate QR code
const qrcode = new QRCode(document.getElementById('qrcode'), {
  text: window.location.href,
  width: 128,
  height: 128
});

// chat-toggle
document.getElementById('chat-toggle').addEventListener('click', () => {
  const botEl = document.getElementById('botui-app');
  botEl.style.display = botEl.style.display === 'none' ? 'block' : 'none';
});
