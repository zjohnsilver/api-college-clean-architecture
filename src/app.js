import express from 'express'
import bodyParser from 'body-parser'
import LoggerInstance from './loaders/logger'

const port = process.env.PORT

const app = express()
  .use(bodyParser.json())
  .use(LoggerInstance)

app.get('/', (req, res) => {
  res.status(200).send('Hello Babel')
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
  console.log(`\n ## Serving in port ${port}\n`)
})
