import React from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { ToastSuccessError } from '../../Toast/ToastMessages' 
import { useMutation } from '@apollo/client'
import { Fragment } from 'react'


export const DeleteItemsDialog = (rowsData, Queries, toast, showToast, setShowToast, showDeleteItemsDialog, setShowDeleteItemsDialog) => {
    const [
        deleteItems,
        { data, loading, error, called },
      ] = useMutation(Queries.DELETE_ITEMS, { errorPolicy: 'all' })

    const onDelete = async (e) => {
      e.preventDefault()
        await deleteItems({ variables: { where: {id_IN: rowsData.map(rowData => rowData.id ) } }})
        setShowToast(true)
        setShowDeleteItemsDialog(false)
    }

    return (<Fragment>
      <Fragment>
            {ToastSuccessError(
              toast,
              showToast,
              setShowToast,
              called,
              loading,
              error,
              `Nodes deleted: ${data?.[Object.keys(data)[0]].nodesDeleted}, 
              Relationships deleted: ${data?.[Object.keys(data)[0]].relationshipsDeleted}`
            )}
          </Fragment>
      <Dialog
            visible = {showDeleteItemsDialog}
            style   = {{ width: '450px' }}
            header  = "Confirm"
            modal
            footer = {DeleteItemsDialogFooter(setShowDeleteItemsDialog, onDelete)}
            onHide = {() => setShowDeleteItemsDialog(false)}
          >
            <div className = "confirmation-content">
              <i
                className = "pi pi-exclamation-triangle p-mr-3"
                style     = {{ fontSize: '2rem' }}
              />
              {rowsData && (
                <span>
                  Are you sure you want to delete those items?<b>({rowsData.map((x, i) => `[${i}]: Id=${x.id}   `)})</b>
                </span>
              )}
            </div>
          </Dialog>
          </Fragment>)
}

const DeleteItemsDialogFooter = (setShowDeleteItemsDialog, onDelete) =>{
        return (
            <React.Fragment>
              <Button
                label     = "No"
                icon      = "pi pi-times"
                className = "p-button-text"
                onClick   = {() => setShowDeleteItemsDialog(false)}
              />
              <Button
                label     = "Yes"
                icon      = "pi pi-check"
                className = "p-button-text"
                onClick   = {onDelete}
              />
            </React.Fragment>
          )
        }
