import { gql } from '@apollo/client'

export const DELETE_ITEMS = gql`
  mutation deleteOrganisation($filter: OrganisationFilter!) {
    deleteOrganisation(filter: $filter) {
      msg
      numUids
    }
  }
`

export const UPDATE_ITEM = gql`
  mutation updateOrganisation($id: [ID!], $updateInput: OrganisationPatch) {
    updateOrganisation(input: { filter: { id: $id }, set: $updateInput }) {
      organisation {
        id
        name
        addressCountry
        addressCity
        displayTags
        mainEmail
      }
    }
  }
`

export const CREATE_ITEMS = gql`
  mutation addOrganisation($input: [AddOrganisationInput!]!) {
    addOrganisation(input: $input) {
      organisation {
        id
        name
        addressCountry
        addressCity
        displayTags
        mainEmail
      }
    }
  }
`

export const GET_LIST = gql`
  query usersPaginateQuery($first: Int, $offset: Int, $filter: OrganisationFilter, $order: OrganisationOrder) {
    queryOrganisation(first: $first, offset: $offset, filter: $filter, order: $order) {
      id
      name
      addressCountry
      addressCity
      displayTags
      mainEmail
      countMembers
    }
  }
`
export const GET_BY_ID = gql`
  query getItemDetails($id: ID!) {
    getOrganisation(id: $id) {
      id
      radiatorID
      name
      type
      addressCity
      addressCountry
      addressCountryIso
      addressStreet01
      addressStreet02
      addressZip
      vatNumber
      displayName
      peopleName01
      peopleName02
      peopleName03
      peopleName04
      peopleName05
      peopleName06
      peopleName01JobTitle
      peopleName02JobTitle
      peopleName03JobTitle
      organizationPeopleName04JobTitle
      organizationPeopleNamer05JobTitle
      organizationPeopleName06JobTitle
      displayTags
      mainEmail
      fax
      mainPhone
      notes
      website
      fullAddress
      tBankCode
      bankName
      bankBic
      bankIban
      banktNo
      bankAddress
      organizationVimeoPage
      facebookFanPage
      instagramProfile
      youtubeProfile
      twitterProfile
    }
  }
`
