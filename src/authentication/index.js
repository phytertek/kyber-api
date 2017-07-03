import './passport'
import registration from './registration'
import login from './login'
import facebookLogin from './facebook'

export default app => {
  registration(app)
  login(app)
  facebookLogin(app)
}