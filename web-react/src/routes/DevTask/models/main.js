import { FieldType } from '../../../common/enums'

export let emptyItem = {
  title: '',
  description: '',
  creationDate: new Date(),
  comments: '',
  priority: 3,
  assignedToSprint: '',
}

export const columns = [
  { field: 'title', header: 'Title', colGroup: 'General Info' },
  { field: 'id', header: 'Neo4J UUID', hidden: true },
  { field: 'description', header: 'Description' },
  { field: 'creationDate', header: 'Creation Date' },
  { field: 'comments', header: 'Comments', colGroup: 'Planning' },
  { field: 'priority', header: 'Priority', type: FieldType.INTEGER },
  { field: 'assignedToSprint', header: 'Assigned To Sprint' },
]

export const columnsAll = [
  { field: 'title', header: 'Title', colGroup: 'General Info' },
  { field: 'id', header: 'Neo4J UUID', hidden: true },
  { field: 'description', header: 'Description', type: FieldType.TEXTAREA },
  { field: 'creationDate', header: 'Creation Date', type: FieldType.DATE },
  { field: 'comments', header: 'Comments', colGroup: 'Planning', type: FieldType.TEXTAREA },
  { field: 'priority', header: 'Priority' },
  { field: 'assignedToSprint', header: 'Assigned To Sprint' },
]
