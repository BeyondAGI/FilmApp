import React from 'react'
import { Button } from 'primereact/button'
import { MultiSelect } from 'primereact/multiselect'

export const leftToolbarTemplate = (Models, selectedColumns, setSelectedColumns, rowsSelected, openNew, deleteItems, isStandard = true) => {
  const onColumnToggle = (event) => {
    let selectedColumns = event.value
    let orderedSelectedColumns = Models.columnsTable.filter((col) => selectedColumns.some((sCol) => sCol.field === col.field))
    setSelectedColumns(orderedSelectedColumns)
  }

  return (
    <React.Fragment>
      <Button label="New" icon="pi pi-plus" className="p-button-success p-mr-2" type="button" onClick={openNew} />
      {isStandard && <Button label="Delete" icon="pi pi-trash" className="p-button-danger" type="button" onClick={deleteItems} disabled={!rowsSelected || !rowsSelected.length} />}

      {isStandard && (
        <div style={{ textAlign: 'left' }}>
          <MultiSelect value={selectedColumns} options={Models.columnsTable} optionLabel="header" onChange={onColumnToggle} style={{ width: '20em', left: '1em' }} />
        </div>
      )}
    </React.Fragment>
  )
}

export const rightToolbarTemplate = (exportCSV) => {
  return (
    <React.Fragment>
      <Button label="Export CSV" icon="pi pi-upload" type="button" className="p-button-help" onClick={exportCSV} />
    </React.Fragment>
  )
}
