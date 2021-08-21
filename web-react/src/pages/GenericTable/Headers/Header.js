import React from "react"
import { InputText } from "primereact/inputtext"

export const header = (setGlobalFilter, HeaderTitle) => (
    <div className="table-header">
      <h5 className="p-m-0">Manage {HeaderTitle}</h5>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Global Search..."
        />
      </span>
    </div>
  )