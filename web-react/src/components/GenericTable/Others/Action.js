
import React from "react"
import { Button } from "primereact/button"

export const ActionBodyTemplate = (rowData, deleteItem, editItem) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-mr-2"
          onClick={() => editItem(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => deleteItem(rowData)}
        />
      </React.Fragment>
    )
  }