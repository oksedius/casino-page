export function createGameCard(game) {
  return `
    <div class="game-card" data-game-id="${game.id}" data-game-name="${game.name.toLowerCase()}">
      <img src="${game.image}" alt="${game.name}" class="game-card__image">
      <div class="game-card__overlay">
        <div class="game-card__buttons">
          <button class="game-card__button game-card__button--primary">Play</button>
          <button class="game-card__button">Demo</button>
        </div>
        <div class="game-card__info">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
          <span>${game.provider}</span>
        </div>
      </div>
    </div>
  `;
}
