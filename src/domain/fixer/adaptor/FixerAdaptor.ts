import * as request from 'request-promise'
import * as _ from 'lodash'
import IFixerAdaptor from '../interfaces/IFixerAdaptor'
import FixerDefaultModel from '../model/FixerDefaultModel'
import IFixerSimpleResponse from '../interfaces/IFixerSimpleResponse'
import { IConfiguration } from '../../common/configuration'

export default class FixerAdaptor implements IFixerAdaptor {
  private readonly config: IConfiguration

  constructor(config: IConfiguration) {
    this.config = config
  }

  public getDefaultCurrencyRate(): Promise<FixerDefaultModel> {
    const { config } = this
    const options = {
      uri: config.fixerUrl,
      qs: {
        access_key: config.fixerAccessKey,
        format: 1,
        symbols: 'USD,THB,CNY,JPY',
      },
      headers: {
        'User-Agent': 'Request-Promise',
      },
      json: true,
    }

    return new Promise((resolve, reject) => {
      request(options).then((r: IFixerSimpleResponse) => {
        const timestamp: number = _.toNumber(r.timestamp)
        const date: string = _.toString(r.date)
        const base: string = _.toString(r.base)
        const usd: number = _.toNumber(r.rates.USD)
        const thb: number = _.toNumber(r.rates.THB)
        const cny: number = _.toNumber(r.rates.CNY)
        const jpy: number = _.toNumber(r.rates.JPY)
        resolve(new FixerDefaultModel(timestamp, date, base, usd, thb, cny, jpy))
      }).catch((err: any) => reject(err))
    })
  }
}
