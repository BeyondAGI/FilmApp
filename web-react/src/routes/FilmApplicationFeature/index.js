import 'primeicons/primeicons.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import { TabView, TabPanel } from 'primereact/tabview';

import React from 'react'
import FilmApplicationView from './FilmApplicationView';
import FilmApplicationEdit from './FilmApplicationEdit';
const FilmApplicationFeature = () => {

  return (
    <div>
      <TabView  className = "tabview-custom">
      <TabPanel header    = "View" leftIcon = "pi pi-eye">
                            {FilmApplicationView()}
                        </TabPanel>
                        <TabPanel header = "Edit" leftIcon = "pi pi-pencil">
                        {FilmApplicationEdit()}
                        </TabPanel>
                    </TabView>
    </div>
  )
}

export default FilmApplicationFeature
