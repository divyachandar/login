// Write your code here
import './index.css'

const Login = props => {
  const {login} = props

  return (
    <button type="button" className="login" onClick={login}>
      login
    </button>
  )
}

export default Login
