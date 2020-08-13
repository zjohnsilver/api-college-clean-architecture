import express from "express"
import bodyParser from "body-parser"
import Logger from './loaders/logger'

const app = express()

const port = process.env.PORT

app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Hello Babel")
})

app.listen(port, (err) => {
  if (err) {
    console.log ("eita")
    Logger.error(err);
    process.exit(1);
    return;
  }
  Logger.info(`
    ################################################
        🛡️  Server listening on port: ${port} 🛡️ 
    ################################################
  `);
})