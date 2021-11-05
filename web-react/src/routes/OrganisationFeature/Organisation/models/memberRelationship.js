import { FieldType } from '../../../../common/enums'

export let emptyItem = {
  _fromId_: '',
}

export const columnsTable= [
  { field: 'id', header: 'Neo4J UUID', hidden: true },
  { field: 'displayName', header: 'Person Display Name', colGroup: 'General Info', isDefault: true },
  { field: 'fromDate', header: 'From Date', colGroup: 'Duration', isDefault: true },
  { field: 'toDate', header: 'To Date', isDefault: true },
]
export const columnsForm = [
  { field: '_fromId_', header: 'Neo4J UUID', hidden: true },
  { field: '_toId_', header: 'Person', colGroup: 'People', type: FieldType.DROPDOWN, options: 'people' },
  { field: 'fromDate', header: 'From Date', colGroup: 'Duration', isDefault: true },
  { field: 'toDate', header: 'To Date', isDefault: true },
]
