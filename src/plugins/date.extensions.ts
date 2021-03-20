interface Date {
  addDays(days: number): Date
  addMonth(months: number): Date
  addDay(day: number): Date
}
Date.prototype.addDays = function(days: number): Date {
  const date = new Date(this.valueOf())
  date.setDate(date.getDate() + days)
  return date
}
Date.prototype.addMonth = function(month: number): Date {
  const date = new Date(this.valueOf())
  date.setMonth(date.getMonth() + month)
  return date
}
Date.prototype.addDay = function(inc: number): Date {
  const date = new Date(this.valueOf())
  date.setDate(date.getDay() + inc)
  return date
}
