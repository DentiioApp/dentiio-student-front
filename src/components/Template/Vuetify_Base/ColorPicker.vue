<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-btn
          v-for="t in types"
          :key="t"
          class="my-4"
          block
          @click="type = t"
          >{{ t }}</v-btn
        >
      </v-col>
      <v-col class="d-flex justify-center">
        <v-color-picker v-model="color"></v-color-picker>
      </v-col>
      <v-col cols="12" md="4">
        <v-sheet dark class="pa-4">
          <pre>{{ showColor }}</pre>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
