import * as _ from 'lodash'

interface IConfiguration {
    fixerUrl: string
    fixerAccessKey: string
}

const configuration: IConfiguration = {
  fixerUrl: 'http://data.fixer.io/api/latest',
  fixerAccessKey: _.get(process.env, 'FIXER_ACCESS_KEY', ''),
}

export { configuration, IConfiguration }
