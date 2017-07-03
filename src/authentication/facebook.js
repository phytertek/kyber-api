// npm packages 
import passport from 'passport'

export default app => {
  app.get('/api/login/facebook', passport.authenticate('facebook'))
  app.get('/api/login/facebook/response', passport.authenticate('facebook', {
    failureRedirect: '/api/registration'
  }), (req, res) => {
    res.redirect('/api/user/profile')
  })
}