export function createCarouselItem(game) {
  return `
    <div class="carousel-item">
      <div class="carousel-item__image">
        <img src="${game.image}" alt="${game.name}">
      </div>
      <div class="carousel-item__info">
        <div class="carousel-item__name">${game.name}</div>
        <div class="carousel-item__money">${game.money}</div>
        <div class="carousel-item__user">${game.user}</div>
      </div>
    </div>
  `;
}
