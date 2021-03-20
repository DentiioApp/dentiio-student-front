import _ from 'lodash'
import moment from 'moment'

export default {
  format(date: Date, format: string) {
    return moment(date).format(format)
  }
}
