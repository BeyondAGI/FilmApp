import { gql } from '@apollo/client'

export const DELETE_ITEMS = gql`
  mutation deleteFilm($filter: FilmFilter!) {
    deleteFilm(filter: $filter) {
      msg
      numUids
    }
  }
`

export const UPDATE_ITEM = gql`
  mutation updateFilm($id: [ID!], $updateInput: FilmPatch) {
    updateFilm(input: { filter: { id: $id }, set: $updateInput }) {
      film {
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

export const CREATE_ITEMS = gql`
  mutation addFilm($input: [AddFilmInput!]!) {
    addFilm(input: $input) {
      film {
        id
        radiatorID
        titleInternational
      }
    }
  }
`

export const GET_LIST = gql`
  query usersPaginateQuery($first: Int, $offset: Int, $filter: FilmFilter, $order: FilmOrder) {
    queryFilm(first: $first, offset: $offset, filter: $filter, order: $order) {
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
`
export const GET_BY_ID = gql`
  query getItemDetails($id: ID!) {
    getFilm(id: $id) {
      id
      radiatorID
      nikitaVenturesID
      filmfriendID
      filmhubID
      amazonID
      vimeoID
      eidrID
      imdbID
      isanNr
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
      isFilmfriendPortraitCoverCreated
      isFilmfriendLandscapeCoverCreated
      isFilmfriendThumbnailCreated
      isFilmfriendSliderCreated
      isFilmfriendBackgroundCreated
      isFilmfriendPortraitCreated
      isFilmfriendMaterialsOkQualityCheckPlatform
      filmhubLocation
      filmhubMaterialsOkQualityCheckPlatform
      filmfriendLocation
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
