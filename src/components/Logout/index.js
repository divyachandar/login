// Write your code here
import './index.css'

const Logout = props => {
  const {logout} = props

  return (
    <button type="button" className="logout" onClick={logout}>
      logout
    </button>
  )
}
export default Logout
