import { gql } from '@apollo/client'


export const DELETE_ITEMS =  gql`
mutation UpdatePeopleMutation($fromId: ID, $toId: ID) {
  updatePeople(disconnect: {hasProfessions: {where: {node: {id: $toId}}}}, where: {id: $fromId}) {
    people {
      id
      hasProfessions {
        id
        name
      }
    }
  }
  }
`

export const UPDATE_ITEM =  gql`
mutation UpdatePeopleMutation($fromId: ID, $toId: ID) {
  updatePeople(connect: {hasProfessions: {where: {node: {id: $toId}}}}, where: {id: $fromId}) {
    people {
      id
      hasProfessions {
        id
        name
      }
    }
  }
  }
`
export const CREATE_ITEMS =  gql`
mutation UpdatePeopleMutation($fromId: ID, $toId: ID) {
  updatePeople(connect: {hasProfessions: {where: {node: {id: $toId}}}}, where: {id: $fromId}) {
    people {
      id
      hasProfessions {
        id
        name
      }
    }
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
    personProfessions(
      options: { limit: $first, offset: $offset, sort: [{ radiatorID: DESC }] }
      where  : { people: {id: $parentId}}
    ) {
      id
      radiatorID
      name
      description
    }
  }
`
export const GET_BY_ID = gql`
  query getItemDetails(
    $id: ID!
  ) {
    personProfessions(
      where: { id: $id }
    ) {
      id
      radiatorID
      name
      description
    }
  }
`
