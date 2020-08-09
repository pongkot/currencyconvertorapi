import * as request from 'request-promise'
import * as _ from 'lodash'
import IFixerAdaptor from '../interfaces/IFixerAdaptor'
import FixerDefaultModel from '../model/FixerDefaultModel'
import IFixerSimpleResponse from '../interfaces/IFixerSimpleResponse'

export default class FixerAdaptor implements IFixerAdaptor {
  public getDefaultCurrencyRate(): Promise<FixerDefaultModel> {
    const options = {
      uri: 'http://data.fixer.io/api/latest',
      qs: {
        access_key: '3014cc2f4024dbcea8b8a5a8d532de36',
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
