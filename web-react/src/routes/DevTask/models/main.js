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
  { field: 'title', header: 'Title', colGroup: 'General Info', isDefault:true  },
  { field: 'id', header: 'Neo4J UUID', hidden: true},
  { field: 'description', header: 'Description', isDefault:true  },
  { field: 'creationDate', header: 'Creation Date', isDefault:true  },
  { field: 'comments', header: 'Comments', colGroup: 'Planning', isDefault:true  },
  { field: 'priority', header: 'Priority', type: FieldType.INTEGER, isDefault:true  },
  { field: 'assignedToSprint', header: 'Assigned To Sprint', isDefault:true  },
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
