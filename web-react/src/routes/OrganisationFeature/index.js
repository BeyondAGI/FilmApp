import 'primeicons/primeicons.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import { TabView, TabPanel } from 'primereact/tabview';

import React from 'react'
import Person from './Person';
import Profession from './PersonProfession';
import Organisation from './Organisation';

const OrganisationFeature = () => {

  return (
    <div>
      <TabView  className = "tabview-custom">
        <TabPanel header    = "People" leftIcon = "pi pi-users">
                                {Person()}
        </TabPanel>
        <TabPanel header    = "Professions" leftIcon = "pi pi-briefcase">
        {Profession()}
        </TabPanel>
        <TabPanel header    = "Organisations" leftIcon = "pi pi-sitemap">
        {Organisation()}
        </TabPanel>
    </TabView>
    </div>
  )
}

export default OrganisationFeature
