import { gql } from '@apollo/client'

export const DELETE_ITEMS = gql`
  mutation deletePersonProfession($filter: PersonProfessionFilter!) {
    deletePersonProfession(filter: $filter) {
      msg
      numUids
    }
  }
`

export const UPDATE_ITEM = gql`
  mutation updatePersonProfession($id: [ID!], $updateInput: PersonProfessionPatch) {
    updatePersonProfession(input: { filter: { id: $id }, set: $updateInput }) {
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
  mutation addPersonProfession($input: [AddPersonProfessionInput!]!) {
    addPersonProfession(input: $input) {
      personProfession {
        id
        radiatorID
        name
        description
      }
    }
  }
`

export const GET_LIST = gql`
  query usersPaginateQuery($first: Int, $offset: Int, $filter: PersonProfessionFilter, $order: PersonProfessionOrder) {
    queryPersonProfession(first: $first, offset: $offset, filter: $filter, order: $order) {
      id
      radiatorID
      name
      description
    }
  }
`
export const GET_BY_ID = gql`
  query getItemDetails($id: ID!) {
    getPersonProfession(id: $id) {
      id
      radiatorID
      name
      description
    }
  }
`
