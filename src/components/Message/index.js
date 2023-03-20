// Write your code here
import './index.css'

const Message = props => {
  const {isLogin} = props

  return (
    <h1 className="message">{isLogin ? 'Welcome User' : 'Please Login'}</h1>
  )
}

export default Message
