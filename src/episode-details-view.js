function renderDetailsPage(data, planets, species) {
  const urlParams = (new URL(document.location)).searchParams;
  const episodeNumber = urlParams.get('episode');
  const app = document.getElementById('app');
  const container = document.querySelector('.container');
  const episode = searchEpisodeNum(data.episode_id);

  const mainTitle = document.createElement('h1');
  const numberTitle = document.createElement('h3');
  const backLink = document.createElement('a');
  const episodeDescr = document.createElement('p');
  const infoContainer = document.createElement('div');
  const planetsList = document.createElement('ol');
  const speciesList = document.createElement('ol');
  const planetsBlock = document.createElement('div');
  const speciesBlock = document.createElement('div');
  const planetsTitle = document.createElement('h2');
  const speciesTitle = document.createElement('h2');

  mainTitle.textContent = data.title;
  mainTitle.classList.add('mb-5');

  numberTitle.textContent = `Episode ${episode}`;
  planetsTitle.textContent = 'Planets';
  speciesTitle.textContent = 'Species';

  backLink.href = './index.html';
  backLink.textContent = 'Back to Episodes';
  backLink.classList.add('back-link','btn', 'btn-danger');

  infoContainer.classList.add('info');
  planetsTitle.classList.add('text-warning');
  speciesTitle.classList.add('text-warning');
  numberTitle.classList.add('episode-number');

  episodeDescr.classList.add('shadow-sm', 'p-3', 'mb-5', 'episode-descr')
  episodeDescr.textContent = data.opening_crawl;

  app.style.backgroundImage = `url(./img/card-bg-${+episodeNumber - 1}.jpg)`;

  planetsBlock.append(planetsTitle, planetsList);
  speciesBlock.append(speciesTitle, speciesList);
  infoContainer.append(planetsBlock, speciesBlock);
  container.append(numberTitle, mainTitle, backLink, episodeDescr, infoContainer);

  createInfoList(planets, planetsList);
  createInfoList(species, speciesList);
}

const createInfoList = (arr, container) => {
  for (let elem of arr) {
    const planet = document.createElement('li');
    planet.textContent = elem;
    container.append(planet);
  }
}

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
export {renderDetailsPage};
