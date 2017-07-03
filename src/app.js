// npm packages
import express from 'express'
import passport from 'passport'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import session from 'express-session'

// // my packages
// import { facebook } from '../config'
import authRoutes from './authentication'
import defaultRoutes from './base'
import userRoutes from './user'
import { logger } from './utilities'
import { authConfig } from '../config'

const app = express()

// TODO KILL Configure view engine to render EJS templates. 
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
// TODO KILL

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



defaultRoutes(app)
userRoutes(app)

// app.get('/profile',
//   require('connect-ensure-login').ensureLoggedIn(),
//   function(req, res){
//     res.render('profile', { user: req.user })
//   })


// app.use(authRoutes)
authRoutes(app)

  // catch all unhandled errors
app.use((req, res) => {
  const message = { error: `Unable to resolve ${req.originalUrl}`}
  logger.error(message)
  res.status(404).send(message)
})

export default app
