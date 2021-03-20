<template>
  <v-container fluid>
    <Loading v-if="!$store" />
    <v-row v-else>
      <ProjectsList />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import ProjectsList from '../../components/Home/ProjectsList.vue'
import mixins from 'vue-typed-mixins'
import mixinDb from '@/core/database/dataAccess/mixinDb'
import mixinDataTest from '@/core/database/dataTest/mixinDataTest'

export default mixins(mixinDb, mixinDataTest).extend({
  components: {
    ProjectsList
  },
  beforeMount() {
    this.initBibliotheque()
    this.apiGetProfile()
    this.apiGetProject()
  }
})
</script>

<style lang="scss" scoped></style>
