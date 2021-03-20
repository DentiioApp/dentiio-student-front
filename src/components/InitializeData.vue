<template>
  <v-container>
    <div class="text-center">
      <v-card
        class="mx-auto card--initialize"
        color="primary"
        dark
        max-width="600"
      >
        <v-card-text class="headline font-weight-bold">
          {{ $getTrad('init.welcome') }}
          <br />
          {{ $getTrad('init.wait') }}
        </v-card-text>
      </v-card>
      <v-overlay :value="true" z-index="150"> </v-overlay>
    </div>
  </v-container>
</template>
<script>
import mixins from 'vue-typed-mixins'
import mixinDb from '@/core/database/dataAccess/mixinDb'
//Permet l'initialisation des données de test
import mixinDataTest from '@/core/database/dataTest/mixinDataTest'
export default mixins(mixinDb, mixinDataTest).extend({
  data() {
    return { dialog: true }
  },
  mounted() {
    setTimeout(() => {
      // setTimeout to put this into event queue
      // executed after render
      this.initDataTest()
    }, 0)
  }
})
</script>
<style lang="scss" scoped>
.card--initialize {
  z-index: 151;
}
</style>
