<template>
  <v-container>
    <v-card>
      <v-card-title>
        {{ $getTrad('exemple.livreTitre') }}
        <v-btn
          v-if="bibliotheques.length > 0"
          class="ml-4"
          @click="dialog = true"
          color="primary"
          fab
          small
          dark
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <span class="ml-1" v-else>
          : [DEV] {{ $getTrad('exemple.reload') }}</span
        >
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          :label="$getTrad('global.recherche')"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :loading="false"
        :loading-text="$getTrad('global.loadingDatatable')"
        :headers="headers"
        :items="livres"
        :search="search"
        :items-per-page="5"
        item-key="id"
        class="elevation-1"
        :footer-props="{
          showFirstLastPage: true,
          firstIcon: 'mdi-arrow-collapse-left',
          lastIcon: 'mdi-arrow-collapse-right',
          prevIcon: 'mdi-minus',
          nextIcon: 'mdi-plus'
        }"
      >
        <template v-slot:[`item.datePublication`]="{ item }">
          {{ item.displayDatePublication(getLanguage.isoFull) }}
        </template>
      </v-data-table>
    </v-card>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      autofocus
                      v-model="formModel.name"
                      :rules="nameRules"
                      :label="$getTrad('exemple.form.nom')"
                      :counter="30"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-menu
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          :value="
                            formModel.displayDatePublication(
                              getLanguage.isoFull
                            )
                          "
                          :label="$getTrad('exemple.form.date')"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="formModel.datePublication"
                        :label="$getTrad('exemple.form.date')"
                        required
                      >
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      v-model="formModel.idBibliotheque"
                      :items="bibliotheques"
                      item-text="nom"
                      item-value="id"
                      :label="$getTrad('exemple.form.biblio')"
                      required
                    ></v-select>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <small>{{ $getTrad('global.form.fieldsRequired') }}</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="reset">
              {{ $getTrad('global.form.cancel') }}
            </v-btn>
            <v-btn color="primary" :disabled="!valid" text @click="validate">
              {{ $getTrad('global.form.save') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-treeview :items="items" activatable item-key="id" open-on-click>
    </v-treeview>
  </v-container>
</template>
<script lang="ts">
import mixins from 'vue-typed-mixins'
import mixinDb from '@/core/database/dataAccess/mixinDb'
import { forEach } from 'lodash'
import Livre from '@/core/models/metiers/Livre'
export default mixins(mixinDb).extend({
  data() {
    return {
      items: [],
      search: '',
      dialog: false,
      valid: false,
      formTitle: '',
      formModel: new Livre(),
      nameRules: [
        (v: string) => !!v || (this as any).$getTrad('exemple.form.nomRequis'),
        (v: string) =>
          (v && v.length <= 30) ||
          (this as any).$getTrad('exemple.form.nomSize') +
            ' ' +
            30 +
            ' ' +
            (this as any).$getTrad('global.form.caracteres')
      ]
    }
  },
  computed: {
    headers() {
      return [
        {
          text: (this as any).$getTrad('exemple.headerTitre'),
          align: 'start',
          value: 'name'
        },
        {
          text: (this as any).$getTrad('exemple.headerDate'),
          value: 'datePublication'
        }
      ]
    }
  },
  mounted() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.items = []
      const that = this
      forEach(this.bibliotheques, function(b) {
        const livres: any = []
        forEach(b.livres, function(l) {
          const livre = {
            id: l.id,
            name: l.name
          }
          livres.push(livre)
        })
        const bibliotheque: any = {
          id: b.id,
          name: b.nom,
          children: livres
        }
        // @ts-ignore
        that.items.push(bibliotheque)
      })
    },
    reset() {
      this.formModel = new Livre()
      this.dialog = false
    },
    validate() {
      const exist = Livre.query().find(this.formModel.id)
      if (exist) {
        Livre.update(exist)
      } else {
        const newEl = this.formModel
        Livre.insert({ data: newEl })
      }
      this.initialize()
      this.reset()
    }
  }
})
</script>
<style lang="scss" scoped></style>
