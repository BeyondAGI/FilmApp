import { FieldType } from '../../../../common/enums'

export let emptyItem = {
  _isRelationship: true,
  feeUSD: 0,
  feeEUR: 0,
  waivedAmountUSD: 0,
  waivedAmountEUR: 0,
}

export const columnsTable = [
  { field: 'radiatorID', header: 'Radiator ID', colGroup: 'ID' },
  { field: 'id', header: 'Neo4J UUID', hidden: true },
  { field: 'titleInternational', header: 'International Title', colGroup: 'General Info', isDefault: true },
  { field: 'countSubmittedToFilmFestivals', header: 'Festival Submissions', isDefault: true },
  { field: 'countSelectedAtFilmFestivals', header: 'Festival Selections', isDefault: true },
  { field: 'countShortlistedAtFilmFestivals', header: 'Festival Shortlist', isDefault: true },
  { field: 'countToSubmitToFilmFestivals', header: 'Festivals To Submit', isDefault: true },
  { field: 'countNotSelectedAtFilmFestivals', header: 'Festivals Not Selected', isDefault: true },
  { field: 'countFestivalApplications', header: 'Total Number of Applications', isDefault: true },
]
export const columnsForm = [
  { field: 'id', header: 'Neo4J UUID', hidden: true },
  { field: '_fromId_', header: 'Film', colGroup: 'Film', type: FieldType.DROPDOWN, options: 'films' },
  { field: '_toId_', header: 'Film Festival', colGroup: 'Film Festival', type: FieldType.DROPDOWN, options: 'filmFestivals' },
  { field: '_RELATIONSHIP_', header: 'Relationship Type', colGroup: 'Relationship', type: FieldType.DROPDOWN, options: 'relationshipFilmSubmission' },
  { field: 'applicationDate', header: 'Application Date', type: FieldType.DATE, colGroup: 'Relationship Properties' },
  { field: 'feeUSD', header: 'Fee USD', type: FieldType.FLOAT },
  { field: 'feeEUR', header: 'Fee EUR', type: FieldType.FLOAT },
  { field: 'waivedAmountUSD', header: 'Waived Amount USD', type: FieldType.FLOAT },
  { field: 'waivedAmountEUR', header: 'Waived Amount EUR', type: FieldType.FLOAT },
]
