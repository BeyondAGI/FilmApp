import React, { useState, useEffect, useRef } from 'react'
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
import { red } from '@material-ui/core/colors'
import { fontWeight } from '@material-ui/system'

export const ExpandableTable = (
  Queries,
  Models,
  HeaderTitle = 'Items',
  HeaderVerb
) => {
  // Items
  const [selectedColumns, setSelectedColumns] = useState(
    Models.columns.filter((c) => !c.hidden && c.isDefault)
  )
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
  // Expandable Table
  const [expandedRows, setExpandedRows] = useState(null)
  const toast = useRef(null)
  const isMounted = useRef(false)

  const dt = useRef(null)

  useEffect(() => {
    if (isMounted.current) {
      const summary =
        expandedRows !== null ? 'All Rows Expanded' : 'All Rows Collapsed'
      toast.current.show({
        severity: 'success',
        summary: `${summary}`,
        life: 3000,
      })
    }
  }, [expandedRows])

  const onRowExpand = (event) => {
    toast.current.show({
      severity: 'info',
      summary: 'Film Expanded',
      detail: event.data.name,
      life: 3000,
    })
  }

  const onRowCollapse = (event) => {
    toast.current.show({
      severity: 'success',
      summary: 'Film Collapsed',
      detail: event.data.name,
      life: 3000,
    })
  }

  const { loading, data, error } = useQuery(Queries.GET_LIST, {
    variables: {
      first: 3000,
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
    setRowEdit(rowData)
    setShowFormDialog(true)
  }

  const deleteItems = () => {
    setShowDeleteItemsDialog(true)
  }

  const submissionDatatable = (header, dataEdges) => {
    return (
      <Fragment>
        <h6>{header}</h6>
        <DataTable stripedRows showGridlines value={dataEdges}>
          <Column
            field="node.nameInternational"
            header="Name"
            sortable
          ></Column>
          <Column
            field="applicationDate"
            header="Application Date"
            sortable
          ></Column>
          <Column field="feeUSD" header="Fee USD" sortable></Column>
          <Column field="feeEUR" header="Fee EUR" sortable></Column>
          <Column
            field="waivedAmountUSD"
            header="Waived Amount USD"
            sortable
          ></Column>
          <Column
            field="waivedAmountEUR"
            header="Waived Amount EUR"
            sortable
          ></Column>
        </DataTable>
      </Fragment>
    )
  }

  const rowExpansionTemplate = (data) => {
    return (
      <div className="orders-subtable">
        <h6>Budget</h6>
        <DataTable
          stripedRows
          showGridlines
          value={data.hasEntryFeesConnection.edges}
        >
          <Column
            field="node.nameInternational"
            header="Name"
            sortable
          ></Column>
          <Column field="receiveDate" header="Receive Date" sortable></Column>
          <Column field="budgetUSD" header="Budget USD" sortable></Column>
          <Column field="budgetEUR" header="Budget EUR" sortable></Column>
        </DataTable>
        {submissionDatatable(
          'Submitted To',
          data.submittedToFilmFestivalsConnection.edges
        )}
        {submissionDatatable(
          'Selected At',
          data.selectedAtFilmFestivalsConnection.edges
        )}
        {submissionDatatable(
          'Shortlisted At',
          data.shortlistedAtFilmFestivalsConnection.edges
        )}
        {submissionDatatable(
          'To Submit',
          data.toSubmitToFilmFestivalsConnection.edges
        )}
        {submissionDatatable(
          'Not Selected At ',
          data.notSelectedAtFilmFestivalsConnection.edges
        )}
      </div>
    )
  }

  return (
    <div>
      {loading && !error && <p>Loading...</p>}
      {error && !loading && (
        <Message
          severity="error"
          detail={
            error?.message ??
            'Error when loading, please contact the administrator'
          }
        ></Message>
      )}
      {data && !loading && !error && (
        <div className="datatable-crud-demo">
          <Toast ref={toast} />
          <div className="card">
            <DataTable
              value={data?.[Object.keys(data)[0]]}
              expandedRows={expandedRows}
              onRowToggle={(e) => setExpandedRows(e.data)}
              onRowExpand={onRowExpand}
              onRowCollapse={onRowCollapse}
              rowExpansionTemplate={rowExpansionTemplate}
              globalFilter={globalFilter}
              paginator
              rows={100}
              rowsPerPageOptions={[25, 50, 100, 200]}
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} items"
              dataKey="id"
              header={header(setGlobalFilter, HeaderTitle, HeaderVerb)}
            >
              <Column expander style={{ width: '3em' }} />
              <Column
                filter
                field="titleInternational"
                header="Title International"
                style={{ color: '#9C27B0', fontWeight: 600}} // purple
                sortable
              />
              <Column
                filter
                field="countSubmittedToFilmFestivals"
                header="Submitted To Festivals"
                sortable
              />
              <Column
                filter
                field="countSelectedAtFilmFestivals"
                header="Selected At Festivals"
                style={{ color: 'green', fontWeight: 600}}
                sortable
              />
              <Column
                filter
                field="countShortlistedAtFilmFestivals"
                header="Shortlisted at Festivals"
                sortable
              />
              <Column
                filter
                field="countToSubmitToFilmFestivals"
                header="To Submit To Festivals"
                
                sortable
              />
              <Column
                filter
                field="countNotSelectedAtFilmFestivals"
                header="Not Selected At Festivals"
                style={{ color: 'red', fontWeight: 600}}
                sortable
              />
              <Column
                filter
                field="countFestivalApplications"
                header="Total Number of Applications"
                style={{ textDecoration: 'underline'}}
                sortable
              />
            </DataTable>
          </div>
        </div>
      )}
    </div>
  )
}
