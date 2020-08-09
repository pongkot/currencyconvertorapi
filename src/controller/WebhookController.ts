import * as Router from '@koa/router';
import RouterCore from '../core/RouterCore';

const webHookRouter = new Router({
  prefix: '/webhook',
});

export default class WebhookController extends RouterCore {
    private static instance: WebhookController = new WebhookController()

    public static getInstance(): WebhookController {
      return this.instance;
    }

    initRoute(): Router {
      return webHookRouter
        .post('/', (ctx: any): void => {
          ctx.body = 200;
        });
    }
}
