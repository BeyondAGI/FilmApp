import { FieldType } from '../../../../common/enums'
import * as ModelsProfession from './personProfessionRelationship'
import * as QueriesProfession from '../queries/personProfessionRelationship'

export let emptyItem = {
  radiatorID: 'Testing',
}

export const columnsTable = [
  { field: 'radiatorID', header: 'Radiator ID', colGroup: 'ID' },
  { field: 'id', header: 'Neo4J UUID', hidden: true },
  { field: 'displayName', header: 'Display name', isDefault: true, colGroup: 'Contact info' },
  { field: 'emailMain', header: 'Email main', isDefault: true },
  { field: 'addressHomeCountryIso', header: 'Country (ISO)', isDefault: true },
  { field: 'phoneFix', header: 'Phone' },
  { field: 'preferredLanguage', header: 'Preferred language' },
]
export const columnsForm = [
  { field: 'id', header: 'DGraph ID', hidden: true },
  { field: 'radiatorID', header: 'Radiator ID', colGroup: 'ID' },
  { field: 'displayName', header: 'Display name', colGroup: 'Contact info' },
  { field: 'emailMain', header: 'Email main' },
  { field: 'prefixEmail', header: 'Prefix email' },
  { field: 'emailPreferred', header: 'Email preferred' },
  { field: 'emailHyperlink', header: 'Email hyperlink' },
  { field: 'nameFirstName', header: 'First name' },
  { field: 'nameLastName', header: 'Last name' },
  { field: 'nameFullName', header: 'Full name' },
  { field: 'nameNickname', header: 'Nickname' },
  { field: 'biographyEN', header: 'Biography English' },
  { field: 'biographyFR', header: 'Biography French' },
  { field: 'phoneFix', header: 'Phone' },
  { field: 'peplePhoneMobile', header: 'Mobile phone' },
  { field: 'preferredLanguage', header: 'Preferred language' },
  { field: 'profession', header: 'Profession', colGroup: 'Other info' },
  { field: 'profession01', header: 'Profession 01' },
  { field: 'profession02', header: 'Profession 02' },
  { field: 'languagesSpoken', header: 'Languages spoken' },
  { field: 'addressHomeCity', header: 'City', colGroup: 'Address info' },
  { field: 'addressHomeCountryEN', header: 'Country' },
  { field: 'addressHomeCountryIso', header: 'Country (ISO)' },
  { field: 'addressHomeStreet01', header: 'Street 01' },
  { field: 'addressHomeStreet02', header: 'Street 02' },
  { field: 'addressHomeZip', header: 'Zip code' },
  { field: 'nameOrganisation01', header: 'Name Organisation 01' },
  { field: 'nameOrganisation02', header: 'Name Organisation 02' },
  { field: 'websiteMain', header: 'Website main', colGroup: 'Social media' },
  { field: 'imdbProfile', header: 'Imdb profile' },
  { field: 'linkedinProfile', header: 'Linkedin profile' },
  { field: 'vimeoProfile', header: 'Vimeo page' },
  { field: 'instagramProfile', header: 'Instagram profile' },
  { field: 'twitterProfile', header: 'Twitter profile' },
  { field: 'facebookProfile', header: 'Facebook profile' },
  { field: 'socialMediaOther', header: 'Social media other' },
  { field: 'bank01Name', header: 'Bank name', colGroup: 'Bank information' },
  { field: 'bank01Code', header: 'Bank code' },
  { field: 'bank01BicCode', header: 'Bank Bic/SWIFT' },
  { field: 'bank01HolderName', header: 'Bank holder name' },
  { field: 'bank01IbanNr', header: 'Bank IBAN' },
  { field: 'bank01IbanCountryCode', header: 'Bank IBAN country code' },
  { field: 'bank01AccountCountry', header: 'Bank account country' },
  { field: 'bank01AccountAddress', header: 'Bank account full address' },
  { field: 'payPalAccount', header: 'Paypal account' },
  { field: 'hasProfessions', header: 'Professions', colGroup: 'Professions', type: FieldType.DROPDOWN, options: 'personProfessions', isRelationship: true, models: ModelsProfession, queries: QueriesProfession },
]
