import storeActions from '../actions/storeActions'

const CROPPER = storeActions.cropper

interface CropperState {
  cropperImgSrc: string
  cropperCropImg: string
  cropperHeight: number
  cropperWidth: number
}

const state: CropperState = {
  cropperImgSrc: '',
  cropperCropImg: '',
  cropperHeight: 0,
  cropperWidth: 0
}

const getters = {
  cropperImgSrc: (state: CropperState) => state.cropperImgSrc, //Source de l'image de base
  cropperCropImg: (state: CropperState) => state.cropperCropImg, //Source de l'image croppé
  cropperHeigth: (state: CropperState) => state.cropperHeight,
  cropperWidth: (state: CropperState) => state.cropperWidth
}

const mutations = {
  [CROPPER.RESET_ALL]: (state: CropperState) => {
    state.cropperImgSrc = ''
    state.cropperCropImg = ''
  },
  [CROPPER.SET_IMGSRC]: (state: CropperState, newVal: string) => {
    newVal ? (state.cropperImgSrc = newVal) : (state.cropperImgSrc = '')
  },
  [CROPPER.SET_IMGCROP]: (state: CropperState, newVal: string) => {
    newVal ? (state.cropperCropImg = newVal) : (state.cropperCropImg = '')
  },
  [CROPPER.IMG_HEIGHT]: (state: CropperState, newVal: number) => {
    newVal ? (state.cropperHeight = newVal) : (state.cropperHeight = 0)
  },
  [CROPPER.IMG_WIDTH]: (state: CropperState, newVal: number) => {
    newVal ? (state.cropperWidth = newVal) : (state.cropperWidth = 0)
  }
}

export default {
  state,
  getters,
  mutations
}
