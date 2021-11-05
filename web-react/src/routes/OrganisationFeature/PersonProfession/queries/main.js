import { gql } from '@apollo/client'

export const DELETE_ITEMS = gql`
  mutation deletePersonProfessions($where: PersonProfessionWhere!) {
    deletePersonProfessions(where: $where) {
        nodesDeleted
        relationshipsDeleted
    }
  }
`

export const UPDATE_ITEM = gql`
  mutation updatePersonProfessions($id: ID!, $updateInput: PersonProfessionUpdateInput) {
    updatePersonProfessions(
      where: { id: $id }
      update: $updateInput
      ) {
      personProfession {
        id
      radiatorID
      name
      description
      }
      }
  }
`


export const CREATE_ITEMS = gql`
  mutation createPersonProfessions($input: [PersonProfessionCreateInput!]!) {
    createPersonProfessions(input: $input) {
      personProfessions {
        id
        radiatorID
        name
        description
      }
    }
  }
`

export const GET_LIST = gql`
  query usersPaginateQuery(
      $first  : Int
      $offset : Int
    # $orderBy: [PersonProfessionSort]
      $filter : PersonProfessionWhere
  ) {
    personProfessions(
      options: { limit: $first, offset: $offset, sort: [{ radiatorID: DESC }] }
      where  : $filter
    ) {
      id
      radiatorID
      name
      description
    }
    filmCount
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
