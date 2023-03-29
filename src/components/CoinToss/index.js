// Write your code here
import {Component} from 'react'
import './index.css'

const headsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {randomNo: 0, total: 0, heads: 0, tails: 0}

  onTossCoin = () => {
    const randomNo = Math.floor(Math.random() * 2)
    this.setState(prevState => {
      let {heads, tails} = prevState
      const {total} = prevState
      if (randomNo === 0) {
        heads += 1
      } else {
        tails += 1
      }
      return {randomNo, total: total + 1, heads, tails}
    })
  }

  render() {
    const {randomNo, heads, tails, total} = this.state
    const imgurl = randomNo === 0 ? headsUrl : tailsUrl

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="heads-or-tails-text">Heads (or) Tails</p>

          <img src={imgurl} alt="toss result" />
          <button type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
