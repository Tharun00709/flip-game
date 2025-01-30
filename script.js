const flipButton = document.getElementById('flip-button');
const resultDiv = document.getElementById('result');

flipButton.addEventListener('click', () => {
  const random = Math.random(); // Generate a random number between 0 and 1
  const result = random < 0.5 ? 'Heads' : 'Tails'; // 50% chance for heads or tails
  resultDiv.textContent = `Result: ${result}`;
});
