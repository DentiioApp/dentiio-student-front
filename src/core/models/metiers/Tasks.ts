import ModelBase from '../../database/ModelBase'

export default class Tasks extends ModelBase {
  static entity = 'tasks'

  id!: number
  content!: string
  creatorFirstname!: string
  creatorLastname!: string
  description!: string
  todoListName!: string

  static fields() {
    return {
      id: this.number(''),
      content: this.string(''),
      creatorFirstname: this.string(''),
      creatorLastname: this.string(''),
      description: this.string(''),
      todoListName: this.string('')
    }
  }
}
