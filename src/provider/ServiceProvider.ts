import FixerService from '../domain/fixer/service/FixerService'
import FixerAdaptor from '../domain/fixer/adaptor/FixerAdaptor'
import AdaptorProvider from './AdaptorProvider'

const adaptorProvider = AdaptorProvider.getInstance()
export default class ServiceProvider {
    private static instance: ServiceProvider = new ServiceProvider()

    private readonly fixerAdaptor: FixerAdaptor

    constructor() {
      this.fixerAdaptor = adaptorProvider.fixerAdaptor()
    }

    public static getInstance(): ServiceProvider {
      return this.instance
    }

    public fixerService(): FixerService {
      const adaptor = this.fixerAdaptor
      return new FixerService(adaptor)
    }
}
