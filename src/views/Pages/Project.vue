<template>
  <v-container fluid>
    <Loading v-if="!$store" />
    <v-row v-else>
      <v-col cols="12">
        <div class="d-flex mt-7">
          <h1>
            <v-btn icon color="primary accent-4" @click="$router.go(-1)">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            Project Name
          </h1>
          <v-spacer />
          <div class="fl-right">
            <v-btn color="primary" dark>
              <v-icon left>mdi-plus</v-icon>Ticket
            </v-btn>
            <v-btn text color="secondary" href="#" target="_blank">
              conversation
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col s="12" md="8">
        <TasksTab />
      </v-col>
      <v-col s="12" md="4">
        <ActivityCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import TasksTab from '../../components/Project/TasksTab.vue'
import ActivityCard from '../../components/Project/ActivityCard.vue'
import mixins from 'vue-typed-mixins'
import mixinDb from '@/core/database/dataAccess/mixinDb'
import mixinDataTest from '@/core/database/dataTest/mixinDataTest'

export default mixins(mixinDb, mixinDataTest).extend({
  components: {
    TasksTab,
    ActivityCard
  },
  beforeMount() {
    this.initBibliotheque()
    this.apiGetProject()
    this.apiGetTasksByProject(+this.$route.params.id)
  }
})
</script>

<style lang="scss" scoped></style>
