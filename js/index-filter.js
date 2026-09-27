function initIndexFilter() {
  const filterButtons = document.querySelectorAll(".filter-button");
  const interestCards = document.querySelectorAll(
    ".interest-card[data-category]",
  );
  const filterStatus = document.querySelector("#filter-status");

  if (!filterButtons.length || !interestCards.length) {
    return;
  }

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === "all";

    button.setAttribute("aria-pressed", String(isActive));

    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;
      let visibleCount = 0;

      filterButtons.forEach((filterButton) => {
        const isSelected = filterButton.dataset.filter === selectedFilter;

        filterButton.classList.toggle("active", isSelected);
        filterButton.setAttribute("aria-pressed", String(isSelected));
      });

      interestCards.forEach((card) => {
        const categories = card.dataset.category.split(" ");

        const shouldShow =
          selectedFilter === "all" || categories.includes(selectedFilter);

        card.hidden = !shouldShow;

        if (shouldShow) {
          visibleCount += 1;
        }
      });

      if (filterStatus) {
        if (selectedFilter === "all") {
          filterStatus.textContent = `Showing all ${visibleCount} interest items.`;
        } else {
          filterStatus.textContent = `Showing ${visibleCount} ${selectedFilter} interest item${visibleCount === 1 ? "" : "s"}.`;
        }
      }
    });
  });
}

export { initIndexFilter };
