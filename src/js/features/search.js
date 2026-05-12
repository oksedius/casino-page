import { gamesData } from "../data/games.js";
import { createSearchGameCard } from "../components/searchGameCard.js";
import { filterGames } from "./games.js";
import { debounce } from "../utils/debounce.js";

export function renderSearchResults(games) {
  const container = document.getElementById("searchResults");
  const titleElement = document.querySelector(".search-overlay__results-title");

  if (!container) return;

  if (games.length === 0) {
    container.innerHTML = '<div class="search-no-results">No games found</div>';
    if (titleElement) titleElement.style.display = "none";
    return;
  }

  if (titleElement) titleElement.style.display = "block";
  container.innerHTML = games.map(createSearchGameCard).join("");
}

export function initSearch() {
  const searchBtn = document.getElementById("searchBtn");
  const searchOverlay = document.getElementById("searchOverlay");
  const closeSearch = document.getElementById("closeSearch");
  const searchInput = document.getElementById("searchInput");
  const clearSearch = document.getElementById("clearSearch");

  if (
    !searchBtn ||
    !searchOverlay ||
    !closeSearch ||
    !searchInput ||
    !clearSearch
  ) {
    return;
  }

  const closeOverlay = () => {
    searchOverlay.classList.remove("active");
    searchInput.value = "";
    clearSearch.style.display = "none";
    filterGames("");
  };

  searchBtn.addEventListener("click", () => {
    searchOverlay.classList.add("active");
    renderSearchResults(gamesData);
    setTimeout(() => searchInput.focus(), 100);
  });

  closeSearch.addEventListener("click", closeOverlay);

  clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    clearSearch.style.display = "none";
    renderSearchResults(gamesData);
    searchInput.focus();
    filterGames("");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && searchOverlay.classList.contains("active")) {
      closeOverlay();
    }
  });

  searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) {
      closeOverlay();
    }
  });

  const handleSearchInput = debounce((value) => {
    const term = value.toLowerCase().trim();
    const results =
      term === ""
        ? gamesData
        : gamesData.filter((game) => game.name.toLowerCase().includes(term));

    renderSearchResults(results);
    filterGames(value);
  }, 300);

  searchInput.addEventListener("input", (e) => {
    const value = e.target.value;
    clearSearch.style.display = value ? "flex" : "none";
    handleSearchInput(value);
  });

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".search-game-card");
    if (!card) return;

    const gameId = Number(card.dataset.gameId);
    const game = gamesData.find((item) => item.id === gameId);

    if (game) {
      console.log("Open game:", game.name);
      alert(`Starting ${game.name}...`);
      closeOverlay();
    }
  });
}
