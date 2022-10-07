(async function loadEpisode() {
  const urlParams = (new URL(document.location)).searchParams;
  const episodeNumber = urlParams.get('episode');
  const response = await fetch(`https://swapi.dev/api/films/${episodeNumber}`);
  const data = await response.json();
  const getRender = await import('./episode-details-view.js');

  let planets = [];
  const planetsList = data.planets;
  const planetsRequests = planetsList.map(planet => fetch(planet).then((response) => response.json()));

  let species = [];
  const speciesList = data.species;
  const speciesRequests = speciesList.map(species => fetch(species).then((response) => response.json()));

  // получаем список планет
  // Promise.all(planetsRequests)
  //   .then(responses => {
  //     responses.forEach(
  //       (response) => planets.push(response.name)
  //     )
  //     return planets;
  //   })
  //   .then(list => planets = [...list])
  //   .then(() => getRender.renderDetailsPage(data, planets))

  await Promise.all(planetsRequests)
    .then((planetsList) => {
      planetsList.forEach((el) => {
        planets.push(el.name)
      })
    })

  await Promise.all(speciesRequests)
    .then((speciesList) => {
      speciesList.forEach((el) => {
        species.push(el.name);
      })
    })

    getRender.renderDetailsPage(data, planets, species)

}
)();
