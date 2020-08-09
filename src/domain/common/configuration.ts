import * as _ from 'lodash'

interface IConfiguration {
    fixerUrl: string
    fixerAccessKey: string
    fixerCurrencyDefault: string
}

const configuration: IConfiguration = {
  fixerUrl: 'http://data.fixer.io/api/latest',
  fixerAccessKey: _.get(process.env, 'FIXER_ACCESS_KEY', ''),
  fixerCurrencyDefault: 'USD,THB,CNY,JPY',
}

export { configuration, IConfiguration }
