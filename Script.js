
const gameList = document.querySelector('#game-list');
const searchInput = document.querySelector('#search');
const categoryLinks = document.querySelectorAll('nav a');


searchInput.addEventListener('input', filterGames);
categoryLinks.forEach(link => {
  link.addEventListener('click', filterGames);
});

function filterGames(event) {
  event.preventDefault();

  const filter = event.target.dataset.filter || searchInput.value.toLowerCase();


  gameList.querySelectorAll('.game').forEach(game => {
    const category = game.dataset.category.toLowerCase();
    const name = game.textContent.toLowerCase();


    if (category === filter || name.includes(filter)) {
      game.classList.add('active');
    } else {
      game.classList.remove('active');
    }
  });
}