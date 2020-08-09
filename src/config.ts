import CurrencyConverterController from './controller/CurrencyConverterController';
import RouterCore from './core/RouterCore';

const routingConfig: RouterCore[] = [
  CurrencyConverterController.getInstance(),
];

export default routingConfig;
