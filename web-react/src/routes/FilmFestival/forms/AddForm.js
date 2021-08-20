import 'primeicons/primeicons.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import './styles.css'
import * as Models from '../models/main'
import { Fragment } from 'react'
import { ToFormPage } from '../../../pages/FormPage'
import { useMutation } from '@apollo/client'
import * as Queries from '../queries/main'
import { FormMessageDialog } from  '../../../pages/FormResultDialog'
import { FormDialogFooter } from '../../../pages/FormDialogFooter'

export const AddForm = ({
  showFormDialog,
  setShowFormDialog,
  toast,
  ...rest
}) => {
  // Other
  const [showMessageDialog, setShowMessageDialog] = useState(false)
  const [formData, setFormData]           = useState({})
  // Dialog
  const [item, setItem]                            = useState(Models.emptyItem)
  const [create, { data, loading, error, called }] = useMutation(Queries.CREATE_LIST, { errorPolicy: 'all' })


  const formik = useFormik({
    initialValues: Models.emptyItem,
    validate     : (data) => {
      let errors = {}

      if (!data.nameInternational) {
        errors.name = 'International Name is is required.'
      }

      return errors
    },
    onSubmit: async (data) => {
      setFormData(data)
      await create({ variables: { input: [data] } })
      setShowMessageDialog(true)
      setShowFormDialog(false)
      formik.resetForm()
    },
  })

  const hideDialog = () => {
    setShowFormDialog(false)
  }

  const saveItem = () => {

    if (item.name.trim()) {
      // let _items = [...items];
      let _item = { ...item }
      if (item.id) {
        // const index = findIndexById(item.id);

        // _items[index] = _item;
        toast.current.show({
          severity: 'success',
          summary : 'Successful',
          detail  : 'Item Updated',
          life    : 3000,
        })
      } else {
        _item.id = -1
        // _items.push(_item);
        toast.current.show({
          severity: 'success',
          summary : 'Successful',
          detail  : 'Item Saved',
          life    : 3000,
        })
      }

      // setItems(_items);
      setShowFormDialog(false)
      setItem(Models.emptyItem)
    }
  }

  return (
    <Fragment>
      {FormMessageDialog(toast, showMessageDialog, setShowMessageDialog, called, loading, error)}
      <Dialog
        visible       = {showFormDialog}
        style         = {{ width: '700px' }}
        header        = "Add/Edit Form"
        maskClassName = {{ zIndex: '2500' }}
        modal
        baseZIndex = "2000"
        className  = "p-fluid"
        footer     = {FormDialogFooter(hideDialog, formik.handleSubmit)}
        onHide     = {hideDialog}
      >
        {ToFormPage(Models.columnsAll, formik)}
      </Dialog>
    </Fragment>
  )
}
