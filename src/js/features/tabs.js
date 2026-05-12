import { setCurrentTab } from "../state/appState.js";
import { updateGamesDisplay } from "./games.js";

export function initTabs() {
  const tabButtons = document.querySelectorAll(".tabs__button");
  const recentContainer = document.getElementById("recentGames");

  if (!tabButtons.length || !recentContainer) return;

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const tab = button.dataset.tab;
      setCurrentTab(tab);

      if (tab === "recent") {
        recentContainer.classList.remove("hidden");
        updateGamesDisplay();
      } else {
        recentContainer.classList.add("hidden");
      }
    });
  });
}
