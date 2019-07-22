// This file is going to manage whatever happens when the register end point is hit
import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}

// AuthenticationServices.register({
//     email: 'test@gmail.com',
//     password: '123456'
// })
