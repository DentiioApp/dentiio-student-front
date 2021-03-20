import store from '@/store'
export class UserInformationModel {
  nom: string
  prenom: string
  firstLetter(): string {
    return this.nom ? this.nom.substr(0, 1) : ''
  }

  constructor() {
    this.nom = store.getters.getProfile.nom
    this.prenom = store.getters.getProfile.prenom
  }
}
