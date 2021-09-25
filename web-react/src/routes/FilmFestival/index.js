import 'primeicons/primeicons.css'
// import 'primereact/resources/themes/saga-blue/theme.css'
// import 'primereact/resources/themes/arya-purple/theme.css'
import 'primereact/resources/themes/md-light-indigo/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'


import React from 'react'
import * as Models from './models/main'
import * as Queries from './queries/main'
import { GenericTable } from '../../components/GenericTable'

const FilmFestival = () => {

  return (
    <div>
      {GenericTable(Queries, Models, 'Film Festivals')}
    </div>
  )
}

export default FilmFestival
