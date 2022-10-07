(async function loadFilms() {
  // получаем данные по фильмам и выводим
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();
    const getRender = await import('./main-page-view.js');
    getRender.renderFilmsListPage(data);
})();

