// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  subscriptionOn = () => {
    this.setState(() => ({isSubscribed: false}))
  }

  subscriptionOff = () => {
    this.setState(() => ({isSubscribed: true}))
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="container">
        <h1 className="welcome-title">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button
            className="button"
            type="button"
            onClick={this.subscriptionOn}
          >
            Subscribe
          </button>
        ) : (
          <button
            className="button"
            type="button"
            onClick={this.subscriptionOff}
          >
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
