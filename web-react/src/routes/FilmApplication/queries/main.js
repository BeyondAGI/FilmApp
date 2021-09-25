import { gql } from '@apollo/client'
// import { gqlTag } from 'graphql-tag'

export const DELETE_ITEMS = gql`
  mutation deleteFilms($where: FilmWhere!) {
    deleteFilms(where: $where) {
      nodesDeleted
      relationshipsDeleted
    }
  }
`

export const UPDATE_ITEM = gql`
  mutation updateFilms($id: ID!, $updateInput: FilmUpdateInput) {
    updateFilms(where: { id: $id }, update: $updateInput) {
      films {
        id
        radiatorID
        titleInternational
        titleOriginal
        loglineEN
        synopsisLongEN
        duration
        productionYear
        productionMonth
        worldPremiereDate
        status
        framerate
        ageRating
      }
    }
  }
`

// export const CREATE_ITEMS = gql`
//   mutation createFilms($input: [FilmCreateInput!]!) {
//     createFilms(input: $input) {
//       films {
//         id
//         radiatorID
//         titleInternational
//       }
//     }
//   }
// `

export const CREATE_RELATIONSHIP_TEMP = gql`
mutation UpdateFilmsMutation($updateFilmsConnect: FilmConnectInput, $updateFilmsWhere: FilmWhere) {
  updateFilms(connect: $updateFilmsConnect, where: $updateFilmsWhere) {
    films {
      id
    }
  }
}
`


// export const CREATE_RELATIONSHIPS = (relationshipName = "shortlistedAtFilmFestivals") =>  {
//   return gql`
// mutation UpdateFilmsMutation($fromId: ID, $toId: ID, $relationshipProperties: FilmApplicationDetailsCreateInput) {
//   updateFilms(connect: {${relationshipName}: {where: {node: {id: $toId}}, edge: $relationshipProperties}}, where: {id: $fromId}) {
//     films {
//       id
//     }
//   }
//   }
// `
// };

export const CREATE_ITEMS =  gql`
mutation UpdateFilmsMutation($fromId: ID, $toId: ID, $relationshipProperties: FilmApplicationDetailsCreateInput) {
  updateFilms(connect: {shortlistedAtFilmFestivals: {where: {node: {id: $toId}}, edge: $relationshipProperties}}, where: {id: $fromId}) {
    films {
      id
    }
  }
  }
`




const APPLICATION_FIELDS = `
edges {
  applicationDate
  feeUSD
  feeEUR
  waivedAmountUSD
  waivedAmountEUR
          node {
    nameInternational
  }
}
`

const ENTRY_FEE_FIELDS = `
edges {
  receiveDate
  budgetUSD
  budgetEUR
          node {
    nameInternational
  }
}
`


const CONDITION = `{ 
  OR: [{submittedToFilmFestivals_NOT: null}{selectedAtFilmFestivals_NOT: null}{shortlistedAtFilmFestivals_NOT: null}{toSubmitToFilmFestivals_NOT: null}{notSelectedAtFilmFestivals_NOT: null}{hasEntryFees_NOT: null}]
}
`


export const GET_LIST = gql`
  query usersPaginateQuery(
      $first  : Int
      $offset : Int
    # $orderBy: [FilmSort]
      # $filter : FilmWhere
  ) {
    films(
      options: { limit: $first, offset: $offset, sort: [{ radiatorID: DESC }] }
      where  : ${CONDITION}
    ) {
      id
      radiatorID
      titleInternational
      countSubmittedToFilmFestivals
      countSelectedAtFilmFestivals
      countShortlistedAtFilmFestivals
      countToSubmitToFilmFestivals
      countNotSelectedAtFilmFestivals
      countFestivalApplications
      submittedToFilmFestivalsConnection {${APPLICATION_FIELDS}}
      selectedAtFilmFestivalsConnection {${APPLICATION_FIELDS}}
      shortlistedAtFilmFestivalsConnection {${APPLICATION_FIELDS}}
      toSubmitToFilmFestivalsConnection {${APPLICATION_FIELDS}}
      notSelectedAtFilmFestivalsConnection {${APPLICATION_FIELDS}}
      hasEntryFeesConnection {${ENTRY_FEE_FIELDS}}
    }
    filmCount
  }
`
export const GET_BY_ID = gql`
  query getItemDetails($id: ID!) {
    films(where: { id: $id }) {
      id
      radiatorID
      titleInternational
      titleOriginal
      titleEN
      titleFR
      titleDE
      titleES
      loglineEN
      loglineFR
      loglineDE
      loglineES
      synopsisShortEN
      synopsisShortFR
      synopsisShortDE
      synopsisShortES
      synopsisLongEN
      synopsisLongFR
      synopsisLongDE
      synopsisLongES
      duration
      productionYear
      productionMonth
      worldPremiereDate
      status
      framerate
      ageRating
      containsNudity
      containsViolence
      containsDrugUse
      iMDBReviews
      rottenTomatoesReviews
      letterboxdReviews
      iMDBRating
      rottenTomatoesRating
      letterboxdRating
      filmFestivalViewers
      tvStationViewers
      vodViewers
      boxOffice
      previewByFilmCriticMagazine
      previewByFilmCritic
      reviewByFilmCriticMagazine
      reviewByFilmCritic
      facebookFanPageURL
      instagramProfileURL
      twitterProfileURL
      websiteOfficial
      iMDbLink
      tMDBLink
      letterboxdPage
      justWatchPage
      filmfreewayPage
      audioFormat
      aspectRatio
      masterShootingMedium
      masterShootingFormat
      cameraUsed
      lensesUsed
      editingSoftwareUsed
      threeDSoftwareUsed
      vFXSoftwareUsed
      animationTechniqueUsed
      isFilmhubPosterCreated
      isFilmhubPortraitStillCreated
      isFilmhubLandscapeStillCreated
      isFilmhubLandscapeExtra01StillCreated
      isFilmhubLandscapeExtra02StillCreated
      isFilmhubLandscapeExtra03StillCreated
      isFilmhubLandscapeExtra04StillCreated
      isFilmfriendPortraitCoverCreated
      isFilmfriendLandscapeCoverCreated
      isFilmfriendThumbnailCreated
      isFilmfriendSliderCreated
      isFilmfriendBackgroundCreated
      isFilmfriendMaterialsOkQualityCheckPlatform
      filmhubPosterLocation
      filmhubPortraitStillLocation
      filmhubLandscapeStillLocation
      filmhubLandscapeExtra01StillLocation
      filmhubLandscapeExtra02StillLocation
      filmhubLandscapeExtra03StillLocation
      filmhubLandscapeExtra04StillLocation
      filmhubMaterialsOkQualityCheckPlatform
      filmfriendPortraitCoverLocation
      filmfriendLandscapeCoverLocation
      filmfriendThumbnailLocation
      filmfriendSliderLocation
      filmfriendBackgroundLocation
      vuulrVimeoLinkFilm
      vuulrVimeoLinkTrailer
      filmfreewayVimeoLinkFilm
      festhomeVimeoLinkFilm
      youtubeTrailerFHDRadiatorChannel
      youtubeTrailer4KUHDRadiatorChannel
      vimeoTrailerRadiatorWebsite
      vimeoTrailerPublic
      vimeoScreenerProduction
      vimeoScreenerDirector
      vimeoScreenerCrew
      vimeoScreenerDOP
      vimeoScreenerProgrammers
      vimeoScreenerBuyers
      vimeoScreenerPress
      vimeoOnDemandFHD
      vimeoOnDemand4KUHD
      amazonUS
      amazonUK
      amazonDE
      amazonES
      tubi
      dindintv
      kisKisKeepItShortEN
      kisKisKeepItShortES
      kisKisKeepItShortDE
      kisKisKeepItShortFR
      bekkesShortFilms
      wocomoMovies
      wocomoHumanity
      filmfriend
      amazonIMDBTV
      filmzie
      fearless
      overdrive
      kinoscope
      sofytv
      daFilms
      argo
      avaLibrary
      cinesquare
      cinesud
      guideDoc
      soonerBelgium
      soonerGermany
      criterionCollection
      creedGlobalMedia
      artexFilm
      cineBooks
      cinetree
      flexNetTv
      filxPremiere
      filmocrazy
      filmin
      gayBingeTV
      movieBloc
    }
  }
`
