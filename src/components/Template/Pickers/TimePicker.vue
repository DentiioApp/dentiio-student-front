<template>
  <v-card>
    <v-card-title>Définir les horaires de service</v-card-title>
    <v-card-subtitle>
      <div class="mb-1">
        <v-btn
          @click="selectHour('12:00', '14:30')"
          class="mr-1"
          x-small
          color="themeCHR"
          dark
          >12h00 à 14h30</v-btn
        >
        <v-btn
          @click="selectHour('19:00', '22:00')"
          class="mr-1"
          x-small
          color="themeCHR"
          dark
          >19h00 à 22h00</v-btn
        >
      </div>
    </v-card-subtitle>
    <v-row align="center">
      <v-col cols="12" sm="12" md="12" lg="6" xl="6">
        <v-card
          :color="cardTheme"
          shaped
          outlined
          min-width="300px"
          max-width="300px"
        >
          <v-card-title style="color:white">Ouverture</v-card-title>
          <v-row align="center">
            <TimePicker
              ref="timePickerInputStart"
              :minute-interval="15"
              @change="pickerStartChanged"
              hide-clear-button
              v-model="pickerStart"
            ></TimePicker>
          </v-row>
          <v-row justify="center" align="center">
            <p style="margin-top:10px;color:white">Heures</p>
            <v-switch
              style="margin-left:15px;margin-right:15px"
              v-model="changeTimeStart"
              @change="changeFormatStart"
            ></v-switch>
            <p style="margin-top:10px;color:white">Minutes</p>
          </v-row>
          <v-time-picker
            id="time"
            full-width
            v-model="pickerStart"
            :allowed-minutes="allowedStep"
            format="24hr"
            ref="timePickerStart"
          ></v-time-picker>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12" md="6" lg="5" xl="4">
        <v-card
          :disabled="disabledEnd"
          :color="cardTheme"
          shaped
          outlined
          min-width="300px"
          max-width="300px"
        >
          <v-card-title style="color:white">Fermeture</v-card-title>
          <v-row>
            <TimePicker
              ref="timePickerInputEnd"
              :minute-interval="15"
              @change="pickerEndChanged"
              hide-clear-button
              v-model="pickerEnd"
            ></TimePicker>
          </v-row>
          <v-row justify="center" align="center">
            <p style="margin-top:10px; color:white">Heures</p>
            <v-switch
              style="margin-left:15px;margin-right:15px"
              v-model="changeTimeEnd"
              @change="changeFormatEnd"
            ></v-switch>
            <p style="margin-top:10px; color:white">Minutes</p>
          </v-row>
          <v-time-picker
            id="time"
            full-width
            :min="this.pickerStart"
            v-model="pickerEnd"
            :allowed-minutes="allowedStep"
            format="24hr"
            ref="timePickerEnd"
          ></v-time-picker>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import TimePicker from 'vue2-timepicker'
export default {
  components: {
    TimePicker
  },
  mounted() {
    this.$refs.timePickerStart.$on('click:hour', this.clickHourStart)
    this.$refs.timePickerEnd.$on('click:hour', this.clickHourEnd)
  },
  data() {
    return {
      cardTheme: 'themeCHR',
      changeTimeStart: false,
      changeTimeEnd: false,
      pickerStart: '',
      pickerEnd: '',
      disabled: true
    }
  },
  methods: {
    clickHourStart() {
      this.changeTimeStart = !this.changeTimeStart
    },
    clickHourEnd() {
      this.changeTimeEnd = !this.changeTimeEnd
    },

    allowedStep: m => m % 15 === 0,

    changeFormatStart: function() {
      const s = this.changeTimeStart ? 2 : 1
      this.$refs.timePickerStart.$refs.title.$emit('update:selecting', s)
    },
    changeFormatEnd: function() {
      const s = this.changeTimeEnd ? 2 : 1
      this.$refs.timePickerEnd.$refs.title.$emit('update:selecting', s)
    },
    pickerStartChanged() {
      this.$emit('pickerStartChanged', this.pickerStart)
    },
    pickerEndChanged() {
      this.$emit('pickerEndChanged', this.pickerEnd)
    },
    clearPickers() {
      //Obligation de clear les 2 pickers (Vuetify et vue2timepicker)
      // vue2timepicker : le reset du model ne suffit pas
      this.pickerStart = ''
      this.pickerEnd = ''
      this.$refs.timePickerInputStart.hour = ''
      this.$refs.timePickerInputStart.minute = ''
      this.$refs.timePickerInputEnd.hour = ''
      this.$refs.timePickerInputEnd.minute = ''
      this.$refs.timePickerStart.$refs.title.$emit('update:selecting', 2)
      this.$refs.timePickerEnd.$refs.title.$emit('update:selecting', 1)
    },
    selectHour(start, end) {
      this.pickerStart = start
      this.pickerEnd = end
    }
  },
  computed: {
    disabledEnd() {
      return (
        !this.pickerStart ||
        this.pickerStart == '' ||
        this.$refs.timePickerInputStart.hour == '' ||
        this.$refs.timePickerInputStart.minute == ''
      )
    }
  }
}
</script>
<style>
@import '~vue2-timepicker/dist/VueTimepicker.css';
#time .v-picker__title {
  display: none !important;
}
.v-card {
  box-shadow: none !important;
}
.vue__time-picker input.display-time {
  width: 285px;
  height: 60px;
  margin-left: 18px;
  color: white;
}
.vue__time-picker .dropdown {
  width: 285px;
  margin-left: 18px;
  margin-top: 20px;
}
.vue__time-picker .dropdown .select-list {
  width: 285px;
}
</style>
