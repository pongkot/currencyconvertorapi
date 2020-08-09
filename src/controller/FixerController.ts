import * as Router from '@koa/router'
import { tap } from 'rxjs/operators'
import { Observable, async } from 'rxjs'
import RouterCore from '../core/RouterCore'
import FixerDefaultModel from '../domain/fixer/model/FixerDefaultModel'
import IFixerAdaptor from '../domain/fixer/interfaces/IFixerAdaptor'
import FixerAdaptor from '../domain/fixer/adaptor/FixerAdaptor'
import AdaptorProvider from '../provider/AdaptorProvider'

const fixerAdaptor: IFixerAdaptor = AdaptorProvider.getInstance().fixerAdaptor()

const fixerRouter = new Router({
  prefix: '/fixer',
})

export default class FixerController extends RouterCore {
    private static instance: FixerController = new FixerController()

    public static getInstance(): FixerController {
      return this.instance
    }

    public initRoute(): Router {
      return fixerRouter
        .get('/', this.getFixerDefaul)
    }

    public async getFixerDefaul(ctx: any): Promise<any> {
      const { response } = ctx

      await fixerAdaptor.getDefaultCurrencyRate().then((r: any): void => { response.body = r })

    //   response.body = 200
    }
}
