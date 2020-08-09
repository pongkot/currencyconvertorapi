import * as Router from '@koa/router'
import RouterCore from '../core/RouterCore'
import FixerDefaultModel from '../domain/fixer/model/FixerDefaultModel'
import IFixerAdaptor from '../domain/fixer/interfaces/IFixerAdaptor'
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
        .post('/', this.updateCurrencyRate)
    }

    public async updateCurrencyRate(ctx: any): Promise<void> {
      const { response } = ctx

      await fixerAdaptor
        .getDefaultCurrencyRate()
        .then((r: FixerDefaultModel): void => { response.body = r })
    }
}
