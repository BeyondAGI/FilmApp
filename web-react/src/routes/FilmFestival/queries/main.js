import { gql } from '@apollo/client'

export const CREATE_LIST = gql`
  mutation createFilmFestivals(
    $input: [FilmFestivalCreateInput!]!)
     {
      createFilmFestivals(input: $input){
        filmFestivals {
          id
          radiatorID
          nameInternational
        }
      }
    }
`

export const GET_LIST = gql`
  query usersPaginateQuery(
    $first  : Int
    $offset : Int
    $orderBy: [FilmFestivalSort]
    $filter : FilmFestivalWhere
  ) {
    filmFestivals(
      options: { limit: $first, skip: $offset, sort: $orderBy }
      where  : $filter
    ) {
      radiatorID
      nameInternational
      address
      about
      email
      telephone
      level
      foundingYear
      locatedInCountry
      takesPlaceInCity
      acceptsFilmLenghts
      acceptsFilmGenre01
      rulesAndRegulations
      premiereRequirement
      filmAge
    }
    filmFestivalCount
  }
`
