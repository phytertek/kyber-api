// my packages
import app from './app'
import { connect as dbConnect } from './db'
import { logger } from './utilities'
import { appConfig } from '../config'

// connect to db
dbConnect(() => {
  logger.info(`Database ready, starting ${appConfig.name}...`)
  // start app
  app.listen(appConfig.port, () => {
    logger.info(`${appConfig.name} listening at ${appConfig.host}`)
  })
})

// output all uncaught exceptions
process.on('uncaughtException', err => logger.error('Uncaught exception', err))
process.on('unhandledRejection', err => logger.error('Unhandled rejection', err))