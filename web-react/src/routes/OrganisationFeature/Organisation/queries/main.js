import { gql } from '@apollo/client'

export const DELETE_ITEMS = gql`
  mutation deleteOrganisations($where: OrganisationWhere!) {
    deleteOrganisations(where: $where) {
        nodesDeleted
        relationshipsDeleted
    }
  }
`

export const UPDATE_ITEM = gql`
  mutation updateOrganisations($id: ID!, $updateInput: OrganisationUpdateInput) {
    updateOrganisations(
      where: { id: $id }
      update: $updateInput
      ) {
      organisations {
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
  mutation createOrganisations($input: [OrganisationCreateInput!]!) {
    createOrganisations(input: $input) {
      organisations {
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
  query usersPaginateQuery(
      $first  : Int
      $offset : Int
    # $orderBy: [OrganisationSort]
      $filter : OrganisationWhere
  ) {
    organisations(
      options: { limit: $first, offset: $offset, sort: [{ name: ASC }] }
      where  : $filter
    ) {
      id
      name
      addressCountry
      addressCity
      displayTags
      mainEmail
      countMembers
    }
    organisationCount
  }
`
export const GET_BY_ID = gql`
  query getItemDetails(
    $id: ID!
  ) {
    organisations(
      where: { id: $id }
    ) {
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
