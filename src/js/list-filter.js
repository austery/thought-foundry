// src/js/list-filter.js
// Reusable script to filter a list based on text input.

function initializeListFilter(container) {
  const input = container.querySelector('.list-filter-input');
  const list = container.querySelector('.filterable-list');

  if (!input || !list) {
    console.error('Filter input or list not found in container:', container);
    return;
  }

  // Get all direct `li` children from the list
  const listItems = Array.from(list.children).filter(child => child.tagName === 'LI');

  input.addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    listItems.forEach(item => {
      // Use textContent for a simple, broad search across the list item's text
      const itemText = item.textContent.toLowerCase();
      if (itemText.includes(searchTerm)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

// Find all filterable list containers on the page and initialize them
document.addEventListener('DOMContentLoaded', () => {
  const filterContainers = document.querySelectorAll('.filterable-container');
  filterContainers.forEach(initializeListFilter);
});
