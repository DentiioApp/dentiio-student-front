<template>
  <v-card>
    <v-tabs
      v-model="tab"
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      dark
      background-color="themeCHR"
      show-arrows
    >
      <v-tabs-slider color="primary"></v-tabs-slider>
      <v-tab :href="'#tab-1'">Buttons</v-tab>
      <v-tab :href="'#tab-2'">Item 2</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item :value="'tab-1'">
        <v-card flat>
          <Buttons></Buttons>
        </v-card>
      </v-tab-item>
      <v-tab-item :value="'tab-2'">
        <v-card flat>
          <h1># A implémenter</h1>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
import Buttons from '../Buttons/Buttons'
export default {
  components: {
    Buttons
  },
  data() {
    return {
      tab: null,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>
