import * as Router from '@koa/router';
import RouterCore from '../core/RouterCore';

const converterRoute = new Router({
  prefix: '/webhook',
});

export default class CurrencyConverterController extends RouterCore {
    private static instance: CurrencyConverterController = new CurrencyConverterController();

    public static getInstance(): CurrencyConverterController {
      return this.instance;
    }

    public initRoute(): Router {
      return converterRoute
        .get('/', this.getHello);
    }

    private getHello(ctx: any): void {
      ctx.body = 'Hello, 111111111111';
    }
}
