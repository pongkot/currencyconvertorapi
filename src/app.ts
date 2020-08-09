import * as Koa from 'koa';
import * as bodyParser from 'koa-body';
import * as logger from 'koa-logger';

// Inital koa instance
const app = new Koa();

// Inject middleware
app.use(bodyParser());
app.use(logger());

// Automatic inject routing

// Init default routing
app.use((ctx: any) => {
  ctx.body = 'Currency Converter API already';
});

export default app;
