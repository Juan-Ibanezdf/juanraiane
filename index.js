let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const counterElement = document.getElementById('counter');

// Carrossel
function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000);

// Contador de tempo juntos
const startDate = new Date('2024-06-01T00:00:00'); // Data inicial do relacionamento
function updateCounter() {
  const now = new Date();
  const difference = now - startDate;

  const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44)); // Média de dias por mês
  const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  counterElement.textContent = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

updateCounter();
setInterval(updateCounter, 1000);

document.getElementById('year').textContent = new Date().getFullYear();