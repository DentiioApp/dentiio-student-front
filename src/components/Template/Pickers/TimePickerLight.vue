<template>
  <v-card>
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
        <v-card shaped outlined min-width="300px" max-width="300px">
          <v-card-title style="color:white">{{ libelleStart }}</v-card-title>
          <v-row align="center">
            <TimePicker
              ref="timePickerInputStart"
              :minute-interval="15"
              hide-clear-button
              v-model="pickerStart"
            ></TimePicker>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12" md="6" lg="5" xl="4">
        <v-card
          :disabled="disabledEnd"
          shaped
          outlined
          min-width="300px"
          max-width="300px"
        >
          <v-card-title style="color:white">{{ libelleEnd }}</v-card-title>
          <v-row>
            <TimePicker
              ref="timePickerInputEnd"
              :minute-interval="15"
              @change="pickerEndChanged"
              hide-clear-button
              v-model="pickerEnd"
            ></TimePicker>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import TimePicker from 'vue2-timepicker'
export default {
  props: {
    libelleStart: {
      type: String,
      default: 'Ouverture'
    },
    libelleEnd: {
      type: String,
      default: 'Fermeture'
    }
  },
  components: {
    TimePicker
  },
  data() {
    return {
      pickerStart: '',
      pickerEnd: '',
      disabled: true
    }
  },
  methods: {
    allowedStep: m => m % 15 === 0,
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
