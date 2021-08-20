export class OptionListService {
  getAspectRatios() {
    return fetch('data/aspectRatios.json')
      .then((res) => res.json())
      .then((d) => d.data)
  }
  getCountries() {
    return fetch('data/countries.json')
      .then((res) => res.json())
      .then((d) => d.data)
  }
  getFilmAges() {
    return fetch('data/filmAges.json')
      .then((res) => res.json())
      .then((d) => d.data)
  }
  getFilmGenres() {
    return fetch('data/filmGenres.json')
      .then((res) => res.json())
      .then((d) => d.data)
  }
  getFilmLengths() {
    return fetch('data/filmLengths.json')
      .then((res) => res.json())
      .then((d) => d.data)
  }
  getFilmStatuses() {
    return fetch('data/filmStatuses.json')
      .then((res) => res.json())
      .then((d) => d.data)
  }
  getFramerates() {
    return fetch('data/framerates.json')
      .then((res) => res.json())
      .then((d) => d.data)
  }
  getPremierRequirements() {
    return fetch('data/premierRequirements.json')
      .then((res) => res.json())
      .then((d) => d.data)
  }
  getShootingMediums() {
    return fetch('data/shootingMediums.json')
      .then((res) => res.json())
      .then((d) => d.data)
  }
}
