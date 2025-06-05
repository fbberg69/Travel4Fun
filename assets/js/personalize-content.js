async function personalizeContent() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const city = data.city || 'Lisbon';
    const destinationSection = document.querySelector('#featured-destination');
    destinationSection.querySelector('h2').textContent = `Explore ${city} with Travel4Fun`;
    destinationSection.querySelector('p').textContent = `Discover the best attractions and tips for ${city} in 2025.`;
  } catch (error) {
    console.error('Error fetching location:', error);
  }
}
document.addEventListener('DOMContentLoaded', personalizeContent);