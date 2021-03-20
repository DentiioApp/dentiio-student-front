<template>
  <v-select
    @change="selectedTimeZoneChanged"
    v-model="selectedTimeZone"
    :items="orderedTimeZones"
    item-text="displayName"
    item-value="displayName"
    label="Fuseaux Horaire"
  ></v-select>
</template>

<script>
import { timeZoneData } from './Data/timeZoneData'
import _ from 'lodash'
export default {
  props: {
    establishmentTimeZone: String
  },
  data: () => ({
    timeZones: [],
    selectedTimeZone: {}
  }),
  mounted() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.timeZones = timeZoneData
    },
    selectedTimeZoneChanged() {
      this.$emit('timeZoneChanged', this.selectedTimeZone)
    }
  },
  computed: {
    orderedTimeZones: function() {
      return _.orderBy(this.timeZones, 'value')
    }
  },
  watch: {
    establishmentTimeZone: function() {
      const s = _.find(this.timeZones, [
        'displayName',
        this.establishmentTimeZone
      ])
      if (s) {
        this.selectedTimeZone = s
      } else {
        this.selectedTimeZone = _.head(timeZoneData)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
