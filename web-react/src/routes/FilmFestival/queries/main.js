import { gql } from '@apollo/client'

export const DELETE_ITEMS = gql`
  mutation deleteFilmFestivals($where: FilmFestivalWhere!) {
    deleteFilmFestivals(where: $where) {
        nodesDeleted
        relationshipsDeleted
    }
  }
`

export const UPDATE_ITEM = gql`
  mutation updateFilmFestivals($id: ID!, $updateInput: FilmFestivalUpdateInput) {
    updateFilmFestivals(
      where: { id: $id }
      update: $updateInput
      ) {
      filmFestivals {
        id
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
      }
  }
`


export const CREATE_ITEMS = gql`
  mutation createFilmFestivals($input: [FilmFestivalCreateInput!]!) {
    createFilmFestivals(input: $input) {
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
    # $orderBy: [FilmFestivalSort]
      $filter : FilmFestivalWhere
  ) {
    filmFestivals(
      options: { limit: $first, offset: $offset, sort: [{ radiatorID: DESC }] }
      where  : $filter
    ) {
      id
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
export const GET_BY_ID = gql`
  query getItemDetails(
    $id: ID!
  ) {
    filmFestivals(
      where: { id: $id }
    ) {
      id
      radiatorID
      nameInternational
      nameOriginal
      address
      about
      email
      telephone
      dateStart
      dateEnd
      level
      foundingYear
      locatedInCountry
      takesPlaceInCity
      awards
      isFIAPFAccredited
      isAcademyAccredited
      isEFAAccredited
      isBaftaAccredited
      isGoyaAccredited
      isMeliesAccredited
      isCanandianScreenGuildAccredited
      isEAAAccredited
      isFriends
      isPartner
      acceptsFilmLenghts
      acceptsFilmGenre01
      acceptsFilmGenre02
      acceptsFilmGenre03
      deadlineMonth
      rulesAndRegulations
      premiereRequirement
      filmAge
      organisers
      directors
      seniorProgrammer01
      seniorProgrammer02
      seniorProgrammer03
      shortsProgrammer01
      shortsProgrammer02
      websiteMain
      facebookPage
      instagramProfile
      twitterProfile
      cinandoProfile
      iMDBProfile
      filmfreewayLink
      submissionPageOriginal
      submissionPageFilmfreeway
      submissionDateEarly
      submissionDateRegular
      submissionDateLate
      submissionFeeEarly
      submissionFeeRegular
      submissionFeesLate
      submissionRegulations
      venue01
      venue02
      venue03
      venue04
      venue05
      selectionLaurel
      awardLaurel

    }
  }
`
