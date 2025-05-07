// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  // 1. Optional: dynamic QR-code generation (if using <div class="qr-code"></div> in HTML)
  const qrDiv = document.querySelector('#resume .qr-code');
  if (qrDiv && qrDiv.tagName === 'DIV') {
    new QRCode(qrDiv, {
      text: window.location.href,
      width: 150,
      height: 150
    });
  }

  // 2. Contact form stub
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert("Thank you! I'll get back to you soon.");
    form.reset();
  });
});

// Generate QR code
const qrcode = new QRCode(document.getElementById('qrcode'), {
  text: window.location.href,
  width: 128,
  height: 128
});
