import React, {Component} from 'react';

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
            alert('player1승리!')
        }
        else if(this.state.winp1<this.state.winp2)
        {
            alert('player2승리!')
        }
        else if(this.state.winp1===this.state.winp2)
        {
            alert('무승부!')
        }
      }
      else
      {
          alert('경기가 끝나지 않음.')
      }
  }

  render(){
    return(
      <div>
          <h1>Black And White</h1>
          <h4>(ver2021.09.04/create by seojaeoh)</h4>
      <h2>Round{this.state.Round<6 ? this.state.Round : '종료'}({this.state.Round<5 ? 5-this.state.Round+'라운드남음' : this.state.Round===5 ? '마지막라운드' : 'X 승자를 확인하세요.'})</h2>
      <h3>player1</h3>
      <div>승부숫자: {this.state.number1}</div>
      <div>제출여부:{this.state.onpropose1===false ? 'No' : 'Yes'}</div>
      <button onClick={this.handleIncrease1}>+</button>
      <button onClick={this.handleDecrease1}>-</button>
      <div><button onClick={this.handlePropose1}>제출</button></div>
      <h3>player2</h3>
      <div>승부숫자: {this.state.number2}</div>
      <div>제출여부:{this.state.onpropose2===false ? 'No' : 'Yes'}</div>
      <button onClick={this.handleIncrease2}>+</button>
      <button onClick={this.handleDecrease2}>-</button>
      <div><button onClick={this.handlePropose2}>제출</button></div>
      <div>p1 승리:{this.state.winp1}, 패배:{this.state.lose1}</div>
      <div>p2 승리:{this.state.winp2}, 패배:{this.state.lose2}</div>
      <div><button onClick={this.fight}>승부</button></div>
      <div><button onClick={this.checkwinner}>승자확인</button></div>
      </div>
    )
  }
}

export default Counter;