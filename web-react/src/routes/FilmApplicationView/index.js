import 'primeicons/primeicons.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import { ExpandableTable } from '../../components/GenericTable/ExpandableTable'

import React from 'react'
import * as Models from './models/main'
import * as Queries from './queries/main'
import { GenericTable } from '../../components/GenericTable'
const FilmApplicationView = () => {

  return (
    <div>
      {ExpandableTable(Queries, Models, 'Film Submissions', 'Visualize')}
    </div>
  )
}

export default FilmApplicationView
