export class TimeZoneModel {
  value: string
  fuseau: string
  displayName: string

  constructor(value: string, fuseau: string) {
    this.value = value
    this.fuseau = fuseau
    this.displayName = value + ' ' + fuseau
  }
}

export class TimeZoneListModel {
  listTimeZones: Array<TimeZoneModel>
  constructor(listTimeZones: Array<TimeZoneModel>) {
    this.listTimeZones = listTimeZones
  }
}
