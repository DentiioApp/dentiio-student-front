<template>
  <v-container fluid>
    <v-row>
      <v-card width="100%">
        <v-toolbar flat color="transparent">
          <v-toolbar-title>Total Tickets</v-toolbar-title>
        </v-toolbar>
        <v-tabs vertical>
          <v-tab>
            <span class="step">1</span>
            Emis
          </v-tab>
          <v-tab>
            <span class="step">0</span>
            Récéptionné
          </v-tab>
          <v-tab>
            <span class="step">3</span>
            En cours
          </v-tab>
          <v-tab>
            <span class="step">2</span>
            A valider
          </v-tab>
          <v-tab>
            <span class="step">9</span>
            Terminé
          </v-tab>

          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-data-table
                  :loading="false"
                  :loading-text="$getTrad('global.loadingDatatable')"
                  :headers="headers"
                  :items="tasks"
                  :items-per-page="5"
                  item-key="id"
                  :footer-props="{
                    firstIcon: 'mdi-arrow-collapse-left',
                    lastIcon: 'mdi-arrow-collapse-right',
                    prevIcon: 'mdi-minus',
                    nextIcon: 'mdi-plus'
                  }"
                >
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <p>
                  Morbi nec metus. Suspendisse faucibus, nunc et pellentesque
                  egestas, lacus ante convallis tellus, vitae iaculis lacus elit
                  id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum
                  aliquam libero, non adipiscing dolor urna a orci. Curabitur
                  ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Nunc sed turpis.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <p>
                  Fusce a quam. Phasellus nec sem in justo pellentesque
                  facilisis. Nam eget dui. Proin viverra, ligula sit amet
                  ultrices semper, ligula arcu tristique sapien, a accumsan nisi
                  mauris ac eros. In dui magna, posuere eget, vestibulum et,
                  tempor auctor, justo.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import mixins from 'vue-typed-mixins'
import mixinDb from '@/core/database/dataAccess/mixinDb'

export default mixins(mixinDb).extend({
  computed: {
    headers() {
      return [
        {
          text: 'Titre',
          align: 'start',
          value: 'content'
        },
        {
          text: 'Catégorie',
          value: 'todoListName'
        },
        {
          text: 'Créé par',
          value: 'creatorFirstname'
        }
      ]
    }
  }
})
</script>
<style scoped>
.v-tab {
  justify-content: left;
}
span.step {
  background: #de7036;
  border-radius: 0.8em;
  -moz-border-radius: 0.8em;
  -webkit-border-radius: 0.8em;
  color: #ffffff;
  display: inline-block;
  font-weight: bold;
  line-height: 1.6em;
  margin-right: 5px;
  text-align: center;
  width: 1.6em;
}
</style>
