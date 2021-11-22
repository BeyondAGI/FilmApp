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
  { field: 'titleInternational', header: 'International title', colGroup: 'General info', isDefault: true },
  { field: 'countSubmittedToFilmFestivals', header: 'Festival submissions', isDefault: true },
  { field: 'countSelectedAtFilmFestivals', header: 'Festival selections', isDefault: true },
  { field: 'countShortlistedAtFilmFestivals', header: 'Festival shortlist', isDefault: true },
  { field: 'countToSubmitToFilmFestivals', header: 'Festivals to submit', isDefault: true },
  { field: 'countNotSelectedAtFilmFestivals', header: 'Festivals not selected', isDefault: true },
  { field: 'countFestivalApplications', header: 'Total number of applications', isDefault: true },
]
export const columnsForm = [
  { field: 'id', header: 'Neo4J UUID', hidden: true },
  { field: '_fromId_', header: 'Film', colGroup: 'Film', type: FieldType.DROPDOWN, options: 'films' },
  { field: '_toId_', header: 'Film festival', colGroup: 'Film festival', type: FieldType.DROPDOWN, options: 'filmFestivals' },
  { field: '_RELATIONSHIP_', header: 'Relationship type', colGroup: 'Relationship', type: FieldType.DROPDOWN, options: 'relationshipFilmSubmission' },
  { field: 'applicationDate', header: 'Application date', type: FieldType.DATE, colGroup: 'Relationship properties' },
  { field: 'feeUSD', header: 'Fee USD', type: FieldType.FLOAT },
  { field: 'feeEUR', header: 'Fee EUR', type: FieldType.FLOAT },
  { field: 'waivedAmountUSD', header: 'Waived amount USD', type: FieldType.FLOAT },
  { field: 'waivedAmountEUR', header: 'Waived amount EUR', type: FieldType.FLOAT },
]
