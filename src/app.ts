import * as Koa from 'koa'
import * as bodyParser from 'koa-body'
import * as logger from 'koa-logger'
import routingConfig from './config'
import RouterCore from './core/RouterCore'

// Initial koa instance
const app = new Koa()

// Inject middleware
app.use(bodyParser())
app.use(logger())

// Automatic inject routing from config
routingConfig.forEach((i: RouterCore) => {
  app.use(i.initRoute().routes())
})

// Init default routing
app.use((ctx: any) => {
  ctx.body = 'Currency Converter API already'
})

export default app
