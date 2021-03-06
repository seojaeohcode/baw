import React, {Component} from 'react';
import "./Counter.css";

class Counter extends Component {
  state = {
    number1: 0,
    number2:0,
    winp1: 0,
    winp2: 0,
    lose1: 0,
    lose2: 0,
    fightnum1: 0,
    fightnum2: 0,
    limit1: 10,
    limit2: 10,
    onpropose1:false,
    onpropose2:false,
    Round:1
  }
  
  handleIncrease1 = () => {
    if(this.state.number1 < this.state.limit1&&this.state.onpropose1===false)
    {
    this.setState({
        number1: this.state.number1 + 1
      })
    }
  }

  handleDecrease1 = () => {
    if(this.state.number1 !== 0)
    {
      this.setState({
            number1: this.state.number1 - 1
        })
    }
  }

  handlePropose1 = () => {
    if(this.state.Round < 6)
    {
    this.setState({
        limit1: this.state.limit1 - this.state.number1,
        fightnum1: this.state.number1,
        number1: 0,
        onpropose1: true
      })
    }
  }

  handleIncrease2 = () => {
    if(this.state.number2 < this.state.limit2&&this.state.onpropose2===false)
    {
    this.setState({
        number2: this.state.number2 + 1
      })
    }
  }

  handleDecrease2 = () => {
    if(this.state.number2 !== 0)
    {
      this.setState({
            number2: this.state.number2 - 1
        })
    }
  }

  handlePropose2 = () => {
      if(this.state.Round < 6)
      {
        this.setState({
            limit2: this.state.limit2 - this.state.number2,
            fightnum2: this.state.number2,
            number2: 0,
            onpropose2: true
          })
      }
  }

  fight = () => {
      if(this.state.Round<6)
      {
        if(this.state.onpropose1===true&&this.state.onpropose2===true)
        {
          if(this.state.fightnum1>this.state.fightnum2)
          {
            this.setState({
                winp1: this.state.winp1 + 1,
                lose1: this.state.lose1 + 0,
                winp2: this.state.winp2 + 0,
                lose2: this.state.lose2 + 1
              })
          }
          else if(this.state.fightnum1<this.state.fightnum2)
          {
              this.setState({
                winp1: this.state.winp1 + 0,
                lose1: this.state.lose1 + 1,
                winp2: this.state.winp2 + 1,
                lose2: this.state.lose2 + 0
                })
          }
          else
          {
              
          }
  
          this.setState({
              onpropose1: false,
              onpropose2: false,
              Round: this.state.Round + 1
            })
        }
      }
      else
      {

      }
  }
  
  checkwinner = () => {
      if(this.state.Round > 5)
      {
        if(this.state.winp1>this.state.winp2)
        {
            alert('player1??????!')
        }
        else if(this.state.winp1<this.state.winp2)
        {
            alert('player2??????!')
        }
        else if(this.state.winp1===this.state.winp2)
        {
            alert('?????????!')
        }
      }
      else
      {
          alert('????????? ????????? ??????.')
      }
  }

  render(){
    return(
      <div>
          <div className="title">Black And White!</div>
      <div className="round">Round{this.state.Round<6 ? this.state.Round : '??????'}({this.state.Round<5 ? 5-this.state.Round+'???????????????' : this.state.Round===5 ? '??????????????????' : 'X ????????? ???????????????.'})</div>
     
      <div className="box1">
      <div className="player">player1</div>
      <div className="number">????????????: {this.state.number1}</div>
      <div className="onoff">????????????:{this.state.onpropose1===false ? 'No' : 'Yes'}</div>
      <div className="plusminus">
      <button onClick={this.handleIncrease1} className="btn-two red rounded">??????</button>
      <button onClick={this.handleDecrease1} className="btn-two red rounded">??????</button>
      <div className="propose"><button onClick={this.handlePropose1} className="btn-two green rounded">??????</button></div>
      </div>
      </div>
     
      <div className="box2">
      <div className="player">player2</div>
      <div className="number">????????????: {this.state.number2}</div>
      <div className="onoff">????????????:{this.state.onpropose2===false ? 'No' : 'Yes'}</div>
      <div className="plusminus">
      <button onClick={this.handleIncrease2} className="btn-two red rounded">??????</button>
      <button onClick={this.handleDecrease2} className="btn-two red rounded">??????</button>
      </div>
      <div className="propose"><button onClick={this.handlePropose2} className="btn-two green rounded">??????</button></div>
      </div> 
     
      <div className="winlose">
      p1 ??????:{this.state.winp1}  ??????:{this.state.lose1}
      <br/>p2 ??????:{this.state.winp2}  ??????:{this.state.lose2}
      </div>
      <div className="fight"><button onClick={this.fight} className="btn-two red rounded">??????</button></div>
      <div className="winnercheck"><button onClick={this.checkwinner} className="btn-two yellow rounded">????????????</button></div>
      <div className="version">(ver2021.09.04/create by seojaeoh)</div>
      </div>
    )
  }
}

export default Counter;