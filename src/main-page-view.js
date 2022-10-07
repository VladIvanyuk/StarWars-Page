function renderFilmsListPage(filmsData) {
  // Отрисовывоем контент главной страницы
  const filmsList = filmsData.results;
  const appContainer = document.querySelector('.container');

  filmsList.forEach(element => {
    const currentIndex = filmsList.indexOf(element);
    const episodeContainer = document.createElement('a');
    const episodeNumber = document.createElement('h3');
    const episodeTitle = document.createElement('h2');

    episodeTitle.innerHTML = element.title;
    episodeNumber.innerHTML = `Episode ${searchEpisodeNum(element.episode_id)}`;

    episodeContainer.classList.add('episode-block');
    episodeNumber.classList.add('episode-block__number');
    episodeTitle.classList.add('episode-block__title');

    episodeContainer.href = `./episode-page.html?episode=${currentIndex + 1}`;
    episodeContainer.style.backgroundImage = `url(./img/card-bg-${currentIndex}.jpg)`;

    episodeContainer.append(episodeNumber, episodeTitle);
    appContainer.append(episodeContainer);
    console.log(element)
  });
};

const searchEpisodeNum = (id) => {
  // ищем номер эпизода по айдишнику
  switch(id) {
    case 1:
      return 'IV';
      break;
    case 2:
      return 'V';
      break;
    case 3:
      return 'VI';
      break;
    case 4:
      return 'I';
      break;
    case 5:
      return 'II';
      break;
    case 6:
      return 'III';
      break;
  }
}

export {renderFilmsListPage};
