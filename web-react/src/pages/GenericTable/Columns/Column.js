import React from "react"
import { Column } from "primereact/column"

export const columnComponents = (selectedColumns) => selectedColumns.map((col) => {
    return (
      <Column
        key={col.field}
        field={col.field}
        header={col.header}
        sortable
        filterPlaceholder="Filter"
        filterMatchMode="contains"
      />
    )
  })
