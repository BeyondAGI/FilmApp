import { FieldType } from '../../../../common/enums'

export let emptyItem = {
  _fromId_: '',
}

export const columnsTable = [
  { field: 'id', header: 'Neo4J UUID', hidden: true },
  { field: 'name', header: 'Profession Name', colGroup: 'General Info', isDefault: true },
]
export const columnsForm = [
  { field: '_fromId_', header: 'Neo4J UUID', hidden: true },
  { field: '_toId_', header: 'Profession', colGroup: 'Profession', type: FieldType.DROPDOWN, options: 'personProfessions' },
]
