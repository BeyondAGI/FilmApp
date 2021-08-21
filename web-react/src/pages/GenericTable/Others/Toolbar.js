import React from 'react'
import { Button } from 'primereact/button'
import { MultiSelect } from 'primereact/multiselect'

export const leftToolbarTemplate = (
  Models,
  selectedColumns,
  setSelectedColumns,
  rowsSelected,
  openNew,
  deleteItems
) => {
  const onColumnToggle = (event) => {
    let selectedColumns = event.value
    let orderedSelectedColumns = Models.columns.filter((col) =>
      selectedColumns.some((sCol) => sCol.field === col.field)
    )
    setSelectedColumns(orderedSelectedColumns)
  }

  return (
    <React.Fragment>
      <Button
        label="New"
        icon="pi pi-plus"
        className="p-button-success p-mr-2"
        onClick={openNew}
      />
      <Button
        label="Delete"
        icon="pi pi-trash"
        className="p-button-danger"
        onClick={deleteItems}
        disabled={!rowsSelected || !rowsSelected.length}
      />
      <div style={{ textAlign: 'left' }}>
        <MultiSelect
          value={selectedColumns}
          options={Models.columns}
          optionLabel="header"
          onChange={onColumnToggle}
          style={{ width: '20em', left: '1em' }}
        />
      </div>
    </React.Fragment>
  )
}

export const rightToolbarTemplate = (exportCSV) => {
  return (
    <React.Fragment>
      <Button
        label="Export CSV"
        icon="pi pi-upload"
        className="p-button-help"
        onClick={exportCSV}
      />
    </React.Fragment>
  )
}
