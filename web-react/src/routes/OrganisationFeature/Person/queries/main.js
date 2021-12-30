import { gql } from '@apollo/client'

export const DELETE_ITEMS = gql`
  mutation deletePersons($filter: PersonFilter!) {
    deletePerson(filter: $filter) {
      msg
      numUids
    }
  }
`

export const UPDATE_ITEM = gql`
  mutation updatePersons($id: [ID!], $updateInput: PersonPatch) {
    updatePerson(input: { filter: { id: $id }, set: $updateInput }) {
      person {
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
  mutation addPerson($input: [AddPersonInput!]!) {
    addPerson(input: $input) {
      person {
        id
        radiatorID
      }
    }
  }
`

export const GET_LIST = gql`
  query usersPaginateQuery($first: Int, $offset: Int, $filter: PersonFilter, $order: PersonOrder) {
    queryPerson(first: $first, offset: $offset, filter: $filter, order: $order) {
      id
      radiatorID
      displayName
      emailMain
      addressHomeCountryIso
      phoneFix
      preferredLanguage
    }
  }
`
export const GET_BY_ID = gql`
  query getItemDetails($id: ID!) {
    getPerson(id: $id) {
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
