export default app => {
  app.get('/api/login', (req, res) => {
    res.render('login')
  })
}