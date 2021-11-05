import { FieldType } from '../../../../common/enums'

export let emptyItem = {}

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
  { field: 'radiatorID', header: 'Film Radiator ID', colGroup: 'ID' },
  { field: 'applicationDate', header: 'Application Date', type: FieldType.DATE, colGroup: 'General Info' },
  { field: 'feeUSD', header: 'Fee USD', type: FieldType.FLOAT },
  { field: 'feeEUR', header: 'Fee EUR', type: FieldType.FLOAT },
  { field: 'waivedAmountUSD', header: 'Waived Amount USD', type: FieldType.FLOAT },
  { field: 'waivedAmountEUR', header: 'Waived Amount EUR', type: FieldType.FLOAT },
]
