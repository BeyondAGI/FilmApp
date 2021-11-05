import { gql } from '@apollo/client'

export const DELETE_ITEMS = gql`
  mutation deletePeople($where: PersonWhere!) {
    deletePeople(where: $where) {
        nodesDeleted
        relationshipsDeleted
    }
  }
`

export const UPDATE_ITEM = gql`
  mutation updatePeople($id: ID!, $updateInput: PersonUpdateInput) {
    updatePeople(
      where: { id: $id }
      update: $updateInput
      ) {
      people {
        id
      radiatorID
      displayName
      emailMain
      addressHomeCountryIso
      phoneFix
      preferredLanguage
      }
      }
  }
`


export const CREATE_ITEMS = gql`
  mutation createPeople($input: [PersonCreateInput!]!) {
    createPeople(input: $input) {
      people {
        id
        radiatorID
      }
    }
  }
`

export const GET_LIST = gql`
  query usersPaginateQuery(
      $first  : Int
      $offset : Int
    # $orderBy: [PersonSort]
      $filter : PersonWhere
  ) {
    people(
      options: { limit: $first, offset: $offset, sort: [{ radiatorID: DESC }] }
      where  : $filter
    ) {
      id
      radiatorID
      displayName
      emailMain
      addressHomeCountryIso
      phoneFix
      preferredLanguage
    }
    personCount
  }
`
export const GET_BY_ID = gql`
  query getItemDetails(
    $id: ID!
  ) {
    people(
      where: { id: $id }
    ) {
      id
      radiatorID
      displayName
      addressHomeCity
      addressHomeCountryEN
      addressHomeCountryIso
      addressHomeStreet01
      addressHomeStreet02
      addressHomeZip
      nameOrganisation01
      nameOrganisation02
      emailMain
      prefixEmail
      emailPreferred
      emailHyperlink
      nameFirstName
      nameLastName
      nameFullName
      nameNickname
      biographyEN
      biographyFR
      phoneFix
      peplePhoneMobile
      preferredLanguage
      profession
      profession01
      profession02
      languagesSpoken
      websiteMain
      imdbProfile
      linkedinProfile
      vimeoProfile
      instagramProfile
      twitterProfile
      facebookProfile
      socialMediaOther
      bank01Name
      bank01Code
      bank01BicCode
      bank01HolderName
      bank01IbanNr
      bank01IbanCountryCode
      bank01AccountCountry
      bank01AccountAddress
      payPalAccount
    }
  }
`
