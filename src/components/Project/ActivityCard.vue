<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="90%">
        <v-app-bar flat color="rgba(0, 0, 0, 0)">
          <v-toolbar-title class="title pl-0">
            Activité
          </v-toolbar-title>
        </v-app-bar>
        <v-card-text>
          <v-timeline align-top dense>
            <v-timeline-item color="blue" small>
              <v-row>
                <v-col>
                  <strong>Ticket émis</strong>
                  <div class="caption">Refonte page produits</div>
                </v-col>
              </v-row>
            </v-timeline-item>
            <v-timeline-item color="green" small>
              <v-row>
                <v-col>
                  <strong>Ticket terminée</strong>
                  <div class="caption">Bug logo</div>
                </v-col>
              </v-row>
            </v-timeline-item>
            <v-timeline-item color="pink" small>
              <v-row>
                <v-col>
                  <strong>Ticket à valider</strong>
                  <div class="caption">Bug logo</div>
                </v-col>
              </v-row>
            </v-timeline-item>
            <v-timeline-item color="pink" small>
              <v-row>
                <v-col>
                  <strong>Ticket à valider</strong>
                  <div class="caption">Bug Mobile</div>
                </v-col>
              </v-row>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import mixins from 'vue-typed-mixins'
import mixinDb from '@/core/database/dataAccess/mixinDb'

export default mixins(mixinDb)
</script>
<style scoped></style>
