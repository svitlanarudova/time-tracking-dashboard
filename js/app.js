document.addEventListener('DOMContentLoaded', () => {
  // Find elements
  const listItems = document.querySelectorAll('.user-dashboard__list li');
  const cards = document.querySelectorAll('.dashboard__item');
  let jsonData;

  // Get label text for previous period
  function previousLabel(timeframe) {
    if (timeframe === 'daily') return 'Yesterday';
    if (timeframe === 'weekly') return 'Last Week';
    if (timeframe === 'monthly') return 'Last Month';
  }

  // Update all cards with data
  function render(timeframe) {
    if (!jsonData) return;

    cards.forEach((card) => {
      const title = card.querySelector('.item-dashboard__title').childNodes[0].textContent.trim();
      const dataItem = jsonData.find(item => item.title === title);

      if (!dataItem) return;

      const current = dataItem.timeframes[timeframe].current;
      const previous = dataItem.timeframes[timeframe].previous;

      card.querySelector('.item-dashboard__value').textContent = `${current}hrs`;
      card.querySelector('.item-dashboard__last').textContent = `${previousLabel(timeframe)} - ${previous}hrs`;
    });
  }

  // Add click handlers to buttons
  listItems.forEach(item => {
    const button = item.querySelector('button');

    button.addEventListener('click', () => {
      // Remove active state from all buttons
      listItems.forEach(li => {
        li.classList.remove('--active');
        li.querySelector('button').setAttribute('aria-selected', 'false');
      });

      // Add active state to clicked button
      item.classList.add('--active');
      button.setAttribute('aria-selected', 'true');

      const timeframe = button.id;
      render(timeframe);
    });
  });

  // Load JSON data
  fetch('/files/data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load JSON');
      }
      return response.json();
    })
    .then(data => {
      jsonData = data;
      console.log('✅ Data loaded:', jsonData);
      render('weekly');
    })
    .catch(error => {
      console.error('Error loading JSON:', error);
    });
});