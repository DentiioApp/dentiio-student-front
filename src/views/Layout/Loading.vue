<template>
  <div class="vld-parent">
    <loading
      color="#DE7036"
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="fullPage"
      :height="150"
      :width="150"
      :opacity="0.8"
      loader="spinner"
    ></loading>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// Import component
import Loading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  data() {
    return {
      fullPage: true
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading'
    })
  },
  components: {
    Loading
  }
}
</script>
