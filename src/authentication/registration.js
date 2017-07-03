

export default app => {
  app.get('/api/registration', (req, res) => {
    // console.dir(req.user)
    res.sendStatus(201)
  })
}