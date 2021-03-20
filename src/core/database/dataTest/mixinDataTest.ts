import Vue from 'vue'
import storeActions from '../../../store/actions/storeActions'
import store from '@/store/index'
import Bibliotheque from '@/core/models/metiers/Bibliotheque'
import Livre from '@/core/models/metiers/Livre'
export default Vue.extend({
  methods: {
    initDataTest() {
      store.commit(storeActions.global.DATA_INITIALIZED, false)
      this.initBibliotheque()
    },
    initBibliotheque() {
      let i = 1
      if (!Bibliotheque.any()) {
        Bibliotheque.add(
          new Bibliotheque({
            id: i++,
            nom: 'Bibliotheque 1'
          })
        ),
          Bibliotheque.add(
            new Bibliotheque({
              id: i++,
              nom: 'Bibliotheque 2'
            })
          ),
          Bibliotheque.add(
            new Bibliotheque({
              id: i++,
              nom: 'Bibliotheque 3'
            })
          )
      }

      let z = 1
      if (!Livre.any()) {
        for (let l = 1; l < 82; l++) {
          Livre.add(
            new Livre({
              id: z,
              name: 'Livre ' + z,
              datePublication: '2020-10-01',
              idBibliotheque: 1
            })
          )
          z++
        }
        for (let l = 1; l < 65; l++) {
          Livre.add(
            new Livre({
              id: z,
              name: 'Livre ' + z,
              datePublication: '2020-11-01',
              idBibliotheque: 2
            })
          ),
            z++
        }
        for (let l = 1; l < 4; l++) {
          Livre.add(
            new Livre({
              id: z,
              name: 'Livre ' + z,
              datePublication: '2020-12-01',
              idBibliotheque: 3
            })
          ),
            z++
        }
      }
      store.commit(storeActions.global.DATA_INITIALIZED, true)
    }
  }
})
