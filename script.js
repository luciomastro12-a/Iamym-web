const cards = document.querySelectorAll('.service-card, .step, .split-card, .dashboard-card');

cards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.12), rgba(255,255,255,0.045) 42%)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.background = '';
  });
});
