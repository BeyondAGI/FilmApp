export let emptyItem = {
  radiatorID: 'Testing',
  name: '',
  description: '',
}

export const columnsTable= [
  { field: 'radiatorID', header: 'Radiator ID', colGroup: 'ID' },
  { field: 'id', header: 'Neo4J UUID', hidden: true },
  { field: 'name', header: 'Profession name', colGroup: 'General Info' , isDefault:true },
  { field: 'description', header: 'Description', isDefault: true },
]
export const columnsForm = [
  { field: 'id', header: 'Neo4J UUID', hidden: true },
  { field: 'radiatorID', header: 'Radiator ID', colGroup: 'ID' },
  { field: 'name', header: 'Profession name', colGroup: 'General Info' , isDefault:true },
  { field: 'description', header: 'Description', isDefault:true },
]
