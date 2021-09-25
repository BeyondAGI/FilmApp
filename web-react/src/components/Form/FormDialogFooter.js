import React from "react"
import { Button } from "primereact/button"


export const FormDialogFooter = (oncancel, onsave) => (
    <React.Fragment>
      <Button
        label     = "Cancel"
        icon      = "pi pi-times"
        className = "p-button-text"
        onClick   = {oncancel}
      />
      <Button
        label     = "Save"
        icon      = "pi pi-check"
        className = "p-button-text"
        type      = "submit"
        onClick   = {onsave}
      />
    </React.Fragment>
  )