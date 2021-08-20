export function ConvertToUTC(date) {
  if (date && date !== undefined) {
    let utcDate = Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    )
    return new Date(utcDate)
  }
  return date
}
