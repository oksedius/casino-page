import "../styles/main.scss";

import { renderCarousel } from "./features/carousel.js";
import { initGamesState, updateGamesDisplay } from "./features/games.js";
import { initSearch } from "./features/search.js";
import { initTabs } from "./features/tabs.js";
import { initGameCards } from "./features/gameActions.js";
import { initShowAllButton } from "./features/showAll.js";

document.addEventListener("DOMContentLoaded", () => {
  initGamesState();
  renderCarousel();
  updateGamesDisplay();
  initSearch();
  initTabs();
  initGameCards();
  initShowAllButton();
});
