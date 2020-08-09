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
}
