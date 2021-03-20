import dotenv from 'dotenv'
dotenv.config()

export default class ConfigProvider {
  public static get CONFIG() {
    return {
      backendUrl: '$VUE_APP_API_URL'
    }
  }

  public static value(name: string) {
    if (!(name in this.CONFIG)) {
      return
    }
    // @ts-ignore
    const value = this.CONFIG[name]

    if (!value) {
      return
    }

    if (value.startsWith('$VUE_APP_')) {
      const envName = value.substr(1)
      const envValue = process.env[envName]
      if (envValue) {
        return envValue
      } else {
        return
      }
    } else {
      return value
    }
  }
}
