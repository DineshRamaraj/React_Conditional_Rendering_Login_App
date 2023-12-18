// Write your code here
import {Component} from 'react'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class MyHome extends Component {
  state = {isLoggedIn: false}

  onButtonChange = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.onButtonChange} />
          ) : (
            <Login login={this.onButtonChange} />
          )}
        </div>
      </div>
    )
  }
}

export default MyHome
