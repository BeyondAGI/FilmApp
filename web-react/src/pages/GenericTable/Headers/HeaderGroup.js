import React from "react"
import { Column } from "primereact/column"
import { columnComponentsGroup } from "../Columns/ColumnGroup" 
import { columnComponents } from "../Columns/Column"
import { columnComponentsFilter } from "../Columns/ColumnFilter"
import { ColumnGroup } from "primereact/columngroup"
import { Row } from "primereact/row"

export const headerGroup = (selectedColumns) => (
    <ColumnGroup>
      <Row>
        <Column headerStyle={{ width: '4rem' }}></Column>
        {columnComponentsGroup(selectedColumns)}
        <Column key="Actions" header="" />
      </Row>
      <Row>
        <Column
          selectionMode="multiple"
          headerStyle={{ width: '4rem' }}
        ></Column>
        {columnComponents(selectedColumns)}
        <Column key="Actions" header="(Actions)" />
      </Row>
      <Row>
        <Column></Column>
        {columnComponentsFilter(selectedColumns)}
        <Column key="Actions" header="" />
      </Row>
    </ColumnGroup>
  )