import React from "react"
import { Column } from "primereact/column"

export const columnComponentsGroup = (selectedColumns) => selectedColumns
.filter((col) => col.colGroup)
.map((col) => {
  let myIndex = selectedColumns.findIndex((i) => i.field === col.field)
  let nextIndex = selectedColumns
    .slice(myIndex + 1)
    .findIndex((i) => i.colGroup)
  nextIndex =
    nextIndex == -1 ? selectedColumns.length : nextIndex + myIndex + 1
  return (
    <Column
      key={col.field}
      header={col.colGroup}
      colSpan={nextIndex - myIndex}
      style={{ fontWeight: 'bold' }}
    />
  )
})
