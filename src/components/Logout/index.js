import './index.css'

const Logout = props => {
  const {logout} = props

  return (
    <button type="button" className="login-button" onClick={logout}>
      Logout
    </button>
  )
}

export default Logout
