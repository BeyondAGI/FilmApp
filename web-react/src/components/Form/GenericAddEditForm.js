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

export const GenericAddEditForm = ({
  Queries,
  Models,
  showFormDialog,
  setShowFormDialog,
  toast,
  itemData,
}) => {
  // Other
  const [showToast, setShowToast] = useState(false)
  const [formData, setFormData] = useState({})
  // Dialog
  const [
    create,
    { data, loading, error, called },
  ] = useMutation(Queries.CREATE_ITEMS, { errorPolicy: 'all' })

  // const [
  //   createRelationship, createRelationshipResult
  // ] = useMutation(Queries.CREATE_RELATIONSHIPS, { errorPolicy: 'all' })

  const [edit, editResult] = useMutation(Queries.UPDATE_ITEM, {
    errorPolicy: 'all',
  })

  const formik = useFormik({
    initialValues: itemData?.[Object.keys(itemData)[0]][0] ?? Models.emptyItem,
    enableReinitialize: true,
    validate: (data) => {
      let errors = {}
      return errors
    },
    onSubmit: async (data) => {
      const { __typename, id, ...rest } = data
      setFormData(data)
      if (data.id) {
        await edit({ variables: { id: data.id, updateInput: rest } })
      }
      else if (data?._isRelationship == true) {
        await create({ variables: {fromId: data._fromId_, toId: data._toId_, relationshipName: data._RELATIONSHIP_, relationshipProperties: (({ _fromId_, _toId_, _RELATIONSHIP_,  _isRelationship, ...o }) => o)(data)}})
      } else {
        await create({ variables: { input: [data] } })
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
      {ToastSuccessError(
        toast,
        showToast,
        setShowToast,
        called,
        loading,
        error
      )}
      {ToastSuccessError(
        toast,
        showToast,
        setShowToast,
        editResult.called,
        editResult.loading,
        editResult.error,
        // createRelationshipResult.called,
        // createRelationshipResult.loading,
        // createRelationshipResult.error
      )}
      <Dialog
        visible={showFormDialog}
        style={{ width: '700px' }}
        header="Add/Edit Form"
        maskClassName={{ zIndex: '2500' }}
        modal
        baseZIndex="2000"
        className="p-fluid"
        footer={FormDialogFooter(hideDialog, formik.handleSubmit)}
        onHide={hideDialog}
      >
        {GenericInputForm(Models.columnsAll, formik)}
      </Dialog>
    </Fragment>
  )
}
