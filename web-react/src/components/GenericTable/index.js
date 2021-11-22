import React, { useState, useRef } from 'react'
import { DataTable } from 'primereact/datatable'
import { useQuery } from '@apollo/client'
import { Toast } from 'primereact/toast'
import { Toolbar } from 'primereact/toolbar'
import { Column } from 'primereact/column'
import { leftToolbarTemplate } from './Others/Toolbar'
import { rightToolbarTemplate } from './Others/Toolbar'
import { headerGroup } from './Headers/HeaderGroup'
import { header } from './Headers/Header'
import { columnComponents } from './Columns/Column'
import { ActionBodyTemplate } from './Others/Action'
import { Fragment } from 'react'
import { GenericAddEditForm } from '../Form/GenericAddEditForm'
import { Dialog } from 'primereact/dialog'
import { DeleteItemDialog } from './Dialogs/DeleteItem'
import { DeleteItemsDialog } from './Dialogs/DeleteItems'
import './styles.css'
import { Message } from 'primereact/message'
import { Skeleton } from 'primereact/skeleton'
import { LoadingSkeleton } from './Others/LoadingSkeleton'
import { MAX_LIST_ITEMS } from '../../common/constants.js'

export const GenericTable = (Queries, Models, HeaderTitle = 'Items') => {
  // Items
  const [selectedColumns, setSelectedColumns] = useState(Models.columnsTable.filter((c) => !c.hidden && c.isDefault))
  // Others
  const [globalFilter, setGlobalFilter] = useState(null)
  // Show hide
  const [showFormDialog, setShowFormDialog] = useState(false)
  const [showDeleteItemDialog, setShowDeleteItemDialog] = useState(false)
  const [showDeleteItemsDialog, setShowDeleteItemsDialog] = useState(false)
  // Rows
  const [rowAction, setRowAction] = useState(null)
  const [rowEdit, setRowEdit] = useState(null)
  const [rowsSelected, setRowsSelected] = useState(null)
  const [showToast, setShowToast] = useState(false)

  const toast = useRef(null)
  const dt = useRef(null)

  const { loading, data, error } = useQuery(Queries.GET_LIST, {
    variables: {
      first: MAX_LIST_ITEMS,
      offset: 0,
    },
  })

  const rowActionItemDetails = useQuery(Queries.GET_BY_ID, {
    variables: {  
      id: rowEdit?.id ?? 0,
    },
  })

  const openNew = () => {
    setRowEdit(null)
    setShowFormDialog(true)
  }

  const exportCSV = () => {
    dt.current.exportCSV()
  }

  const deleteItem = (rowData) => {
    setRowAction(rowData)
    setShowDeleteItemDialog(true)
  }

  const editItem = (rowData) => {
    rowActionItemDetails.refetch()
    setRowEdit(rowData)
    setShowFormDialog(true)
  }

  const deleteItems = () => {
    setShowDeleteItemsDialog(true)
  }

  return (
    <div>
      {DeleteItemsDialog(rowsSelected, Queries, toast, showToast, setShowToast, showDeleteItemsDialog, setShowDeleteItemsDialog)}
      {DeleteItemDialog(rowAction, Queries, toast, showToast, setShowToast, showDeleteItemDialog, setShowDeleteItemDialog)}
      {loading && !error && LoadingSkeleton()}
      {error && !loading && <Message severity="error" detail={error?.message ?? 'Error when loading, please contact the administrator'}></Message>}
      {data && !loading && !error && (
        <div className="datatable-crud-demo">
          <Toast ref={toast} />
          <div className="card">
            <Toolbar left={leftToolbarTemplate(Models, selectedColumns, setSelectedColumns, rowsSelected, openNew, deleteItems)} right={rightToolbarTemplate(exportCSV)}></Toolbar>

            <DataTable ref={dt} value={data?.[Object.keys(data)[0]]} selection={rowsSelected} onSelectionChange={(e) => setRowsSelected(e.value)} dataKey="id" paginator rows={100} rowsPerPageOptions={[25, 50, 100, 200]} paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} items" globalFilter={globalFilter} resizableColumns headerColumnGroup={headerGroup(selectedColumns)} header={header(setGlobalFilter, HeaderTitle)}>
              <Column selectionMode="multiple" headerStyle={{ width: '4rem' }}></Column>
              {columnComponents(selectedColumns)}
              <Column body={(rowData) => ActionBodyTemplate(rowData, deleteItem, editItem)}></Column>
            </DataTable>
          </div>
          <Fragment>
            <GenericAddEditForm Queries={Queries} Models={Models} showFormDialog={showFormDialog} setShowFormDialog={setShowFormDialog} toast={toast} itemData={rowEdit ? rowActionItemDetails.data : rowEdit} />
          </Fragment>
        </div>
      )}
    </div>
  )
}
