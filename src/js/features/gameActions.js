export function initGameCards() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("game-card__button--primary")) {
      const card = e.target.closest(".game-card");
      const gameName = card?.dataset.gameName;

      if (gameName) {
        console.log("Play game:", gameName);
        alert(`Starting ${gameName}...`);
      }
    }

    if (
      e.target.classList.contains("game-card__button") &&
      !e.target.classList.contains("game-card__button--primary")
    ) {
      const card = e.target.closest(".game-card");
      const gameName = card?.dataset.gameName;

      if (gameName) {
        console.log("Demo game:", gameName);
        alert(`Starting demo for ${gameName}...`);
      }
    }
  });
}
