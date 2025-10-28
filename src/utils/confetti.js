export function initConfetti(
  container,
  colors = ['#ff0000', '#bb4b94', '#31f600', '#0D6F51'],
  density = 10,
  time = 10,
) {
  const canvas = document.createElement('canvas');
  canvas.classList.add('confetti-canvas');
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight;

  const confettiColors = colors;
  const confettiCount = density;
  const confettis = [];
  const generationTime = time * 1000;
  const startTime = Date.now();

  function generateConfetti() {
    if (Date.now() - startTime < generationTime) {
      for (let i = 0; i < confettiCount; i++) {
        confettis.push({
          x: Math.random() * canvas.width,
          y: Math.random() * -canvas.height,
          width: Math.random() * 10 + 5,
          height: Math.random() * 15 + 5,
          color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
          speed: Math.random() * 2 + 1,
          angle: Math.random() * 2 * Math.PI,
          angularVelocity: Math.random() * 0.1 - 0.05,
          sway: Math.random() * 50 + 30,
          swayOffset: Math.random() * Math.PI * 2,
        });
      }
    }
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettis.forEach((confetti, index) => {
      confetti.y += confetti.speed;
      confetti.angle += confetti.angularVelocity;
      confetti.x += Math.sin(confetti.y / confetti.sway + confetti.swayOffset) * 2;

      if (confetti.y > canvas.height) {
        confettis.splice(index, 1);
      }

      ctx.save();
      ctx.translate(confetti.x, confetti.y);
      ctx.rotate(confetti.angle);
      ctx.fillStyle = confetti.color;
      ctx.fillRect(-confetti.width / 2, -confetti.height / 2, confetti.width, confetti.height);
      ctx.restore();
    });

    if (confettis.length > 0 || Date.now() - startTime < generationTime) {
      animationFrameId = requestAnimationFrame(drawConfetti);
    }
  }

  let animationFrameId;
  generateConfetti();
  drawConfetti();

  const resizeHandler = () => {
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  };
  window.addEventListener('resize', resizeHandler);

  const generationInterval = setInterval(() => {
    if (Date.now() - startTime >= generationTime) {
      clearInterval(generationInterval);
    } else {
      generateConfetti();
    }
  }, 100);

  return () => {
    clearInterval(generationInterval);
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', resizeHandler);
    canvas.remove();
  };
}
