// npm packages
import express from 'express'
import passport from 'passport'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import session from 'express-session'
import helmet from 'helmet'

// // my packages
import authRoutes from './authentication'
import userRoutes from './user'
import { logger } from './utilities'
import { authConfig } from './config'

const app = express()

// Header security
app.use(helmet())

// Logger
app.use(morgan('combined', { stream: logger.stream }))

// Cookie Parser
app.use(require('cookie-parser')())

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Session Support
app.use(session({ 
  name: 'sessionId',
  secret: authConfig.sessionSecret, 
  resave: true, 
  saveUninitialized: true
}))

// Passport 
app.use(passport.initialize())
app.use(passport.session())


// Routes
userRoutes(app)
authRoutes(app)

// catch all unhandled errors
app.use((req, res) => {
  const message = { error: `Unable to resolve ${req.originalUrl}`}
  logger.error(message)
  res.status(404).send(message)
})

export default app
