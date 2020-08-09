import * as fs from 'fs'
import FixerDefaultModel from '../model/FixerDefaultModel'
import FixerAdaptor from '../adaptor/FixerAdaptor'

export default class FixerService {
    private readonly fixerAdaptor: FixerAdaptor

    constructor(fixerAdaptor: FixerAdaptor) {
      this.fixerAdaptor = fixerAdaptor
    }

    public getCurrencyRateDefault(): Promise<FixerDefaultModel> {
      return this.fixerAdaptor.getDefaultCurrencyRate()
    }

    public saveCurrencyRateToFile(model: FixerDefaultModel): string {
      const data = {
        timeStamp: model.getTimeStamp(),
        date: model.getDate(),
        base: model.getBase(),
        USD: model.getUSD(),
        THB: model.getTHB(),
        CNY: model.getCNY(),
        JPY: model.getJPY(),
      }
      fs.writeFileSync('htdocs/currency_rates.json', JSON.stringify(data))
      return 'success'
    }
}
