import React from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { Fragment } from 'react'

const dialogFooter = (setShowMessageDialog) => (
  <div className="p-d-flex p-jc-center">
    <Button
      label="OK"
      className="p-button-text"
      autoFocus
      onClick={() => setShowMessageDialog(false)}
    />
  </div>
)

export const FormMessageDialog = (
  toast,
  showMessageDialog,
  setShowMessageDialog,
  called,
  loading,
  error
) => {
  if (showMessageDialog && called && !loading && !error) {
    toast.current.show({
      severity: 'success',
      summary : 'Successful',
      detail  : 'Item Created',
      life    : 6000,
    })
    setShowMessageDialog(false)
    return
  }

  else return (
    <Dialog
      visible={showMessageDialog}
      onHide={() => setShowMessageDialog(false)}
      position="top"
      footer={dialogFooter(setShowMessageDialog)}
      showHeader={false}
      breakpoints={{ '960px': '80vw' }}
      style={{ width: '30vw' }}
    >

      {showMessageDialog && called && error && error?.graphQLErrors.length > 0 && (
        <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
          <i
            className="pi pi-exclamation-circle"
            style={{ fontSize: '5rem', color: 'var(--orange-500)' }}
          ></i>
          <h5>The item was not saved!</h5>
          <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
            An error occurred when saving to the database.
          </p>
          <div style={{ textAlign: 'center' }}>
            {error.graphQLErrors.map(({ message }, i) => (
              <span key={i}>{message}</span>
            ))}
          </div>
        </div>
      )}
    </Dialog>
  )
}
