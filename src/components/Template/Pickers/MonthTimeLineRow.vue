<template>
  <v-row
    :style="{ backgroundColor: backgroundColor }"
    class="row--month"
  ></v-row>
</template>

<script>
import colors from 'vuetify/es5/util/colors'
export default {
  props: {
    saison: {
      type: [],
      default: []
    },
    month: {
      type: [],
      default: []
    }
  },
  data() {
    return { backgroundColor: '#fafafa' }
  },
  mounted() {
    this.initialize()
  },
  methods: {
    initialize() {
      const saisonStart = this.saison.start.getMonth() + 1
      const saisonEnd = this.saison.end.getMonth() + 1
      const monthId = this.month.id
      if (monthId <= saisonEnd && monthId >= saisonStart) {
        this.backgroundColor = this.saison.color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.row--month {
  min-height: 5px;
  max-height: 5px;
  margin-right: 0px !important;
  margin-left: 0px !important;
}
</style>
