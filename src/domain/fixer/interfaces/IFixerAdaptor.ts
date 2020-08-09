import { Observable } from 'rxjs'
import FixerDefaultModel from '../model/FixerDefaultModel'

export default interface IFixerAdaptor {
    getDefaultCurrencyRate(): Observable<FixerDefaultModel>
}
