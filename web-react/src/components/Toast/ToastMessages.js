export const ToastSuccessError = (
  toast,
  showToast,
  setShowToast,
  called,
  loading,
  error,
  detail = 'Item Created'
) => {
  if (showToast && called && !loading && !error) {
    toast.current.show({
      severity: 'success',
      summary: 'Successful',
      detail: detail,
      life: 6000,
    })
    setShowToast(false)
    return
  } else if (showToast && called && error && error?.graphQLErrors.length > 0) {
    toast.current.show(
      error.graphQLErrors.map((err, i) => {
        return {
          severity: 'error',
          summary: `Error ${i}`,
          detail: err.message,
          life: 12000,
        }
      })
    )
    setShowToast(false)
    return
  } else return
}
