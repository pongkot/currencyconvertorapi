import FixerAdaptor from '../domain/fixer/adaptor/FixerAdaptor'

export default class AdaptorProvider {
    private static instance: AdaptorProvider = new AdaptorProvider()

    public static getInstance(): AdaptorProvider {
      return this.instance
    }

    public fixerAdaptor(): FixerAdaptor {
      return new FixerAdaptor()
    }
}
