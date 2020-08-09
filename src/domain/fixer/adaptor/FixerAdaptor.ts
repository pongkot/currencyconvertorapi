import * as request from 'request-promise'
import { from, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import * as _ from 'lodash'
import IFixerAdaptor from '../interfaces/IFixerAdaptor'
import FixerDefaultModel from '../model/FixerDefaultModel'

export default class FixerAdaptor implements IFixerAdaptor {
    private static instance: FixerAdaptor = new FixerAdaptor()

    public static getInstance(): FixerAdaptor {
      return this.instance
    }

    getDefaultCurrencyRate(): Observable<FixerDefaultModel> {
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

      const promise: any = request(options)

      return from(promise).pipe(
        map((i: any) => {
          const timeStamp: number = _.toNumber(_.get(i, 'timestamp', 0))
          const date: string = _.toString(_.get(i, 'date', 'n/a'))
          const base: string = _.toString(_.get(i, 'base', 0))
          const usd: number = _.toNumber(_.get(i, 'rates.USD', 0))
          const thb: number = _.toNumber(_.get(i, 'rates.THB', 0))
          const cny: number = _.toNumber(_.get(i, 'rates.CNY', 0))
          const jpy: number = _.toNumber(_.get(i, 'rates.JPY', 0))

          return new FixerDefaultModel(
            timeStamp,
            date,
            base,
            usd,
            thb,
            cny,
            jpy,
          )
        }),
      )
    }
}
