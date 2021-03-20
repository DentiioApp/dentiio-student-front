// https://vuex-orm.org/guide/model/relationships.html#one-to-many
import ModelBase from '../../database/ModelBase'
import Livre from './Livre'

export default class Bibliotheque extends ModelBase {
  static entity = 'bibliotheques'

  id!: number
  nom!: string
  livres!: Array<Livre>

  static fields() {
    return {
      id: this.uid(),
      nom: this.string(''),
      livres: this.hasMany(Livre, 'idBibliotheque')
    }
  }
}
