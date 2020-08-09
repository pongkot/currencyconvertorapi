import IFixerAdaptor from '../interfaces/IFixerAdaptor'

export default class FixerAdaptor implements IFixerAdaptor {
    private static instance: FixerAdaptor = new FixerAdaptor()

    public static getInstance(): FixerAdaptor {
      return this.instance
    }

    getDefaultCurrencyRate(): any {
      return null
    }
}
