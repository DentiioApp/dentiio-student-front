<template>
  <v-container class="fill-height" fluid>
    <span class="background" />
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="8">
        <v-card elevation="12">
          <LanguagePicker fab />
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="8">
                  <v-card-text>
                    <v-row justify="center">
                      <v-col cols="12">
                        <h1
                          v-if="!isMobileDevice()"
                          color="primary"
                          class="text-center display-1"
                        >
                          {{ $getTrad('user.connexion.titre') }}
                        </h1>
                        <h1 v-else color="primary" class="text-center">
                          {{ $getTrad('user.connexion.titre') }}
                        </h1>
                      </v-col>
                      <v-col>
                        <div class="text-center">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-google-plus</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-linkedin</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-youtube</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-apple</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                    <h4 class="text-center mt-4">
                      {{ $getTrad('user.connexion.sousTitre') }}
                    </h4>
                    <v-form
                      ref="formLogin"
                      v-model="valid"
                      @keyup.native.enter="valid && login(email, password)"
                    >
                      <v-text-field
                        autofocus
                        prepend-icon="mdi-at"
                        name="email"
                        :label="$getTrad('user.connexion.email')"
                        type="email"
                        v-model="email"
                        required
                        data-cy="signinEmailField"
                      ></v-text-field>
                      <v-text-field
                        prepend-icon="mdi-lock"
                        name="password"
                        :label="$getTrad('user.mdp.mdp')"
                        type="password"
                        data-cy="signinPasswordField"
                        v-model="password"
                        required
                      ></v-text-field>
                    </v-form>
                    <h3 class="text-center mt-3">
                      {{ $getTrad('user.connexion.mdpOublie') }}&nbsp;?
                    </h3>
                  </v-card-text>
                  <div class="text-center mt-3">
                    <v-btn
                      dark
                      rounded
                      color="primary"
                      @click="login(email, password)"
                      data-cy="signinSubmitBtn"
                    >
                      {{ $getTrad('user.connexion.go') }}
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="col--right accent-3">
                  <v-card-text dark class="white--text mt-5">
                    <v-row align="center" justify="space-around">
                      <v-col cols="12">
                        <h1 class="text-center display-1">
                          {{ $getTrad('user.connexion.rightTitle') }}
                        </h1>
                        <h5 class="text-center">
                          {{ $getTrad('user.connexion.rightSubtitle') }}
                        </h5>
                      </v-col>
                      <v-img
                        max-width="200px"
                        src="@/assets/img/common/logo.png"
                      />
                    </v-row>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn dark rounded outlined @click="step++">
                      {{ $getTrad('user.connexion.goRegister') }}
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row class="fill-height">
                <v-col cols="12" md="4" class="col--right accent-3">
                  <v-card-text class="white--text mt-5">
                    <v-row align="center" justify="space-around">
                      <v-col cols="12">
                        <h1 class="text-center display-1">
                          {{ $getTrad('user.connexion.rightTitle') }}
                        </h1>
                        <h5 class="text-center">
                          {{ $getTrad('user.connexion.rightSubtitle') }}
                        </h5>
                      </v-col>
                      <v-img
                        max-width="200px"
                        src="@/assets/img/common/logo.png"
                      />
                    </v-row>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn dark rounded outlined @click="step--">
                      {{ $getTrad('user.creation.alreadyCompte') }}
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-text>
                    <h1
                      v-if="!isMobileDevice()"
                      color="primary"
                      class="text-center display-1"
                    >
                      {{ $getTrad('user.creation.titre') }}
                    </h1>
                    <h1 v-else color="primary" class="text-center">
                      {{ $getTrad('user.creation.titre') }}
                    </h1>
                    <div class="text-center mt-4">
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>mdi-facebook</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>mdi-google-plus</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>mdi-linkedin</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>mdi-youtube</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>mdi-apple</v-icon>
                      </v-btn>
                    </div>
                    <h4 class="text-center mt-4">
                      {{ $getTrad('user.connexion.sousTitre') }}
                    </h4>
                    <v-form v-model="valid">
                      <v-text-field
                        prepend-icon="mdi-account"
                        dense
                        v-model="userName"
                        :rules="[rules.required, rules.counter]"
                        :label="$getTrad('user.creation.username')"
                        counter
                        maxlength="20"
                      />
                      <v-text-field
                        prepend-icon="mdi-email"
                        dense
                        v-model="email"
                        :rules="[rules.required, rules.email]"
                        :label="$getTrad('user.creation.email')"
                      />
                      <v-text-field
                        dense
                        prepend-icon="mdi-lock"
                        v-model="password"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="showPassword ? 'text' : 'password'"
                        name="input-10-1"
                        :label="$getTrad('user.mdp.mdp')"
                        counter
                        @click:append="showPassword = !showPassword"
                      />
                      <v-text-field
                        dense
                        v-model="passwordConfirm"
                        prepend-icon="mdi-lock"
                        :append-icon="
                          showConfirmation ? 'mdi-eye' : 'mdi-eye-off'
                        "
                        :rules="[rules.required, rules.min, matchPassword]"
                        :type="showConfirmation ? 'text' : 'password'"
                        name="input-10-1"
                        :label="$getTrad('user.mdp.confirmMdp')"
                        counter
                        @click:append="showConfirmation = !showConfirmation"
                      />
                      <v-text-field
                        prepend-icon="mdi-phone"
                        dense
                        v-model="telephone"
                        :rules="[rules.required, rules.counter]"
                        :label="$getTrad('user.creation.telephone')"
                        counter
                        maxlength="20"
                      />
                    </v-form>
                  </v-card-text>
                  <div class="text-center mt-5">
                    <v-btn
                      rounded
                      color="primary accent-3"
                      :disabled="!valid"
                      @click="validForm"
                    >
                      {{ $getTrad('global.form.valider') }}
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import common from '../../core/global/common'
import LanguagePicker from '@/components/Flag/LanguagePicker.vue'
import mixins from 'vue-typed-mixins'
import mixinAuth from '@/core/database/dataAccess/mixinAuth'
import mixinDetectMobile from '@/core/mixins/mixinDetectMobile'

export default mixins(mixinAuth, mixinDetectMobile).extend({
  components: {
    LanguagePicker
  },
  data() {
    return {
      step: 1,
      showPassword: false,
      showConfirmation: false,
      valid: false,
      userName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      telephone: '',
      rules: {
        required: (value: string) =>
          !!value || (this as any).$getTrad('global.form.thisFieldRequired'),
        counter: (value: string) =>
          value.length <= 20 ||
          (this as any).$getTrad('global.form.max') +
            ' ' +
            20 +
            ' ' +
            (this as any).$getTrad('global.form.caracteres'),
        min: (v: string) =>
          v.length >= 4 ||
          (this as any).$getTrad('user.mdp.mdpSize') +
            ' ' +
            4 +
            ' ' +
            (this as any).$getTrad('global.form.caracteres'),
        email: (value: string) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return (
            pattern.test(value) ||
            (this as any).$getTrad('user.creation.mailInvalide')
          )
        }
      }
    }
  },
  computed: {
    matchPassword(): any {
      return () =>
        this.password === this.passwordConfirm ||
        (this as any).$getTrad('user.mdp.mdpsDifferents')
    }
  },
  methods: {
    loginTeamwork() {
      window.location.href =
        'http://localhost:5000/api/Authentification/Teamwork?returnUrl=http://localhost:8080/register'
    },
    validForm() {
      this.register(
        this.userName,
        this.email,
        this.password,
        this.passwordConfirm,
        this.telephone
      )
    }
  },
  beforeMount() {
    common.log.devLog('[DEV] - RESET CACHE + STORE')
    this.clearCache()
  }
})
</script>

<style scoped>
.background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url('../../assets/img/common/porte.jpg') no-repeat center center;
  background-size: cover;
  transform: scale(1.1);
  filter: blur(0.2rem) opacity(50%) grayscale(50%);
}
.col--right {
  background-color: #a5c302;
}
</style>
