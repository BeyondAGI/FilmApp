import { gql } from '@apollo/client'


export const DELETE_ITEMS =  gql`
mutation UpdatePeopleMutation($fromId: ID, $toId: ID) {
  updateOrganisations(disconnect: {people: {where: {node: {id: $toId}}}}, where: {id: $fromId}) {
    organisations {
      id
      people {
        id
        displayName
      }
    }
  }
  }
`

export const UPDATE_ITEM =  gql`
mutation UpdateOrganisationMutation($fromId: ID, $toId: ID) {
  updateOrganisations(connect: {people: {where: {node: {id: $toId}}}}, where: {id: $fromId}) {
    organisations {
      id
      people {
        id
        displayName
      }
    }
  }
  }
`
export const CREATE_ITEMS =  gql`
mutation UpdateOrganisationMutation($fromId: ID, $toId: ID, $relationshipProperties: HasMemberCreateInput) {
  updateOrganisations(connect: {people: {where: {node: {id: $toId}}, edge: $relationshipProperties}}, where: {id: $fromId}) {
    organisations {
      id
      people {
        id
        displayName
      }
    }
  }
  }
`
const MEMBER_ORG_FIELDS = `
edges {
  fromDate
  toDate
    node {
    name
  }
}
`

export const GET_LIST = gql`
  query usersPaginateQuery(
      $first  : Int
      $offset : Int
      $parentId: ID
    # $orderBy: [PersonProfessionSort]
    #  $filter : PersonProfessionWhere
  ) {
    people(
      options: { limit: $first, offset: $offset, sort: [{ radiatorID: DESC }] }
      where  : { organisations: {id: $parentId}}
    ) {
      id
      radiatorID
      displayName
      organisationsConnection {${MEMBER_ORG_FIELDS}}
    }
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
    }
  }
`
