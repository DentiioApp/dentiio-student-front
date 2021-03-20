<template>
  <v-container>
    <v-row>
      <v-row v-if="!projects.length">
        <v-col s="12" sm="6" md="4" v-for="index in 6" v-bind:key="index">
          <v-card elevation="0" class="mx-2 my-5">
            <v-card-text>
              <br />
              <h1 class="mb-2"><PuSkeleton /></h1>
              <p><PuSkeleton width="70%" /></p>
              <PuSkeleton height="100px" width="100%" />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-col
        s="12"
        sm="6"
        md="4"
        v-for="project in projects"
        v-bind:key="project.id"
      >
        <v-card elevation="1" class="mx-2 my-5">
          <router-link
            class="no-decoration"
            :to="{ name: 'Project', params: { id: project.id } }"
          >
            <v-card-text>
              <v-card-title class="title text--primary mb-2">
                {{ project.name }}
              </v-card-title>
              <v-card-subtitle>
                <v-icon dense small>mdi-circle-edit-outline</v-icon>
                {{ project.updatedAt | moment('from', 'now') }} par
                {{ project.updatedBy }}
              </v-card-subtitle>
              <v-chip color="primary" outlined>{{ project.companyId }}</v-chip>
              <div class="text--primary">
                {{ project.description }}
              </div>
            </v-card-text>
          </router-link>
          <v-card-actions>
            <v-btn text color="primary accent-4">
              <v-icon>mdi-plus</v-icon>Ticket
            </v-btn>
            <v-btn
              text
              color="secondary accent-1"
              :href="
                'https://id3i.teamwork.com/#/projects/' +
                  project.id +
                  '/messages'
              "
              target="_blank"
            >
              conversation
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import mixins from 'vue-typed-mixins'
import mixinDb from '@/core/database/dataAccess/mixinDb'

export default mixins(mixinDb)
</script>
<style scoped>
.title {
  font-size: 1.4em;
  font-weight: 400;
}
.no-decoration {
  text-decoration: none;
}
</style>
