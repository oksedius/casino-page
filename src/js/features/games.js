import { gamesData } from "../data/games.js";
import { appState, setFilteredGames } from "../state/appState.js";
import { createGameCard } from "../components/gameCard.js";

export function initGamesState() {
  setFilteredGames([...gamesData]);
}

export function renderGames(games, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (games.length === 0) {
    container.innerHTML = '<div class="no-results">No games found</div>';
    return;
  }

  container.innerHTML = games.map(createGameCard).join("");
}

export function updateGamesDisplay() {
  const recentGames = appState.filteredGames.filter(
    (game) => game.category === "recent",
  );
  const topGames = appState.filteredGames.filter(
    (game) => game.category === "top",
  );

  if (appState.currentTab === "recent") {
    renderGames(recentGames, "recentGames");
  }

  renderGames(topGames, "topGames");
}

export function filterGames(searchTerm) {
  const term = searchTerm.toLowerCase().trim();

  if (term === "") {
    setFilteredGames([...gamesData]);
  } else {
    setFilteredGames(
      gamesData.filter((game) => game.name.toLowerCase().includes(term)),
    );
  }

  updateGamesDisplay();
}
