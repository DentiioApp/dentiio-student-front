import ModelBase from '../../database/ModelBase'

export default class Projects extends ModelBase {
  static entity = 'projects'

  id!: number
  name!: string
  description!: string
  type!: string
  status!: string
  companyId!: number
  notifyEveryone!: boolean
  notifyCommentIncludeCreator!: boolean
  replyByEmailEnabled!: boolean
  createdAt!: string
  updatedAt!: string
  updatedBy!: number

  static fields() {
    return {
      id: this.number(''),
      name: this.string(''),
      description: this.string(''),
      type: this.string(''),
      status: this.string(''),
      companyId: this.number(''),
      notifyEveryone: this.boolean(''),
      notifyCommentIncludeCreator: this.boolean(''),
      replyByEmailEnabled: this.boolean(''),
      createdAt: this.string(''),
      updatedAt: this.string(''),
      updatedBy: this.number('')
    }
  }
}
