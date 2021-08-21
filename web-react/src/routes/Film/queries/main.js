import { gql } from '@apollo/client'

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
    updateFilms(
      where: { id: $id }
      update: $updateInput
      ) {
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


export const CREATE_ITEMS = gql`
  mutation createFilms($input: [FilmCreateInput!]!) {
    createFilms(input: $input) {
      films {
        id
        radiatorID
        titleInternational
      }
    }
  }
`

export const GET_LIST = gql`
  query usersPaginateQuery(
      $first  : Int
      $offset : Int
    # $orderBy: [FilmSort]
      $filter : FilmWhere
  ) {
    films(
      options: { limit: $first, skip: $offset, sort: [{ radiatorID: DESC }] }
      where  : $filter
    ) {
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
    filmCount
  }
`
export const GET_BY_ID = gql`
  query getItemDetails(
    $id: ID!
  ) {
    films(
      where: { id: $id }
    ) {
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
