import { FieldType } from '../../../../common/enums'

export let emptyItem = {}

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
  { field: 'radiatorID', header: 'Film Radiator ID', colGroup: 'ID' },
  { field: 'applicationDate', header: 'Application date', type: FieldType.DATE, colGroup: 'General info' },
  { field: 'feeUSD', header: 'Fee USD', type: FieldType.FLOAT },
  { field: 'feeEUR', header: 'Fee EUR', type: FieldType.FLOAT },
  { field: 'waivedAmountUSD', header: 'Waived amount USD', type: FieldType.FLOAT },
  { field: 'waivedAmountEUR', header: 'Waived amount EUR', type: FieldType.FLOAT },
]
