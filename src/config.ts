import RouterCore from './core/RouterCore'
import WebhookController from './controller/WebhookController'
import FixerController from './controller/FixerController'

const routingConfig: RouterCore[] = [
  WebhookController.getInstance(),
  FixerController.getInstance(),
]

export default routingConfig
