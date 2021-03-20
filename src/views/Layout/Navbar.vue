<style scoped></style>
<template>
  <div>
    <!-- <v-navigation-drawer
      dark
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              :disabled="child.disabled"
              v-for="(child, i) in item.children"
              :key="i"
              :to="child.to"
              link
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ child.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            :disabled="item.disabled"
            v-else
            :key="item.text"
            :to="item.to"
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    -->
    <v-app-bar color="themeCHR" :clipped-left="$vuetify.breakpoint.lgAndUp" app>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-btn
        color="themeCHR"
        dark
        class="ml-2 mr-2"
        icon
        :to="{ name: 'Home' }"
      >
        <v-img
          :to="{ name: 'Home' }"
          min-width="50px"
          max-width="50px"
          src="@/assets/img/common/logo-header.png"
        ></v-img>
      </v-btn>
      <v-toolbar-title class="ml-0 pl-4">
        <span class="hidden-sm-and-down">
          <!-- {{ $getTrad('application.nom') }} -->
          <template v-if="isDev"> [DEV]</template>
        </span>
      </v-toolbar-title>
      <v-spacer />
      <v-tooltip v-if="isDev" color="themeCHR" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" class="ml-3" icon @click="clearCache">
            <v-icon>mdi-eraser</v-icon>
          </v-btn>
        </template>
        <span>({{ cacheSize }}) - Vider le store et le localstorage</span>
      </v-tooltip>
      <v-tooltip color="themeCHR" bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon x-large :to="{ name: 'Home' }">
            <v-icon color="primary" medium>mdi-home-outline</v-icon>
          </v-btn>
        </template>
      </v-tooltip>
      <v-menu bottom min-width="200px" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-icon color="primary" medium>mdi-account-outline</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-btn depressed :to="{ name: 'Profil' }" text>
                <v-icon class="mr-5">mdi-pencil</v-icon>
                {{ $getTrad('user.accesProfil') }}
              </v-btn>
              <v-divider class="my-3" />
              <v-btn depressed text v-on:click="toggleDarkMode">
                <v-icon class="mr-5">mdi-theme-light-dark</v-icon>
                <span v-if="$vuetify.theme.dark">
                  {{ $getTrad('params.themeClair') }}
                </span>
                <span v-else>
                  {{ $getTrad('params.themeSombre') }}
                </span>
              </v-btn>
              <v-divider v-if="getActiveAuth" class="my-3" />
              <v-btn v-if="getActiveAuth" depressed @click="logout" text>
                <v-icon class="mr-5">mdi-logout</v-icon>
                {{ $getTrad('user.deconnexion') }}
              </v-btn>
              <v-divider class="my-3" />
              <LanguagePicker
                :color="$vuetify.theme.dark ? 'black' : 'white'"
              />
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script lang="ts">
import { UserInformationModel } from '../../core/models/viewModels/userInformationModel'
import router from '@/router'
import store from '@/store'
import listRoutes from '../../router/listRoutes'
import storeActions from '../../store/actions/storeActions'

import mixins from 'vue-typed-mixins'
import mixinDb from '@/core/database/dataAccess/mixinDb'

import LanguagePicker from '@/components/Flag/LanguagePicker.vue'
export default mixins(mixinDb).extend({
  props: {
    source: String
  },
  components: {
    LanguagePicker
  },
  data: () => ({
    cacheSize: '',
    dialog: false,
    drawer: null
  }),
  mounted() {
    this.updateCacheSize()
    const theme = localStorage.getItem('dark_theme')
    if (theme) {
      if (theme == 'true') {
        this.$vuetify.theme.dark = true
      } else {
        this.$vuetify.theme.dark = false
      }
    }
  },
  methods: {
    logout() {
      store.dispatch(storeActions.auth.LOGOUT).then(() => {
        router.push({ name: listRoutes.LOGIN })
      })
    },

    clearCache() {
      localStorage.clear()
      store.dispatch('entities/deleteAll')
      this.updateCacheSize()
    },
    updateCacheSize() {
      let _lsTotal = 0,
        _xLen,
        _x
      for (_x in localStorage) {
        if (!Object.prototype.hasOwnProperty.call(localStorage, _x)) {
          continue
        }
        _xLen = (localStorage[_x].length + _x.length) * 2
        _lsTotal += _xLen
      }
      this.cacheSize = 'Total = ' + (_lsTotal / 1024).toFixed(2) + ' KB'
    },
    toggleDarkMode: function() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('dark_theme', this.$vuetify.theme.dark.toString())
    }
  },
  computed: {
    currentUser(): UserInformationModel {
      return new UserInformationModel()
    }
    /*     items(): any[] {
      return [
        {
          icon: 'mdi-format-list-bulleted-square',
          text: (this as any).$getTrad('menu.librairie'),
          to: listRoutes.LIBRARY
        },
        {
          icon: 'mdi-format-list-bulleted-square',
          text: (this as any).$getTrad('menu.exemples'),
          to: listRoutes.EXAMPLES
        }
      ]
    } */
  },
  watch: {
    livres() {
      this.updateCacheSize()
    }
  }
})
</script>
