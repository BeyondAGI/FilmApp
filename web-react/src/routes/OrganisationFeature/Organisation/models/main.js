import { FieldType } from '../../../../common/enums'
import * as ModelsPeople from './memberRelationship'
import * as QueriesPeople from '../queries/memberRelationship'

export let emptyItem = {
  radiatorID: 'Testing',
}

export const columnsTable = [
  { field: 'radiatorID', header: 'Radiator ID', colGroup: 'ID' },
  { field: 'id', header: 'Neo4J UUID', hidden: true },
  { field: 'name', header: 'Name', colGroup: 'General info', isDefault: true },
  { field: 'addressCountry', header: 'Country', isDefault: true },
  { field: 'addressCity', header: 'City' },
  { field: 'displayTags', header: 'Display tags', isDefault: true },
  { field: 'mainEmail', header: 'Main email', colGroup: 'Contact information' },
  { field: 'countMembers', header: 'Count members', isDefault: true },
]

export const columnsForm = [
  { field: 'id', header: 'DGraph ID', hidden: true },
  { field: 'radiatorID', header: 'Radiator ID', colGroup: 'ID' },
  { field: 'name', header: 'Name', colGroup: 'General info' },
  { field: 'type', header: 'Type' },
  { field: 'addressCity', header: 'City' },
  { field: 'addressCountry', header: 'Country' },
  { field: 'addressCountryIso', header: 'Country ISO' },
  { field: 'addressStreet01', header: 'Street 01' },
  { field: 'addressStreet02', header: 'Street 02' },
  { field: 'addressZip', header: 'Zip code' },
  { field: 'vatNumber', header: 'VAT Number' },
  { field: 'displayName', header: 'Display name' },
  { field: 'displayTags', header: 'Display tags' },
  { field: 'mainEmail', header: 'Main email', colGroup: 'Contact information' },
  { field: 'fax', header: 'Fax' },
  { field: 'mainPhone', header: 'Main phone' },
  { field: 'notes', header: 'Notes' },
  { field: 'website', header: 'Website' },
  { field: 'fullAddress', header: 'Full address' },
  { field: 'tBankCode', header: 'Bank code', colGroup: 'Bank information' },
  { field: 'bankName', header: 'Bank name' },
  { field: 'bankBic', header: 'Bank BIC/SWIFT' },
  { field: 'bankIban', header: 'Bank IBAN' },
  { field: 'banktNo', header: 'Bank nr' },
  { field: 'bankAddress', header: 'Bank address' },
  { field: 'organizationVimeoPage', header: 'Vimeo page', colGroup: 'Social media' },
  { field: 'facebookFanPage', header: 'Facebook page' },
  { field: 'instagramProfile', header: 'Instagram profile' },
  { field: 'youtubeProfile', header: 'Youtube channel' },
  { field: 'twitterProfile', header: 'Twitter profile' },
  { field: 'hasMembers', header: 'Members', colGroup: 'People', type: FieldType.DROPDOWN, options: 'people', isRelationship: true, models: ModelsPeople, queries: QueriesPeople },
]
