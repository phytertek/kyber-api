import verifyLogin from 'connect-ensure-login'

export default app => {
  app.get('/api/user/profile', verifyLogin.ensureLoggedIn(), (req, res) => {
    res.sendStatus(200)
  })
}