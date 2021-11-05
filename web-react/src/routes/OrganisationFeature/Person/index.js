import 'primeicons/primeicons.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'


import React from 'react'
import * as Models from './models/main'
import * as Queries from './queries/main'
import { GenericTable } from '../../../components/GenericTable'

const Person = () => {

  return (
    <div>
      {GenericTable(Queries, Models, 'People')}
    </div>
  )
}

export default Person
