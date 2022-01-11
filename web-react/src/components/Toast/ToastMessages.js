import * as Sentry from '@sentry/react'
export const ToastSuccessError = (toast, showToast, setShowToast, called, loading, error, detail = 'Item Created/Edited') => {
  if (showToast && called && !loading && !error) {
    if (detail.includes('No nodes')) {
      toast.current.show({
        severity: 'warn',
        summary: 'Warning',
        detail: detail + ', check your authorizations',
        life: 6000,
      })
      setShowToast(false)
      return
    } else {
      toast.current.show({
        severity: 'success',
        summary: 'Successful',
        detail: detail,
        life: 6000,
      })
      setShowToast(false)
      return
    }
  } else if (showToast && called && error && error?.graphQLErrors.length > 0) {
    // Sentry.captureException(error)
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
