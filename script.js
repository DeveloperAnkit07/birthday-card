const cake = document.getElementById('cake');
const flame = document.getElementById('flame');
const message = document.getElementById('message');

cake.addEventListener('mouseenter', () => {
  flame.style.display = 'none';
  const smoke = document.createElement('div');
  smoke.classList.add('smoke');
  cake.appendChild(smoke);
  setTimeout(() => smoke.remove(), 1500);

  message.style.opacity = 1;

  // Confetti effect
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    document.body.appendChild(confetti);

    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = 2 + Math.random() * 3 + 's';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    setTimeout(() => confetti.remove(), 5000);
  }
});
