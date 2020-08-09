import FixerDefaultModel from '../model/FixerDefaultModel'

export default interface IFixerAdaptor {
    getDefaultCurrencyRate(): Promise<FixerDefaultModel>
}
