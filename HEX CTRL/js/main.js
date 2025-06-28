function filterProducts(category) {
  let products = document.querySelectorAll('.product');
  products.forEach(p => {
    if (category === 'all' || p.classList.contains(category)) {
      p.style.display = 'block';
    } else {
      p.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('popup').style.display = 'flex';
  }, 3000);

  document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm('service_xxxxx', 'template_xxxxx', this, 'public_xxxxx')
      .then(() => {
        alert('Subscribed!');
        closePopup();
      }, () => {
        alert('Failed to subscribe');
      });
  });
});

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
