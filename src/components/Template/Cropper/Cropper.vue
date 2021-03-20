<template>
  <v-container>
    <input
      ref="input"
      type="file"
      name="image"
      accept="image/*"
      @change="setImage"
    />

    <v-row>
      <v-col cols="6">
        <v-row justify="center">
          <v-col align-self="center">
            <v-btn-toggle mandatory>
              <v-btn shaped @click.prevent="showFileChooser">
                <v-icon>mdi-file-upload</v-icon>Choisir un fichier
              </v-btn>
              <v-btn
                v-if="cropperImgSrc"
                class="white--text"
                color="success"
                @click.prevent="cropImage"
              >
                <v-icon color="white">mdi-check</v-icon>Valider le cadre
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="6">
        <v-row justify="center">
          <v-alert border="left" type="info" elevation="10"
            >Pour valider l'image, vous devez d'abord valider le cadre de
            l'image.</v-alert
          >
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6" align-self="center">
        <div class="img-cropper">
          <vue-cropper
            ref="cropper"
            :aspectRatio="this.cropperWidth / this.cropperHeigth"
            :src="noImage"
            preview=".preview"
          />
        </div>
        <v-row justify="center">
          <v-btn-toggle mandatory>
            <v-btn @click.prevent="zoom(0.2)">
              <v-icon>mdi-magnify-plus</v-icon>
            </v-btn>
            <v-btn @click.prevent="zoom(-0.2)">
              <v-icon>mdi-magnify-minus</v-icon>
            </v-btn>
            <v-btn @click.prevent="move(0, -10)">
              <v-icon>mdi-arrow-up</v-icon>
            </v-btn>
            <v-btn @click.prevent="move(0, 10)">
              <v-icon>mdi-arrow-down</v-icon>
            </v-btn>
            <v-btn @click.prevent="move(-10, 0)">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-btn @click.prevent="move(10, 0)">
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
            <v-btn @click.prevent="rotate(90)">
              <v-icon>mdi-rotate-right</v-icon>
            </v-btn>
            <v-btn @click.prevent="rotate(-90)">
              <v-icon>mdi-rotate-left</v-icon>
            </v-btn>
            <v-btn @click.prevent="reset">
              <v-icon>mdi-file-restore</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-card flat>
          <v-card-actions>
            <v-spacer></v-spacer>
            <section class="preview-area">
              <p>Prévisualisation</p>
              <div class="preview" />
            </section>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  CROPPER_RESET_ALL,
  CROPPER_SET_IMGSRC,
  CROPPER_SET_IMGCROP
} from '../../store/actions/cropper'
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'
import defautImage from '../../assets/img/noimage.jpg'
import common from '../../core/global/common'
export default {
  components: {
    VueCropper
  },
  data() {
    return {
      noImage: defautImage
    }
  },
  computed: {
    ...mapGetters({
      cropperImgSrc: 'cropperImgSrc',
      cropperCropImg: 'cropperCropImg',
      cropperHeigth: 'cropperHeigth',
      cropperWidth: 'cropperWidth'
    })
  },
  methods: {
    cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      this.$store.commit(
        CROPPER_SET_IMGCROP,
        this.$refs.cropper.getCroppedCanvas().toDataURL()
      )
    },
    move(offsetX, offsetY) {
      this.$refs.cropper.move(offsetX, offsetY)
    },
    reset() {
      this.$refs.cropper.reset()
    },
    rotate(deg) {
      this.$refs.cropper.rotate(deg)
    },
    setImage(e) {
      this.setRatio()
      const file = e.target.files[0]
      if (file.type.indexOf('image/') === -1) {
        common.alert.warning('Veuillez sélectionner un fichier image')
        return
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader()

        reader.onload = event => {
          this.$store.commit(CROPPER_SET_IMGSRC, event.target.result)
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result)
        }
        this.$emit('setFileName', file.name)
        reader.readAsDataURL(file)
      } else {
        common.alert.error("Désolé, l'API FileReader n'est pas prise en charge")
      }
    },
    showFileChooser() {
      this.$refs.input.click()
    },
    zoom(percent) {
      this.$refs.cropper.relativeZoom(percent)
    },
    setRatio() {
      this.$refs.cropper.setAspectRatio(this.cropperWidth / this.cropperHeigth)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
input[type='file'] {
  display: none;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 5px 0;
}
.header h2 {
  margin: 0;
}
.header a {
  text-decoration: none;
  color: black;
}
.content {
  display: flex;
  justify-content: space-between;
}
.cropper-area {
  width: 614px;
}
.actions {
  margin-top: 1rem;
}
.actions a {
  display: inline-block;
  padding: 5px 15px;
  background: #0062cc;
  color: white;
  text-decoration: none;
  border-radius: 3px;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
textarea {
  width: 100%;
  height: 100px;
}
.preview-area {
  width: 307px;
}
.preview-area p {
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 1rem;
}
.preview-area p:last-of-type {
  margin-top: 1rem;
}
.preview {
  width: 100%;
  height: calc(372px * (9 / 16));
  overflow: hidden;
}
.crop-placeholder {
  width: 100%;
  height: 200px;
  background: #ccc;
}
.cropped-image img {
  max-width: 100%;
}
</style>
