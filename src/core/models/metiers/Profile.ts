import ModelBase from '../../database/ModelBase'

export default class Profile extends ModelBase {
  static entity = 'profile'

  id!: number
  idTeamwork!: number
  firstname!: string
  lastname!: string
  email!: string
  mentionName!: string
  isClientUser!: boolean
  inOwnerCompany!: boolean
  userType!: string
  companyId!: number
  companyName!: string
  administrator!: boolean
  firstLetter(): string {
    return this.firstname.substr(0, 1) + this.lastname.substr(0, 1)
  }

  static fields() {
    return {
      id: this.number(''),
      idTeamwork: this.number(''),
      firstname: this.string(''),
      lastname: this.string(''),
      email: this.string(''),
      mentionName: this.string(''),
      isClientUser: this.boolean(''),
      inOwnerCompany: this.boolean(''),
      userType: this.string(''),
      companyId: this.number(''),
      companyName: this.string(''),
      administrator: this.boolean(''),
      firstLetter: this.string('')
    }
  }
}
