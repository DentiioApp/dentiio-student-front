<template>
  <div>
    <v-fab-transition v-if="fab">
      <v-btn
        class="btn_lng"
        :color="color"
        dark
        @click.stop="dialog = true"
        absolute
        top
        right
        fab
      >
        <i :class="['flag flag-' + getLanguage.iso]"></i>
      </v-btn>
    </v-fab-transition>
    <v-btn
      v-else
      class="btn_lng"
      :color="color"
      dark
      @click.stop="dialog = true"
    >
      <i :class="['flag flag-' + getLanguage.iso]"></i>
    </v-btn>
    <v-dialog :scrollable="false" v-model="dialog" max-width="260">
      <v-card>
        <v-card-title class="headline">
          {{ $getTrad('params.chooseLang') }}
        </v-card-title>
        <v-card-text style="height: 150px;">
          <v-radio-group v-model="dialogm1" column>
            <v-radio
              v-for="country in countries"
              :key="country.id"
              :label="country.nicename"
              :value="country.iso"
              @change="changeEvent(country)"
            >
              <template v-slot:label>
                <i :class="['mr-2', 'em', 'flag flag-' + country.iso]"></i>
                {{ country.nicename }}
              </template>
            </v-radio>
          </v-radio-group>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script type="ts">
import { countryDataLight } from '../Flag/data/countryDataLight'
import '@/components/Flag/data/flag.min.css'
import storeActions from '@/store/actions/storeActions'
import { mapGetters } from 'vuex'
import { find, isEmpty } from 'lodash'

const SELECTED = storeActions.selected

export default {
  data() {
    return {
      countries: countryDataLight,
      select: null,
      dialog: false,
      dialogm1: 'fr'
    }
  },
  props: {
    color: {
      type: String,
      default: 'themeCHR'
    },
    fab: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.initialize()
  },
  methods: {
    initialize() {
      if (isEmpty(this.getLanguage)) {
        this.setDefaultLanguage(this.$store, this.countries)
      } else {
        this.dialogm1 = this.getLanguage.iso
      }
    },
    changeEvent(country) {
      this.dialog = false
      this.$store.commit(SELECTED.CHANGE_LANGUAGE, country)
    },
    setDefaultLanguage(store, pays) {
      store.commit(
        SELECTED.CHANGE_LANGUAGE,
        find(pays ? pays : countryDataLight, ['iso', 'fr'])
      )
    }
  },
  computed: {
    ...mapGetters({
      getLanguage: 'getLanguage'
    })
  }
}
</script>
<style scoped>
.btn_lng {
  /* border: 1px solid white !important; */
  padding: 0 !important;
  min-width: 45px !important;
  box-shadow: none !important;
}
</style>
