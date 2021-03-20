<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-spacer />
      <h2 class="open">Ouverture</h2>
      <v-switch class="switchTime"></v-switch>
      <h2 class="closed">Fermeture</h2>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card outlined elevation="5">
          <DatePicker id="date"></DatePicker>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card outlined elevation="5">
          <TimePicker id="time"></TimePicker>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DatePicker from '../../components/Pickers/DatePicker'
import TimePicker from '../../components/Pickers/TimePicker'
export default {
  components: { DatePicker, TimePicker }
}
</script>

<style>
.switchTime {
  margin-left: 25px;
  margin-right: 25px;
}
#time .v-picker__title {
  display: none !important;
}
</style>
