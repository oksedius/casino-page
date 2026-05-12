export function createSearchGameCard(game) {
  return `
    <div class="search-game-card" data-game-id="${game.id}">
      <img src="${game.image}" alt="${game.name}" class="search-game-card__image">
      <div class="search-game-card__content">
        <div class="search-game-card__name">${game.name}</div>
        <div class="search-game-card__info">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5v14l11-7z" fill="currentColor"/>
          </svg>
          <span>${game.provider}</span>
        </div>
      </div>
    </div>
  `;
}
