import FixerAdaptor from '../domain/fixer/adaptor/FixerAdaptor'
import { IConfiguration, configuration } from '../domain/common/configuration'

export default class AdaptorProvider {
    private static instance: AdaptorProvider = new AdaptorProvider()

    public static getInstance(): AdaptorProvider {
      return this.instance
    }

    public fixerAdaptor(): FixerAdaptor {
      const config: IConfiguration = configuration
      return new FixerAdaptor(config)
    }
}
