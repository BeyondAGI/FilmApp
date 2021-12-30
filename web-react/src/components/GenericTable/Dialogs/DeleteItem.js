import React from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { ToastSuccessError } from '../../Toast/ToastMessages'
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { Fragment } from 'react'

export const DeleteRelationDialog = (rowAction, Queries, toast, showToast, setShowToast, showDeleteItemDialog, setShowDeleteItemDialog, refetch, parentId) => {
  const [deleteItem, { data, loading, error, called }] = useMutation(Queries.DELETE_ITEMS, { errorPolicy: 'all' })

  const onDelete = async (e) => {
    e.preventDefault()
    await deleteItem({ variables: { fromId: parentId, toId: rowAction.id } })
    refetch()
    setShowToast(true)
    setShowDeleteItemDialog(false)
  }

  return (
    <Fragment>
      <Fragment>
        {ToastSuccessError(
          toast,
          showToast,
          setShowToast,
          called,
          loading,
          error,
          `Message: ${data?.[Object.keys(data)[0]].msg}, 
              Num Ids deleted: ${data?.[Object.keys(data)[0]].numUids}`
        )}
      </Fragment>
      <Dialog visible={showDeleteItemDialog} style={{ width: '450px' }} header="Confirm" modal footer={DeleteItemDialogFooter(setShowDeleteItemDialog, onDelete)} onHide={() => setShowDeleteItemDialog(false)}>
        <div className="confirmation-content">
          <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
          {rowAction && (
            <span>
              Are you sure you want to delete this item?
              <b>(Id: {rowAction.id})</b>
            </span>
          )}
        </div>
      </Dialog>
    </Fragment>
  )
}

export const DeleteItemDialog = (rowAction, Queries, toast, showToast, setShowToast, showDeleteItemDialog, setShowDeleteItemDialog, refetch) => {
  const [deleteItem, { data, loading, error, called }] = useMutation(Queries.DELETE_ITEMS, { errorPolicy: 'all' })

  const onDelete = async (e) => {
    e.preventDefault()
    await deleteItem({ variables: { filter: { id: [rowAction.id] } } })
    refetch()
    setShowToast(true)
    setShowDeleteItemDialog(false)
  }

  return (
    <Fragment>
      <Fragment>
        {ToastSuccessError(
          toast,
          showToast,
          setShowToast,
          called,
          loading,
          error,
          `Message: ${data?.[Object.keys(data)[0]].msg}, 
            Ids: ${data?.[Object.keys(data)[0]].numUids}`
        )}
      </Fragment>
      <Dialog visible={showDeleteItemDialog} style={{ width: '450px' }} header="Confirm" modal footer={DeleteItemDialogFooter(setShowDeleteItemDialog, onDelete)} onHide={() => setShowDeleteItemDialog(false)}>
        <div className="confirmation-content">
          <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
          {rowAction && (
            <span>
              Are you sure you want to delete this item?
              <b>(Id: {rowAction.id})</b>
            </span>
          )}
        </div>
      </Dialog>
    </Fragment>
  )
}

const DeleteItemDialogFooter = (setShowDeleteItemDialog, onDelete) => {
  return (
    <React.Fragment>
      <Button label="No" icon="pi pi-times" className="p-button-text" onClick={() => setShowDeleteItemDialog(false)} />
      <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={onDelete} />
    </React.Fragment>
  )
}
