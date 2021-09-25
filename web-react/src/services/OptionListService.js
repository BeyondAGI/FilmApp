import { injectable } from 'inversify'
import 'reflect-metadata'


// @injectable()
export class OptionListService {

  getAspectRatios() {
    return fetch('data/aspectRatios.json')
      .then((res) => res.json())
      .then((d) => d.data)
  }
  getCountries() {
    return this.countries ?? fetch('data/countries.json')
      .then((res) => res.json())
      .then((d) => d.data.map(row => ({label: row.label, value: row.label})))
  }
  getFilmAges() {
    return fetch('data/filmAges.json')
      .then((res) => res.json())
      .then((d) => d.data.map(row => ({label: row.label, value: row.label})))
  }
  getFilmGenres() {
    return fetch('data/filmGenres.json')
      .then((res) => res.json())
      .then((d) => d.data.map(row => ({label: row.label, value: row.label})))
  }
  getFilmLengths() {
    return fetch('data/filmLengths.json')
      .then((res) => res.json())
      .then((d) => d.data.map(row => ({label: row.label, value: row.label})))
  }
  getFilmStatuses() {
    return fetch('data/filmStatuses.json')
      .then((res) => res.json())
      .then((d) => d.data.map(row => ({label: row.label, value: row.label})))
  }
  getFramerates() {
    return fetch('data/framerates.json')
      .then((res) => res.json())
      .then((d) => d.data.map(row => ({label: row.label, value: row.label})))
  }
  getPremierRequirements() {
    return fetch('data/premierRequirements.json')
      .then((res) => res.json())
      .then((d) => d.data.map(row => ({label: row.label, value: row.label})))
  }
  getShootingMediums() {
    return fetch('data/shootingMediums.json')
      .then((res) => res.json())
      .then((d) => d.data.map(row => ({label: row.label, value: row.label})))
  }
  getRelationshipFilmSubmission() {
    return fetch('data/_relationshipFilmSubmission.json')
      .then((res) => res.json())
      .then((d) => d.data.map(row => ({label: row.label, value: row.value})))
  }

}
