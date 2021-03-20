<template>
  <v-container class="fill-height" fluid>
    <span class="background" />
    <v-row justify="center" align="center">
      <v-col cols="12" md="12">
        <v-row>
          <v-col cols="12" md="12">
            <v-card-text>
              <v-row justify="center">
                <v-col cols="12">
                  <h1 color="primary" class="text-center display-6"></h1>
                </v-col>
                <v-col>
                  <div class="text-center mt-3" :style="displayBtn">
                    <v-btn color="primary" @click="goToLoginTeamwork()">
                      Réessayer
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import common from '../../core/global/common'
import mixins from 'vue-typed-mixins'
import mixinAuth from '@/core/database/dataAccess/mixinAuth'
import mixinDetectMobile from '@/core/mixins/mixinDetectMobile'

export default mixins(mixinAuth, mixinDetectMobile).extend({
  data() {
    return {
      //to use
      displayBtn: 'display: none'
    }
  },
  mounted() {
    this.loginWithCode(this.$route.query.code)
  },
  methods: {
    goToLoginTeamwork() {
      window.location.href =
        'https://www.teamwork.com/launchpad/login?redirect_uri=http://localhost:8081/authentification&client_id=9c64033cbdd25c0d39d6ca97b6d493b1c4ac3cce'
    }
  },
  beforeMount() {
    common.log.devLog('[DEV] - RESET CACHE + STORE')
    this.clearCache()
  }
})
</script>

<style scoped>
.spinner {
  display: flex;
  justify-content: center;
}
.background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #a9a9a908 !important;
}
</style>
