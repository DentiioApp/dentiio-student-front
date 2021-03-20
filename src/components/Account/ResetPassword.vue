<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ $getTrad('user.resetMdp.title') }}</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="showPassword ? 'text' : 'password'"
                  name="input-10-1"
                  :label="$getTrad('user.mdp.mdp')"
                  counter
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="passwordConfirm"
                  :append-icon="showConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min, matchPassword]"
                  :type="showConfirmation ? 'text' : 'password'"
                  name="input-10-1"
                  :label="$getTrad('user.mdp.confirmMdp')"
                  counter
                  @click:append="showConfirmation = !showConfirmation"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-container>
      <small>{{ $getTrad('global.form.fieldsRequired') }}</small>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="error" text @click="reset">{{
        $getTrad('global.form.cancel')
      }}</v-btn>
      <v-btn color="primary" :disabled="!valid" text @click="validate">{{
        $getTrad('global.form.save')
      }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import mixinAuth from '@/core/database/dataAccess/mixinAuth'
export default mixins(mixinAuth).extend({
  data() {
    return {
      showPassword: false,
      showConfirmation: false,
      password: '',
      passwordConfirm: '',
      valid: false,
      rules: {
        required: (value: string) =>
          !!value || (this as any).$getTrad('global.form.thisFieldRequired'),
        min: (v: string) =>
          v.length >= 4 ||
          (this as any).$getTrad('user.mdp.mdpSize') +
            ' ' +
            4 +
            ' ' +
            (this as any).$getTrad('global.form.caracteres')
      }
    }
  },
  methods: {
    reset() {
      this.$emit('cancelResetPassword')
    },
    validate() {
      if (this.form.validate()) {
        this.resetPassword(this.password, this.passwordConfirm, 'CODE')
      }
    }
  },
  computed: {
    matchPassword(): any {
      return () =>
        this.password === this.passwordConfirm ||
        (this as any).$getTrad('user.mdp.mdpsDifferents')
    },
    form(): Vue & { validate: () => boolean } {
      return this.$refs.form as Vue & { validate: () => boolean }
    }
  }
})
</script>

<style lang="scss" scoped></style>
