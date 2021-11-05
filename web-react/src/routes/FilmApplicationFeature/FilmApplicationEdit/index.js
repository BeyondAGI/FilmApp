import 'primeicons/primeicons.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import { ExpandableTableEdit } from '../../../components/GenericTable/ExpandableTableEdit'

import React from 'react'
import * as Models from './models/main'
import * as Queries from './queries/main'
import { GenericTable } from '../../../components/GenericTable'

const FilmApplicationEdit = () => {

  return (
    <div>
      {ExpandableTableEdit(Queries, Models, 'Film Submissions', 'Manage')}
    </div>
  )
}

export default FilmApplicationEdit
