const scoreElement = document.getElementById("score");
const cards = document.querySelectorAll(".card");

let score = 0;

for (const card of cards) {
  card.addEventListener("click", function (event) {
    handleCardClick();
  });
}

function handleCardClick(cardId) {
  score++;
  scoreElement.textContent = "Score: " + score;
}
