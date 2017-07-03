import verifyLogin from 'connect-ensure-login'

export default app => {
  app.get('/api/user/profile', verifyLogin.ensureLoggedIn(), (req, res) => {
    res.render('profile', { user: req.user })
  })
}