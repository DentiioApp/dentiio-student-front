import common from '@/core/global/common'
import apiCall from '@/services/apiCall'
import ModelBase from '../../database/ModelBase'

export default class Livre extends ModelBase {
  static entity = 'livres'

  id!: number
  name!: string
  datePublication!: string
  idBibliotheque!: number

  static fields() {
    return {
      id: this.uid(),
      name: this.string(''),
      datePublication: this.string(''),
      idBibliotheque: this.attr(null)
    }
  }
  assign(id: number, name: string, datePublication: string) {
    this.id = id
    this.name = name
    this.datePublication = datePublication
  }

  reassign(model: Livre) {
    return this.assign(model.id, model.name, model.datePublication)
  }

  clone(): Livre {
    return Livre.createLivre(this.id, this.name, this.datePublication)
  }

  static createLivre(id: number, name: string, datePublication: string): Livre {
    const m = new Livre()
    m.assign(id, name, datePublication)
    return m
  }

  static empty(): Livre {
    const cf = new Livre()
    cf.assign(0, '', '')
    return cf
  }

  displayDatePublication(langage?: string) {
    return this.datePublication
      ? new Date(this.datePublication).toLocaleDateString(
          langage ? langage : 'fr-FR'
        )
      : ''
  }

  //API ACTIONS
  async apiDelete(this: Livre): Promise<void> {
    common.loading.go()
    return apiCall.livre
      .delete(this.id)
      .then(() => {
        this.$delete()
        common.toast.success()
      })
      .catch(err => {
        common.toast.errorAPI(err)
      })
      .then(() => {
        common.loading.stop()
      })
  }
  async apiPut(this: Livre): Promise<void> {
    common.loading.go()
    return apiCall.livre
      .put(this)
      .then(() => {
        Livre.insertOrUpdate({
          data: this
        })
        common.toast.success()
      })
      .catch(err => {
        common.toast.errorAPI(err)
      })
      .then(() => {
        common.loading.stop()
      })
  }
  async apiPost(this: Livre): Promise<void> {
    common.loading.go()
    return apiCall.livre
      .post(this)
      .then(resp => {
        this.id = resp.data
        Livre.insert({
          data: this
        })
        common.toast.success()
      })
      .catch(err => {
        common.toast.errorAPI(err)
      })
      .then(() => {
        common.loading.stop()
      })
  }
}
