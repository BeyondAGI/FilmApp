import 'primeicons/primeicons.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import './styles.css'

import React, { useState, useRef } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Toast } from 'primereact/toast'
import { Button } from 'primereact/button'
import { Toolbar } from 'primereact/toolbar'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { useQuery } from '@apollo/client'
import { MultiSelect } from 'primereact/multiselect'
import { Row } from 'primereact/row'
import { ColumnGroup } from 'primereact/columngroup'
import * as Models from './models/main'
import * as Queries from './queries/main'
import { AddForm } from './forms/AddForm'
import { Fragment } from 'react'

const FilmFestival = () => {
  const onColumnToggle = (event) => {
    let selectedColumns = event.value
    let orderedSelectedColumns = Models.columns.filter((col) =>
      selectedColumns.some((sCol) => sCol.field === col.field)
    )
    setSelectedColumns(orderedSelectedColumns)
  }

  const [showFormDialog, setShowFormDialog] = useState(false)
  const [deleteItemDialog, setDeleteItemDialog] = useState(false)
  const [deleteItemsDialog, setDeleteItemsDialog] = useState(false)
  const [item, setItem] = useState(Models.emptyItem)
  const [selectedItems, setSelectedItems] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [globalFilter, setGlobalFilter] = useState(null)
  const [selectedColumns, setSelectedColumns] = useState(Models.columns)
  const toast = useRef(null)
  const dt = useRef(null)

  const columnComponents = selectedColumns.map((col) => {
    return (
      <Column
        key={col.field}
        field={col.field}
        header={col.header}
        sortable
        filter
        filterPlaceholder="Filter"
        filterMatchMode="contains"
      />
    )
  })

  const columnComponentsFilter = selectedColumns.map((col) => {
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

  const columnComponentsGroup = selectedColumns
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

  const headerGroup = (
    <ColumnGroup>
      <Row>
        <Column headerStyle={{ width: '4rem' }}></Column>
        {columnComponentsGroup}
      </Row>
      <Row>
        <Column
          selectionMode="multiple"
          headerStyle={{ width: '4rem' }}
        ></Column>
        {columnComponents}
        <Column key="Actions" header="Actions" />
      </Row>
      <Row>
        <Column></Column>
        {columnComponentsFilter}
        <Column key="Actions" header="" />
      </Row>
    </ColumnGroup>
  )
  const { loading, data, error } = useQuery(Queries.GET_LIST, {
    variables: {
      first: 100,
      offset: 0,
      // first  : rowsPerPage,
      // offset : rowsPerPage * page,
      // orderBy: { [orderBy]: order },
      // filter : getFilter(),
    },
  })

  const openNew = () => {
    setItem(Models.emptyItem)
    setSubmitted(false)
    setShowFormDialog(true)
  }

  const hideDialog = () => {
    setSubmitted(false)
    setShowFormDialog(false)
  }

  const hideDeleteItemDialog = () => {
    setDeleteItemDialog(false)
  }

  const hideDeleteItemsDialog = () => {
    setDeleteItemsDialog(false)
  }

  const saveItem = () => {
    setSubmitted(true)

    if (item.name.trim()) {
      // let _items = [...items];
      let _item = { ...item }
      if (item.id) {
        // const index = findIndexById(item.id);

        // _items[index] = _item;
        toast.current.show({
          severity: 'success',
          summary: 'Successful',
          detail: 'Item Updated',
          life: 3000,
        })
      } else {
        // _items.push(_item);
        toast.current.show({
          severity: 'success',
          summary: 'Successful',
          detail: 'Item Created',
          life: 3000,
        })
      }

      // setItems(_items);
      setShowFormDialog(false)
      setItem(Models.emptyItem)
    }
  }

  const editItem = (item) => {
    setItem({ ...item })
    setShowFormDialog(true)
  }

  const confirmDeleteItem = (item) => {
    setItem(item)
    setDeleteItemDialog(true)
  }

  const deleteItem = () => {
    // let _items = items.filter(val => val.id !== item.id);
    // setItem(_items);
    // setDeleteItemDialog(false);
    // setItem(emptyItem);
    toast.current.show({
      severity: 'success',
      summary: 'Successful',
      detail: 'Item Deleted',
      life: 3000,
    })
  }

  // const findIndexById = (id) => {
  //     let index = -1;
  //     // for (let i = 0; i < items.length; i++) {
  //     //     if (items[i].id === id) {
  //     //         index = i;
  //     //         break;
  //     //     }
  //     // }
  //     return id;
  //     // return index;
  // }

  const exportCSV = () => {
    dt.current.exportCSV()
  }

  const confirmDeleteSelected = () => {
    setDeleteItemsDialog(true)
  }

  const deleteSelectedItems = () => {
    // let _items = items.filter(val => !selectedItems.includes(val));
    // setItems(_items);
    // setDeleteItemsDialog(false);
    // setSelectedItems(null);
    toast.current.show({
      severity: 'success',
      summary: 'Successful',
      detail: 'Items Deleted',
      life: 3000,
    })
  }

  const onCategoryChange = (e) => {
    let _item = { ...item }
    _item['category'] = e.value
    setItem(_item)
  }

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || ''
    let _item = { ...item }
    _item[`${name}`] = val

    setItem(_item)
  }

  const onInputNumberChange = (e, name) => {
    const val = e.value || 0
    let _item = { ...item }
    _item[`${name}`] = val

    setItem(_item)
  }

  const leftToolbarTemplate = () => {
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
          onClick={confirmDeleteSelected}
          disabled={!selectedItems || !selectedItems.length}
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

  const rightToolbarTemplate = () => {
    return (
      <React.Fragment>
        {/* <Button label="Export Excel" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success p-mr-2" data-pr-tooltip="XLS" /> */}
        <Button
          label="Export CSV"
          icon="pi pi-upload"
          className="p-button-help"
          onClick={exportCSV}
        />
      </React.Fragment>
    )
  }

  const actionBodyTemplate = (rowData) => {
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
          onClick={() => confirmDeleteItem(rowData)}
        />
      </React.Fragment>
    )
  }

  const header = (
    <div className="table-header">
      <h5 className="p-m-0">Manage Film Festivals</h5>
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
  const itemDialogFooter = (
    <React.Fragment>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDialog}
      />
      <Button
        label="Save"
        icon="pi pi-check"
        className="p-button-text"
        onClick={saveItem}
      />
    </React.Fragment>
  )
  const deleteItemDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteItemDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteItem}
      />
    </React.Fragment>
  )
  const deleteItemsDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteItemsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteSelectedItems}
      />
    </React.Fragment>
  )

  return (
    <div>
      {loading && !error && <p>Loading...</p>}
      {error && !loading && <p>Error</p>}
      {data && !loading && !error && (
        <div className="datatable-crud-demo">
          <Toast ref={toast} />
          <div className="card">
            <Toolbar
              className="p-mb-4"
              left={leftToolbarTemplate}
              right={rightToolbarTemplate}
            ></Toolbar>

            <DataTable
              ref={dt}
              value={data.filmFestivals}
              selection={selectedItems}
              onSelectionChange={(e) => setSelectedItems(e.value)}
              dataKey="radiatorID"
              paginator
              rows={10}
              rowsPerPageOptions={[5, 10, 25]}
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} items"
              globalFilter={globalFilter}
              resizableColumns
              headerColumnGroup={headerGroup}
              header={header}
            >
              <Column
                selectionMode="multiple"
                headerStyle={{ width: '4rem' }}
              ></Column>
              {columnComponents}
              <Column body={actionBodyTemplate}></Column>
            </DataTable>
          </div>
            <Fragment>
            <AddForm showFormDialog={showFormDialog} setShowFormDialog={setShowFormDialog} toast={toast}/>

            </Fragment>
              

          <Dialog
            visible={deleteItemDialog}
            style={{ width: '450px' }}
            header="Confirm"
            modal
            footer={deleteItemDialogFooter}
            onHide={hideDeleteItemDialog}
          >
            <div className="confirmation-content">
              <i
                className="pi pi-exclamation-triangle p-mr-3"
                style={{ fontSize: '2rem' }}
              />
              {item && (
                <span>
                  Are you sure you want to delete <b>{item.name}</b>?
                </span>
              )}
            </div>
          </Dialog>

          <Dialog
            visible={deleteItemsDialog}
            style={{ width: '450px' }}
            header="Confirm"
            modal
            footer={deleteItemsDialogFooter}
            onHide={hideDeleteItemsDialog}
          >
            <div className="confirmation-content">
              <i
                className="pi pi-exclamation-triangle p-mr-3"
                style={{ fontSize: '2rem' }}
              />
              {item && (
                <span>Are you sure you want to delete the selected items?</span>
              )}
            </div>
          </Dialog>
        </div>
      )}
    </div>
  )
}

export default FilmFestival
