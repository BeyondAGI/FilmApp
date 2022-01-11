import 'primeicons/primeicons.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import './styles.css'
import { Fragment } from 'react'
import { GenericInputForm } from './GenericInputForm'
import { useMutation } from '@apollo/client'
import { ToastSuccessError } from '../Toast/ToastMessages'
import { FormDialogFooter } from './FormDialogFooter'
import * as Sentry from '@sentry/react'

export const GenericAddEditForm = ({ Queries, Models, showFormDialog, setShowFormDialog, toast, itemData, refetch }) => {
  // Other
  const [showToast, setShowToast] = useState(false)
  const [formData, setFormData] = useState({})
  // Dialog
  const [create, { data, loading, error, called }] = useMutation(Queries.CREATE_ITEMS, { errorPolicy: 'all' })

  const [edit, editResult] = useMutation(Queries.UPDATE_ITEM, {
    errorPolicy: 'all',
  })

  const formik = useFormik({
    initialValues: itemData ? itemData[[Object.keys(itemData)[0]][0]] : Models.emptyItem,
    enableReinitialize: true,
    validate: (data) => {
      let errors = {}
      return errors
    },
    onSubmit: async (data) => {
      const { __typename, id, ...rest } = data
      setFormData(data)
      if (data.id) {
        Sentry.addBreadcrumb({
          category: 'UPDATE_ITEM',
          message: JSON.stringify(rest),
          level: Sentry.Severity.Info,
        })
        Sentry.configureScope((scope) => scope.setTransactionName('UPDATE_ITEM'))
        Sentry.captureMessage('Update of ' + __typename)
        await edit({ variables: { id: [data.id], updateInput: rest } })
      } else {
        Sentry.addBreadcrumb({
          category: 'CREATE_ITEM',
          message: JSON.stringify(rest),
          level: Sentry.Severity.Info,
        })
        Sentry.configureScope((scope) => scope.setTransactionName('CREATE_ITEM'))
        Sentry.captureMessage('Creation of ' + __typename)
        await create({ variables: { input: [data] } })
        refetch()
      }

      setShowToast(true)
      setShowFormDialog(false)
      formik.resetForm()
    },
  })

  const hideDialog = () => {
    setShowFormDialog(false)
  }

  return (
    <Fragment>
      {ToastSuccessError(toast, showToast, setShowToast, called, loading, error)}
      {ToastSuccessError(
        toast,
        showToast,
        setShowToast,
        editResult.called,
        editResult.loading,
        editResult.error
        // createRelationshipResult.called,
        // createRelationshipResult.loading,
        // createRelationshipResult.error
      )}
      <Dialog visible={showFormDialog} style={{ width: '900px' }} header="Add/Edit Form" maskClassName={{ zIndex: '2500' }} modal baseZIndex="2000" className="p-fluid" footer={FormDialogFooter(hideDialog, formik.handleSubmit)} onHide={hideDialog}>
        {GenericInputForm(Models.columnsForm, formik, formik.values?.id != undefined ? true : false, itemData ? itemData[[Object.keys(itemData)[0]][0]] : null)}
      </Dialog>
    </Fragment>
  )
}
