<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <Navbar
      v-if="(getIsAuthenticated || !getActiveAuth) && getDataInitialized"
    ></Navbar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer
      v-if="(getIsAuthenticated || !getActiveAuth) && getDataInitialized"
    ></Footer>
    <notifications group="foo" />
    <Loading></Loading>
  </v-app>
</template>

<script lang="ts">
import Navbar from '@/views/Layout/Navbar.vue'
import Footer from '@/views/Layout/Footer.vue'
import Loading from '@/views/Layout/Loading.vue'
import mixins from 'vue-typed-mixins'
import mixinDb from '@/core/database/dataAccess/mixinDb'
import LanguagePicker from './components/Flag/LanguagePicker.vue'
import { isEmpty } from 'lodash'

export default mixins(mixinDb).extend({
  components: {
    Navbar,
    Footer,
    Loading
  },
  mounted() {
    this.initialize()
  },
  methods: {
    initialize(): void {
      //méthode bizarre, pourrie et détournée pour fixer la langue par défaut
      if (isEmpty(this.getLanguage)) {
        //@ts-ignore
        LanguagePicker.methods.setDefaultLanguage(this.$store)
      }
      this.$vuetify.lang.current = this.getLanguage.languageCode
    }
  },
  computed: {
    theme(): string {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    }
  },
  watch: {
    getLanguage(newValue) {
      if (newValue && newValue != '') {
        this.$vuetify.lang.current = newValue.languageCode
      }
    }
  }
})
</script>

<style scoped></style>
