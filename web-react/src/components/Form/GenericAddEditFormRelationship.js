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

export const GenericAddEditFormRelationship = ({ Queries, Models, showFormDialog, setShowFormDialog, toast, itemData }) => {
  // Other
  const [showToast, setShowToast] = useState(false)
  const [formData, setFormData] = useState({})
  // Dialog

  const [relationship_submittedToFilmFestivals, relationship01Result] = useMutation(Queries.CREATE_RELATIONSHIP_SUBMITTED_TO, { errorPolicy: 'all' })
  const [relationship_selectedAtFilmFestivals, relationship02Result] = useMutation(Queries.CREATE_RELATIONSHIP_SELECTED_AT, { errorPolicy: 'all' })
  const [relationship_shortlistedAtFilmFestivals, relationship03Result] = useMutation(Queries.CREATE_RELATIONSHIP_SHORTLISTED_AT, { errorPolicy: 'all' })
  const [relationship_toSubmitToFilmFestivals, relationship04Result] = useMutation(Queries.CREATE_RELATIONSHIP_TO_SUBMIT_TO, { errorPolicy: 'all' })
  const [relationship_notSelectedAtFilmFestivals, relationship05Result] = useMutation(Queries.CREATE_RELATIONSHIP_NOT_SELECTED_AT, { errorPolicy: 'all' })

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
      } else if (data?._isRelationship == true) {
        if (data?._RELATIONSHIP_ == 'submittedToFilmFestivals') {
          await relationship_submittedToFilmFestivals({ variables: { fromId: data._fromId_, toId: data._toId_, relationshipName: data._RELATIONSHIP_, relationshipProperties: (({ _fromId_, _toId_, _RELATIONSHIP_, _isRelationship, ...o }) => o)(data) } })
        } else if (data?._RELATIONSHIP_ == 'selectedAtFilmFestivals') {
          await relationship_selectedAtFilmFestivals({ variables: { fromId: data._fromId_, toId: data._toId_, relationshipName: data._RELATIONSHIP_, relationshipProperties: (({ _fromId_, _toId_, _RELATIONSHIP_, _isRelationship, ...o }) => o)(data) } })
        } else if (data?._RELATIONSHIP_ == 'shortlistedAtFilmFestivals') {
          await relationship_shortlistedAtFilmFestivals({ variables: { fromId: data._fromId_, toId: data._toId_, relationshipName: data._RELATIONSHIP_, relationshipProperties: (({ _fromId_, _toId_, _RELATIONSHIP_, _isRelationship, ...o }) => o)(data) } })
        } else if (data?._RELATIONSHIP_ == 'toSubmitToFilmFestivals') {
          await relationship_toSubmitToFilmFestivals({ variables: { fromId: data._fromId_, toId: data._toId_, relationshipName: data._RELATIONSHIP_, relationshipProperties: (({ _fromId_, _toId_, _RELATIONSHIP_, _isRelationship, ...o }) => o)(data) } })
        } else if (data?._RELATIONSHIP_ == 'notSelectedAtFilmFestivals') {
          await relationship_notSelectedAtFilmFestivals({ variables: { fromId: data._fromId_, toId: data._toId_, relationshipName: data._RELATIONSHIP_, relationshipProperties: (({ _fromId_, _toId_, _RELATIONSHIP_, _isRelationship, ...o }) => o)(data) } })
        }
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
      {ToastSuccessError(toast, showToast, setShowToast, relationship01Result.called, relationship01Result.loading, relationship01Result.error)}
      {ToastSuccessError(toast, showToast, setShowToast, relationship02Result.called, relationship02Result.loading, relationship02Result.error)}
      {ToastSuccessError(toast, showToast, setShowToast, relationship03Result.called, relationship03Result.loading, relationship03Result.error)}
      {ToastSuccessError(toast, showToast, setShowToast, relationship04Result.called, relationship04Result.loading, relationship04Result.error)}
      {ToastSuccessError(toast, showToast, setShowToast, relationship05Result.called, relationship05Result.loading, relationship05Result.error)}
      {ToastSuccessError(toast, showToast, setShowToast, editResult.called, editResult.loading, editResult.error)}
      <Dialog visible={showFormDialog} style={{ width: '700px' }} header="Add/Edit Form" maskClassName={{ zIndex: '2500' }} modal baseZIndex="2000" className="p-fluid" footer={FormDialogFooter(hideDialog, formik.handleSubmit)} onHide={hideDialog}>
        {GenericInputForm(Models.columnsForm, formik)}
      </Dialog>
    </Fragment>
  )
}
