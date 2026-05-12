export function initShowAllButton() {
  const showAllBtn = document.querySelector(".show-all-btn");

  if (!showAllBtn) return;

  showAllBtn.addEventListener("click", () => {
    console.log("Show all games");
    alert("Showing all top games...");
  });
}
