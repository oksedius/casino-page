export const appState = {
  currentTab: "recent",
  filteredGames: [],
};

export function setCurrentTab(tab) {
  appState.currentTab = tab;
}

export function setFilteredGames(games) {
  appState.filteredGames = games;
}
