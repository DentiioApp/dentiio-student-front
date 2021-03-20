<template>
  <v-container fluid>
    <v-row>
      <v-col xs="12">
        <v-banner
          dark
          color="themeCHR"
          elevation="1"
          icon="mdi-pencil"
          single-line
          >{{ $getTrad('profil.titre') }}
        </v-banner>
        <v-progress-linear dark color="primary" v-model="build" height="50">
          <strong
            >{{ $getTrad('profil.construction') }} :
            {{ Math.ceil(build) }}%</strong
          >
        </v-progress-linear>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import mixinDb from '@/core/database/dataAccess/mixinDb'

export default mixins(mixinDb).extend({
  data() {
    return {
      build: 20
    }
  }
})
</script>

<style lang="scss" scoped></style>
