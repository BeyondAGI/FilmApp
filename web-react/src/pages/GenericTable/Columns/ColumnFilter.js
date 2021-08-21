import React from "react"
import { Column } from "primereact/column"

export const columnComponentsFilter = (selectedColumns) => selectedColumns.map((col) => {
  return (
    <Column
      key={col.field}
      field={col.field}
      filter
      filterPlaceholder="Filter"
      filterMatchMode="contains"
    />
  )
})
