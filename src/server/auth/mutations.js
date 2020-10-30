import axios from 'axios'

export function useAuth() {
  const auth = data =>
    axios({
      method: 'post',
      url: 'https://easy-login-api.herokuapp.com/users/login',
      data,
    })

  return { auth }
}
