import React, { useState, useRef, useEffect } from 'react'
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
import { DeleteRelationDialog } from './Dialogs/DeleteItem'
import { DeleteItemsDialog } from './Dialogs/DeleteItems'
import './styles.css'
import { Message } from 'primereact/message'
import { Skeleton } from 'primereact/skeleton'
import { LoadingSkeleton } from './Others/LoadingSkeleton'
import { GenericAddEditRelationship } from '../Form/GenericAddEditRelationship'
import { MAX_LIST_ITEMS } from '../../common/constants.js'
var dot = require('dot-object')

export const SimpleTable = (Queries, Models, HeaderTitle = 'Items', ParentId) => {
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

  const { loading, data, error, refetch } = useQuery(Queries.GET_LIST, {
    variables: {
      first: MAX_LIST_ITEMS,
      offset: 0,
      parentId: ParentId,
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

  function flattenObj(obj, parent, res = {}) {
    for (let key in obj) {
      let propName = key
      if (typeof obj[key] == 'object') {
        flattenObj(obj[key], propName, res)
      } else {
        res[propName] = obj[key]
      }
    }
    return res
  }

  let result = data?.[Object.keys(data)[0]]
  let resultGood = []
  if (result) {
    for (let res in result) {
      let temp = {}
      temp = flattenObj(result[res])
      resultGood[res] = temp
    }
    result = resultGood
  }

  //   let result = data?.[Object.keys(data)[0]]
  //   let resultGood = []
  //   if (result)
  //  {
  //    for (let res in result) {
  //      let temp = {}
  //      temp = dot.dot(result[res])
  //      resultGood[res] = temp
  //    }
  //    result = resultGood
  //  }
  return (
    <div>
      {DeleteRelationDialog(rowAction, Queries, toast, showToast, setShowToast, showDeleteItemDialog, setShowDeleteItemDialog, refetch, ParentId)}
      {loading && !error && LoadingSkeleton()}
      {error && !loading && <Message severity="error" detail={error?.message ?? 'Error when loading, please contact the administrator'}></Message>}
      {data && !loading && !error && (
        <div className="datatable-crud-demo">
          <Toast ref={toast} />
          <div className="card" style={{ borderWidth: '2px', borderStyle: 'Solid', borderColor: '#e1e0e0' }}>
            <Toolbar left={leftToolbarTemplate(Models, selectedColumns, setSelectedColumns, rowsSelected, openNew, null, false)}></Toolbar>

            <DataTable stripedRows size="small" responsiveLayout="scroll" ref={dt} value={result} selection={rowsSelected} onSelectionChange={(e) => setRowsSelected(e.value)} dataKey="id" paginator rows={10} rowsPerPageOptions={[25, 50, 100, 200]} paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} items">
              <Column selectionMode="multiple" headerStyle={{ width: '4rem' }}></Column>
              {columnComponents(selectedColumns)}
              <Column body={(rowData) => ActionBodyTemplate(rowData, deleteItem, editItem, true)}></Column>
            </DataTable>
          </div>
          <Fragment>
            <GenericAddEditRelationship Queries={Queries} Models={Models} Refetch={refetch} ParentId={ParentId} showFormDialog={showFormDialog} setShowFormDialog={setShowFormDialog} toast={toast} itemData={rowEdit ? rowActionItemDetails.data : rowEdit} />
          </Fragment>
        </div>
      )}
    </div>
  )
}
