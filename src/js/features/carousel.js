import { carouselGames } from "../data/carouselGames.js";
import { createCarouselItem } from "../components/carouselItem.js";

export function renderCarousel() {
  const carouselContainer = document.getElementById("gamesCarousel");
  if (!carouselContainer) return;

  carouselContainer.innerHTML = carouselGames.map(createCarouselItem).join("");
}
