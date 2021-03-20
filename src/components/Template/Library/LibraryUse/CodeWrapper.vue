<template>
  <div>
    <v-btn @click="show = !show" color="infos" class="mr-1" fab x-small dark>
      <v-icon>mdi-eye</v-icon>
    </v-btn>
    <v-btn @click="copy" color="infos" fab x-small dark>
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <code v-show="show" class="ml-2">{{ code }}</code>
  </div>
</template>

<script>
import common from '../../../../core/global/common'
export default {
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    copy() {
      const tmp = document.createElement('input')
      document.body.appendChild(tmp)
      tmp.value = this.code
      tmp.select()
      document.execCommand('copy', false)
      tmp.remove()
      common.toast.success()
    }
  }
}
</script>

<style lang="scss" scoped></style>
