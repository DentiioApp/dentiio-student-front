// Pour le mixin :https://stackoverflow.com/questions/48515023/display-different-vuejs-components-for-mobile-browsers
// Pour la détection : https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
export default {
  methods: {
    isAndroid() {
      return navigator.userAgent.match(/Android/i)
    },
    isBlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i)
    },
    isiOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    isOpera: function() {
      return navigator.userAgent.match(/Opera Mini/i)
    },
    isWindows: function() {
      return (
        navigator.userAgent.match(/IEMobile/i) ||
        navigator.userAgent.match(/WPDesktop/i)
      )
    },
    isMobileDevice() {
      return (
        this.isAndroid() ||
        this.isBlackBerry() ||
        this.isiOS() ||
        this.isOpera() ||
        this.isWindows()
      )
    }
  }
}
