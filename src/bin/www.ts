import * as _ from 'lodash'
import app from '../app'
import ServiceProvider from '../provider/ServiceProvider'
import FixerDefaultModel from '../domain/fixer/model/FixerDefaultModel'

const fixerService = ServiceProvider.getInstance().fixerService()
const port: number = (!(_.isEmpty(process.env.PORT))) ? _.toNumber(process.env.PORT) : 3000

app.listen(port, () => {
  process.stdout.write(`Server running on http://localhost:${port}\n`)
  fixerService.getCurrencyRateDefault().then((r: FixerDefaultModel) => {
    const save = fixerService.saveCurrencyRateToFile(r)
    if (save === 'success') {
      process.stdout.write('Initial currency rate success\n')
    }
  })
})
