<template>
  <v-container class="grey lighten-5 container--month">
    <v-row no-gutters>
      <v-col
        class="timeline"
        @click="clickEvent(month)"
        v-for="month in months"
        :key="month.id"
        :style="{ minHeight: timelineHeight, maxHeight: timelineHeight }"
      >
        <MonthTimeLineRow
          v-for="saison in calendarSaisons"
          :key="saison.id"
          :saison="saison"
          :month="month"
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col v-for="month in months" :key="month.id">
        <v-btn
          class="btn--month"
          width="100%"
          @click="clickEvent(month)"
          color="themeCHR"
          small
          dark
          >{{ month.firstCapitalLetter() }}</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { monthsOfYearData } from '../../core/class/metier/Scheduler/Data/monthsOfYearData'
import { SaisonModel } from '../../core/class/metier/Scheduler/SaisonModel'
import MonthTimeLineRow from './MonthTimeLineRow'
export default {
  components: {
    MonthTimeLineRow
  },
  props: {
    calendarSaisons: {
      type: [],
      default: []
    }
  },
  mounted() {
    this.initialize()
  },
  data() {
    return {
      months: [],
      timelineHeight: 0
    }
  },
  methods: {
    initialize() {
      this.months = monthsOfYearData
      const r = this.calendarSaisons.length * 5
      this.timelineHeight = this.calendarSaisons.length * 5
    },
    clickEvent(month) {
      this.$emit('clickEvent', month)
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline {
  border: 1px solid #e0e0e0;
  // height: 50px;
  cursor: pointer;
}
.btn--month {
  border-radius: 0px;
  border-right: 1px solid white !important;
}
.container--month {
  padding: 0px !important;
}
</style>
