<template>
  <v-card class="mx-auto ml-1 mr-1 mb-1">
    <v-card-title>
      {{ task.name }}
      <v-row align="center" justify="end">
        <v-icon color="error" class="mr-1">mdi-clock-alert</v-icon>
        <span class="subheading mr-2">5</span>
      </v-row>
    </v-card-title>
    <v-card-subtitle
      >{{ task.time }} / {{ task.couvert }} couvert(s)</v-card-subtitle
    >

    <div class="text-center">
      <v-btn class="mx-2" fab dark color="teal" @click="show = !show">
        <v-icon>{{ show ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon>
      </v-btn>
      <v-btn class="mx-2" fab dark color="error" @click="decrementStatus(task)">
        <v-icon dark>mdi-arrow-left-thick</v-icon>
      </v-btn>
      <v-btn
        class="mx-2"
        fab
        dark
        color="success"
        @click="incrementStatus(task)"
      >
        <v-icon dark>mdi-arrow-right-thick</v-icon>
      </v-btn>
    </div>

    <v-card-actions></v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-list two-line subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>3 Menus 24€</v-list-item-title>
              <v-list-item-subtitle>1 Soupe</v-list-item-subtitle>
              <v-list-item-subtitle>2 Feuilletés</v-list-item-subtitle>
              <v-divider></v-divider>
              <v-list-item-subtitle
                >1 Magret R, Frites, Salade</v-list-item-subtitle
              >
              <v-list-item-subtitle>1 Dorade, LM + Riz</v-list-item-subtitle>
              <v-list-item-subtitle
                >1 Pavé saumon, LM + Frites</v-list-item-subtitle
              >
              <v-divider></v-divider>
              <v-list-item-subtitle>3 crèmes brulées</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    task: Object
  },
  data: () => ({
    show: false
  }),
  methods: {
    incrementStatus: function(task) {
      if (1 <= task.status && task.status <= 2) {
        task.status++
      }
    },
    decrementStatus: function(task) {
      if (2 <= task.status && task.status <= 3) {
        task.status--
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
