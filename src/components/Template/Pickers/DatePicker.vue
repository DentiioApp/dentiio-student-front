<template>
  <v-card>
    <v-card-title>Définir les dates de la période</v-card-title>
    <v-row align="center">
      <v-col cols="12" sm="12" md="12" lg="6" xl="6">
        <v-card
          :color="cardTheme"
          shaped
          outlined
          min-width="300px"
          max-width="300px"
        >
          <v-card-title
            class="dateTitre"
            style="color:white; padding-bottom: 0px !important"
            >Début</v-card-title
          >
          <v-date-picker
            @change="dateStartChanged"
            ref="DatePickerStart"
            :header-color="cardTheme"
            showCurrent="false,"
            reactive
            first-day-of-week="1"
            full-width
            locale="fr"
            v-model="dateStart"
          ></v-date-picker>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="6" xl="6">
        <v-card
          :color="cardTheme"
          shaped
          outlined
          min-width="300px"
          max-width="300px"
        >
          <v-card-title style="color:white; padding-bottom: 0px !important"
            >Fin</v-card-title
          >
          <v-date-picker
            @change="dateEndChanged"
            ref="DatePickerEnd"
            :min="this.dateStart"
            :header-color="cardTheme"
            showCurrent="false,"
            reactive
            first-day-of-week="1"
            full-width
            locale="fr"
            v-model="dateEnd"
          ></v-date-picker>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      cardTheme: 'themeCHR',
      dateStart: new Date().toISOString().substr(0, 10),
      dateEnd: new Date().toISOString().substr(0, 10)
    }
  },
  methods: {
    dateStartChanged() {
      this.$emit('dateStartChanged', this.dateStart)
      if (this.dateStart > this.dateEnd) {
        this.dateEnd = this.dateStart
      }
    },
    dateEndChanged() {
      this.$emit('dateEndChanged', this.dateEnd)
      if (this.dateEnd < this.dateStart) {
        this.dateStart = this.dateEnd
      }
    },
    clearPickers() {
      this.dateStart = ''
      this.dateEnd = ''
    }
  }
}
</script>

<style></style>
