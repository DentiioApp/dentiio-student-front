import { Model } from '@vuex-orm/core'

export default class ModelBase extends Model {
  static fetchMany<T extends Model, U>(predicate: (x: T) => string, value: U) {
    return this.query()
      .where(predicate, value)
      .get()
  }

  static any() {
    return this.query().get().length > 0
  }

  static add<T extends Model>(entity: T) {
    this.insert({ data: entity })
  }

  static addRange<T extends Model>(entities: Array<T>) {
    this.insert({ data: entities })
  }

  static remove<T extends Model>(entity: T) {
    this.delete(x => {
      return entity == x
    })
  }

  static removeRange<T extends Model>(entities: Array<T>) {
    entities.forEach(x => {
      this.remove(x)
    })
  }
}
