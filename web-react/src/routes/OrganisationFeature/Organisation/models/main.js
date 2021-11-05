import { FieldType } from '../../../../common/enums'
import * as ModelsPeople from './memberRelationship'
import * as QueriesPeople from '../queries/memberRelationship'

export let emptyItem = {
  radiatorID: 'Testing',
}

export const columnsTable = [
  { field: 'radiatorID', header: 'Radiator ID', colGroup: 'ID' },
  { field: 'id', header: 'Neo4J UUID', hidden: true },
  { field: 'name', header: 'Name', colGroup: 'General Info', isDefault: true },
  { field: 'addressCountry', header: 'Address Country', isDefault: true },
  { field: 'addressCity', header: 'Address City' },
  { field: 'displayTags', header: 'Display Tags', isDefault: true },
  { field: 'mainEmail', header: 'Main Email', colGroup: 'Contact Information' },
  { field: 'countMembers', header: 'Count Members', isDefault: true },
]

export const columnsForm = [
  { field: 'id', header: 'Neo4J UUID', hidden: true },
  { field: 'radiatorID', header: 'Radiator ID', colGroup: 'ID' },
  { field: 'name', header: 'Name', colGroup: 'General Info' },
  { field: 'type', header: 'Type' },
  { field: 'addressCity', header: 'Address City' },
  { field: 'addressCountry', header: 'Address Country' },
  { field: 'addressCountryIso', header: 'Address Country ISO' },
  { field: 'addressStreet01', header: 'Address Street 01' },
  { field: 'addressStreet02', header: 'Address Street 02' },
  { field: 'addressZip', header: 'Address Zip' },
  { field: 'vatNumber', header: 'Vat Number' },
  { field: 'displayName', header: 'Display Name' },
  { field: 'displayTags', header: 'Display Tags' },
  { field: 'mainEmail', header: 'Main Email', colGroup: 'Contact Information' },
  { field: 'fax', header: 'Fax' },
  { field: 'mainPhone', header: 'Main Phone' },
  { field: 'notes', header: 'Notes' },
  { field: 'website', header: 'Website' },
  { field: 'fullAddress', header: 'Full Address' },
  { field: 'tBankCode', header: 'Bank Code', colGroup: 'Bank Information' },
  { field: 'bankName', header: 'Bank Name' },
  { field: 'bankBic', header: 'Bank Bic' },
  { field: 'bankIban', header: 'Bank Iban' },
  { field: 'banktNo', header: 'Bank No' },
  { field: 'bankAddress', header: 'Bank Address' },
  { field: 'organizationVimeoPage', header: 'Vimeo Page', colGroup: 'Social Media' },
  { field: 'facebookFanPage', header: 'Facebook Page' },
  { field: 'instagramProfile', header: 'Instagram Page' },
  { field: 'youtubeProfile', header: 'Youtube Page' },
  { field: 'twitterProfile', header: 'Twitter Page' },
  { field: 'hasMembers', header: 'Members', colGroup: 'People', type: FieldType.DROPDOWN, options: 'people', isRelationship: true, models: ModelsPeople, queries: QueriesPeople },
]
