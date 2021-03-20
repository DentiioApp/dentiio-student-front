<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="12" sm="12">
        <v-row>
          <v-col cols="6" sm="4">
            <v-btn x-small color="secondary" dark>Extra small Button</v-btn>
          </v-col>
          <v-col cols="6" sm="8">
            <CodeWrapper :code="xsButton"></CodeWrapper>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" sm="4">
            <v-btn small color="primary" dark>Small Button</v-btn>
          </v-col>
          <v-col cols="6" sm="8">
            <CodeWrapper :code="smButton"></CodeWrapper>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" sm="4">
            <v-btn color="warning" dark>Normal Button</v-btn>
          </v-col>
          <v-col cols="6" sm="8">
            <CodeWrapper :code="nButton"></CodeWrapper>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" sm="4">
            <v-btn color="error" dark large>Large Button</v-btn>
          </v-col>
          <v-col cols="6" sm="8">
            <CodeWrapper :code="lButton"></CodeWrapper>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" sm="4">
            <v-btn x-large color="success" dark>Extra large Button</v-btn>
          </v-col>
          <v-col cols="6" sm="8">
            <CodeWrapper :code="xlButton"></CodeWrapper>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6" sm="4">
            <v-btn color="secondary" fab x-small dark>
              <v-icon>mdi-television</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="6" sm="8">
            <CodeWrapper :code="xsButtonFab" dark></CodeWrapper>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" sm="4">
            <v-btn color="primary" fab small dark>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="6" sm="8">
            <CodeWrapper :code="smButtonFab" dark></CodeWrapper>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" sm="4">
            <v-btn color="warning" fab dark>
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="6" sm="8">
            <CodeWrapper :code="nButtonFab" dark></CodeWrapper>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" sm="4">
            <v-btn color="error" fab large dark>
              <v-icon>mdi-alarm</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="6" sm="8">
            <CodeWrapper :code="lButtonFab" dark></CodeWrapper>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" sm="4">
            <v-btn color="success" fab x-large dark>
              <v-icon>mdi-domain</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="6" sm="8">
            <CodeWrapper :code="xlButtonFab" dark></CodeWrapper>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CodeWrapper from '../LibraryUse/CodeWrapper'
export default {
  components: {
    CodeWrapper
  },
  data() {
    return {
      xsButton: `<v-btn x-small color='secondary' dark>Extra small Button</v-btn>`,
      smButton: `<v-btn small color='primary' dark>Small Button</v-btn>`,
      nButton: `<v-btn color='warning' dark>Normal Button</v-btn`,
      lButton: `<v-btn color='error' dark large>Large Button</v-btn>`,
      xlButton: `<v-btn x-large color='success' dark>Extra large Button</v-btn>`,

      xsButtonFab: `<v-btn color="secondary" fab x-small dark><v-icon>mdi-television</v-icon></v-btn>`,
      smButtonFab: `<v-btn color="primary" fab small dark><v-icon>mdi-pencil</v-icon></v-btn>`,
      nButtonFab: `<v-btn color="warning" fab dark><v-icon>mdi-account-circle</v-icon></v-btn>`,
      lButtonFab: `<v-btn color="error" fab large dark><v-icon>mdi-alarm</v-icon></v-btn>`,
      xlButtonFab: `<v-btn color="success" fab x-large dark><v-icon>mdi-domain</v-icon></v-btn>`
    }
  }
}
</script>

<style lang="scss" scoped></style>
