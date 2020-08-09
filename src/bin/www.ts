import * as _ from 'lodash';
import app from '../app';

const port: number = (!(_.isEmpty(process.env.PORT))) ? _.toNumber(process.env.PORT) : 3000;

app.listen(port, () => {
  process.stdout.write(`Server running on http://localhost:${port}\n`);
});
