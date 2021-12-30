import { gql } from '@apollo/client'

export const DELETE_ITEMS = gql`
  mutation deleteFilmFestival($filter: FilmFestivalFilter!) {
    deleteFilmFestival(filter: $filter) {
      msg
      numUids
    }
  }
`

export const UPDATE_ITEM = gql`
  mutation updateFilmFestival($id: [ID!], $updateInput: FilmFestivalPatch) {
    updateFilmFestival(input: { filter: { id: $id }, set: $updateInput }) {
      filmFestival {
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
  mutation addFilmFestival($input: [AddFilmFestivalInput!]!) {
    addFilmFestival(input: $input) {
      filmFestival {
        id
        radiatorID
        nameInternational
      }
    }
  }
`

export const GET_LIST = gql`
  query usersPaginateQuery($first: Int, $offset: Int, $filter: FilmFestivalFilter, $order: FilmFestivalOrder) {
    queryFilmFestival(first: $first, offset: $offset, filter: $filter, order: $order) {
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
`
export const GET_BY_ID = gql`
  query getItemDetails($id: ID!) {
    getFilmFestival(id: $id) {
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
      artisticDirector
      president
      founder
      programManager
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
      submissionFeeCurrency
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
      comments
    }
  }
`
