import React, { useEffect, useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { InputNumber } from 'primereact/inputnumber'
import { Calendar } from 'primereact/calendar'
import { Checkbox } from 'primereact/checkbox'
import { classNames } from 'primereact/utils'
import { Fragment } from 'react'
import { FieldType } from '../../common/enums'

import { InputTextarea } from 'primereact/inputtextarea'
import { ConvertToUTC } from '../../helpers/DateHelper'
import { OptionListService } from '../../services/OptionListService'
import { DisplayFormikDebugState } from '../../helpers/FormikHelper'
import { IS_DEBUG_FORM_ENABLED } from '../../common/constants'
import TimePicker from '@material-ui/lab/TimePicker';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import { TextField } from '@material-ui/core'
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';

const ToInputField = (col, formik) => {
  // Dropdowns
  const [aspectRatios, setAspectRatios] = useState([])
  const [countries, setCountries] = useState([])
  const [filmAges, setFilmAges] = useState([])
  const [filmGenres, setFilmGenres] = useState([])
  const [filmLengths, setFilmLengths] = useState([])
  const [filmStatuses, setFilmStatuses] = useState([])
  const [framerates, setFramerates] = useState([])
  const [premierRequirements, setPremierRequirements] = useState([])
  const [shootingMediums, setShootingMediums] = useState([])



  const optionListService = new OptionListService()
  useEffect(() => {
    optionListService.getAspectRatios().then((data) => setAspectRatios(data))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    optionListService.getCountries().then((data) => setCountries(data))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    optionListService.getFilmAges().then((data) => setFilmAges(data))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    optionListService.getFilmGenres().then((data) => setFilmGenres(data))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    optionListService.getFilmLengths().then((data) => setFilmLengths(data))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    optionListService.getFilmStatuses().then((data) => setFilmStatuses(data))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    optionListService.getFramerates().then((data) => setFramerates(data))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    optionListService
      .getPremierRequirements()
      .then((data) => setPremierRequirements(data))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    optionListService.getShootingMediums().then((data) => setShootingMediums(data))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps


  let optionsList = {
    aspectRatios: aspectRatios,
    countries: countries,
    filmAges: filmAges,
    filmGenres: filmGenres,
    filmLengths: filmLengths,
    filmStatuses: filmStatuses,
    framerates: framerates,
    premierRequirements: premierRequirements,
    shootingMediums: shootingMediums
  }

  // Don't show hidden fields
  if (col.hidden) {
    return <Fragment></Fragment>
  }

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name])
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    )
  }

  switch (col.type) {
    case FieldType.BOOLEAN:
      return (
        <Fragment>
          <div className="p-field-checkbox">
            <Checkbox
              inputId={col.field}
              name={col.field}
              checked={formik.values[col.field]}
              onChange={formik.handleChange}
              className={classNames({
                'p-invalid': isFormFieldValid(col.field),
              })}
            />
            <label
              htmlFor={col.field}
              className={classNames({
                'p-error': isFormFieldValid(col.field),
              })}
            >
              {col.header}
            </label>
          </div>
        </Fragment>
      )

    case FieldType.DATE:
      return (
        <Fragment>
          <span className="p-float-label">
            <Calendar
              id={col.field}
              name={col.field}
              value={formik.values[col.field]}
              onChange={(newValue) => {
                formik.setFieldValue(col.field, ConvertToUTC(newValue.value))
              }}
              dateFormat="dd/mm/yy"
              mask="99/99/9999"
              showIcon
            />
            <label htmlFor={col.field}>{col.header}</label>
          </span>
        </Fragment>
      )
    case FieldType.DROPDOWN:
      return (
        <Fragment>
          <span className="p-float-label">
            <Dropdown
              id={col.field}
              name={col.field}
              value={
                optionsList[col.options]
                  ? optionsList[col.options].find(
                      (option) => option.name === formik.values[col.field]
                    )
                  : ''
              }
              onChange={(option) =>
                formik.setFieldValue(col.field, option.value.name)
              }
              options={optionsList[col.options]}
              optionLabel="name"
            />
            <label htmlFor={col.field}>{col.header}</label>
          </span>
        </Fragment>
      )
    case FieldType.EMAIL:
      return (
        <Fragment>
          <span className="p-float-label p-input-icon-right">
            <i className="pi pi-envelope" />
            <InputText
              id={col.field}
              name={col.field}
              value={formik.values[col.field]}
              onChange={formik.handleChange}
              className={classNames({
                'p-invalid': isFormFieldValid(col.field),
              })}
            />
            <label
              htmlFor={col.field}
              className={classNames({
                'p-error': isFormFieldValid(col.field),
              })}
            >
              Email*
            </label>
          </span>
          {getFormErrorMessage(col.field)}
        </Fragment>
      )
    case FieldType.TEXTAREA:
      return (
        <Fragment>
          <span className="p-float-label">
            <InputTextarea
              id={col.field}
              name={col.field}
              value={formik.values[col.field]}
              onChange={formik.handleChange}
              className={classNames({
                'p-invalid': isFormFieldValid(col.field),
              })}
            />
            <label
              htmlFor={col.field}
              className={classNames({
                'p-error': isFormFieldValid(col.field),
              })}
            >
              {col.header}
            </label>
          </span>
          {getFormErrorMessage(col.field)}
        </Fragment>
      )
    case FieldType.FLOAT, FieldType.DURATION:
      return (
        <Fragment>
          <span className="p-float-label">
            <InputNumber
              id={col.field}
              name={col.field}
              mode="decimal"
              maxFractionDigits={2}
              value={formik.values[col.field]}
              onValueChange={formik.handleChange}
              showButtons
              // buttonLayout="horizontal"
              className={classNames({
                'p-invalid': isFormFieldValid(col.field),
              })}
            />
            <label
              htmlFor={col.field}
              className={classNames({
                'p-error': isFormFieldValid(col.field),
              })}
            >
              {col.header}
            </label>
          </span>
          {getFormErrorMessage(col.field)}
        </Fragment>
      )
    case FieldType.INTEGER:
      return (
        <Fragment>
          <span className="p-float-label">
            <InputNumber
              id={col.field}
              name={col.field}
              mode="decimal"
              InputLabelProps={{ shrink: true }}
              maxFractionDigits={0}
              value={formik.values[col.field] || 0}
              onValueChange={formik.handleChange}
              showButtons
              useGrouping={false}
              className={classNames({
                'p-invalid': isFormFieldValid(col.field),
              })}
            />
            <label
              htmlFor={col.field}
              className={classNames({
                'p-error': isFormFieldValid(col.field),
              })}
            >
              {col.header}
            </label>
          </span>
          {getFormErrorMessage(col.field)}
        </Fragment>
      )
    case FieldType.CURRENCY:
      return (
        <Fragment>
          <span className="p-float-label">
            <InputNumber
              id={col.field}
              name={col.field}
              mode="currency"
              currency="USD"
              locale="en-US"
              value={formik.values[col.field]}
              onValueChange={formik.handleChange}
              className={classNames({
                'p-invalid': isFormFieldValid(col.field),
              })}
            />
            <label
              htmlFor={col.field}
              className={classNames({
                'p-error': isFormFieldValid(col.field),
              })}
            >
              {col.header}
            </label>
          </span>
          {getFormErrorMessage(col.field)}
        </Fragment>
      )
    default:
      return (
        <Fragment>
          <span className="p-float-label">
            <InputText
            
              id={col.field}
              name={col.field}
              value={formik.values[col.field]}
              onChange={formik.handleChange}
              className={classNames({
                'p-invalid': isFormFieldValid(col.field),
              })}
            />
            <label
              htmlFor={col.field}
              className={classNames({
                'p-error': isFormFieldValid(col.field),
              })}
            >
              {col.header}
            </label>
          </span>
          {getFormErrorMessage(col.field)}
        </Fragment>
      )
  }
}

// Display The Group Name
const ToFormHeaderGroup = (col) => {
  {
    return col.colGroup ? (
      <div>
        <h4 className="p-text-left">{col.colGroup}</h4>
      </div>
    ) : (
      <div />
    )
  }
}

// Display The Form
const ToInputForm = (cols, formik) => {
  return cols.map((col) => {
    return (
      <Fragment key={col.field}>
        {ToFormHeaderGroup(col)}
        <div className="p-field">{ToInputField(col, formik)}</div>
      </Fragment>
    )
  })
}

export const GenericInputForm = (cols, formik) => (
  <div className="form-demo">
    <div className="p-d-flex p-jc-center">
      <div className="card">
        <form onSubmit={formik.handleSubmit} className="p-fluid">
          {ToInputForm(cols, formik)}
        </form>
      </div>
      {IS_DEBUG_FORM_ENABLED && <DisplayFormikDebugState {...formik} />}
    </div>
  </div>
)
