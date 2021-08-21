import { gql } from '@apollo/client'

export const DELETE_ITEMS = gql`
  mutation deleteDevTasks($where: DevTaskWhere!) {
    deleteDevTasks(where: $where) {
        nodesDeleted
        relationshipsDeleted
    }
  }
`

export const UPDATE_ITEM = gql`
  mutation updateDevTasks($id: ID!, $updateInput: DevTaskUpdateInput) {
    updateDevTasks(
      where: { id: $id }
      update: $updateInput
      ) {
      devTasks {
        id
      title
      description
      creationDate
      comments
      priority
      assignedToSprint
      }
      }
  }
`


export const CREATE_ITEMS = gql`
  mutation createDevTasks($input: [DevTaskCreateInput!]!) {
    createDevTasks(input: $input) {
      devTasks {
        id
        title
        description
      }
    }
  }
`

export const GET_LIST = gql`
  query usersPaginateQuery(
      $first  : Int
      $offset : Int
    # $orderBy: [DevTaskSort]
      $filter : DevTaskWhere
  ) {
    devTasks(
      options: { limit: $first, skip: $offset, sort: [{ priority: ASC }] }
      where  : $filter
    ) {
      id
      title
      description
      creationDate
      comments
      priority
      assignedToSprint
    }
    devTaskCount
  }
`
export const GET_BY_ID = gql`
  query getItemDetails(
    $id: ID!
  ) {
    devTasks(
      where: { id: $id }
    ) {
      id
      title
      description
      creationDate
      comments
      priority
      assignedToSprint

    }
  }
`
