
import React from "react"
import { Button } from "primereact/button"

export const ActionBodyTemplate = (rowData, deleteItem, editItem, isDeleteDisabled = false) => {
    return (
      <React.Fragment>
        {!isDeleteDisabled && (<Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-mr-2"
          type="button"
          onClick={() => editItem(rowData)}
        />)}
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          type="button"
          onClick={() => deleteItem(rowData)}
        />
      </React.Fragment>
    )
  }