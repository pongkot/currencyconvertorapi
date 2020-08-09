import RouterCore from './core/RouterCore'
import WebhookController from './controller/WebhookController'

const routingConfig: RouterCore[] = [
  WebhookController.getInstance(),
]

export default routingConfig
