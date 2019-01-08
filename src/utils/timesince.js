import timesince from 'timesince'
import locale from 'timesince/locales/pt_BR'

export default (now = Date.now()) => date => timesince({locale, now})(date)
