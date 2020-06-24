import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
class App extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      users:[],
      current_choices:[
      ],
      postCount:0,
      isLoading:false,
      matchhistory: [],
      playing_with_self: false
    }
    this.change_me =this.change_me.bind(this)
    this.change_them= this.change_them.bind(this)
    this.change_winner = this.change_winner.bind(this)
    this.submit = this.submit.bind(this)
  }

  async componentDidMount(){
    this.setState({isLoading:true})
    const rankings = await fetch('https://ben-tennis.herokuapp.com/rank/5ed40fab5939793498b99c80')
      .then(res=>res.json())
      .then((data) => {
        this.setState({users:data.rankings});
        this.setState({current_choices:[data.rankings[0][0], data.rankings[1][0], "No"],})
      })
    const match = await fetch('https://ben-tennis.herokuapp.com/matchhistory/')
      .then(res=> res.json())
      .then((data) =>{
        this.setState({matchhistory:data.reverse()});
      })
      this.setState({isLoading:false})
  }

  change_me(e){
    var temp = this.state.current_choices;
    temp[0] = e.target.value
    this.setState({current_choices:temp});
  }

  change_them(e){
    var temp = this.state.current_choices;
    temp[1] = e.target.value
    this.setState({current_choices:temp});
  }
  change_winner(e){
    var temp = this.state.current_choices;
    temp[2] = e.target.value
    this.setState({current_choices:temp});
  }
  async submit(){
    if (this.state.current_choices[0] == this.state.current_choices[1]){
      this.setState({playing_with_self: true})
      return;
    }
    this.setState({playing_with_self: false})
    var req = {name: this.state.current_choices[0], opponent:this.state.current_choices[1], did_win:this.state.current_choices[2], rankings:this.state.users};
    axios.post("https://ben-tennis.herokuapp.com/rankhistory/", req)
    const response = await axios.post("https://ben-tennis.herokuapp.com/rank/5ed40fab5939793498b99c80", req)
    this.setState({users:response.data})
    const response2 = await axios.post("https://ben-tennis.herokuapp.com/matchhistory/", req)
    this.setState({matchhistory:response2.data.reverse()})
  }

  render(){
    const isLoading= this.state.isLoading;
    var loading = <div>loading please wait....</div>
    const tds = {
      borderLeft: "1px solid black",
      borderRight: "1px solid black",
      borderBottom: "1px solid black",
      borderTop:"1px solid black"
    }
    const names = {
      padding:"5px"
    }
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
      ];
    return(
      <div>
      {isLoading ? loading : 
      
      <div style={{width:"100%", margin:"auto"}}>
        <div style={{margin: "0 auto",
          width: "85%"}}>

          <table>
            <tr><td style={{textAlign:"center"}}><i><b>Player Name</b></i></td><td><b>Rank</b></td></tr>
            {this.state.users.map(user => <tr><td style={names}>{user[0]}</td><td style={names}>{user[1]}</td></tr>)}
          </table>

        </div>
        
        <div style={{width:"100%"}}>
          <div style={{margin: "0 auto",
          width: "85%"}}>
          <label for="who you">Who are you?&ensp;</label>
          <select id="who you" name="who you" value={this.state.current_choices[0]} onChange={this.change_me}>
            {this.state.users.map(user => <option value={user[0]}>{user[0]}</option>)}
          </select>

          <br></br>
          <br></br>
          <label for="who them">Who did you play against?&ensp;</label>
          <select id="who them" name="who them" value={this.state.current_choices[1]} onChange={this.change_them}>
            {this.state.users.map(user => <option value={user[0]}>{user[0]}</option>)}
          </select>

          <br></br>
          <br></br>
          <label for="win">Did you win?&ensp;</label>
          <select id="win" name="win" value={this.state.current_choices[2]} onChange={this.change_winner}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>

          &ensp;<input type="button" value="Submit" onClick={this.submit}></input>
          {this.state.playing_with_self? <p>You can't play a match against yourself!</p> :''}
          </div>
          <br></br>
          <br></br>
          {this.state.matchhistory.length == 0 ? '':
          <table style={{border:"1px solid black", borderCollapse:"collapse",marginBottom:"5%", margin: "0 auto",
          width: "85%"}}>
          <tbody style={{}}>
          <th>Date</th><th>Player one</th><th>Player Two</th><th>Winner</th>
          {this.state.matchhistory.map((match) => 
              <tr>
                <td style={tds}>
                  {new Date(match.datePlayed).getHours()}:{(new Date(match.datePlayed).getMinutes() < 10 ? '0' : '') + new Date(match.datePlayed).getMinutes()} {months[new Date(match.datePlayed).getMonth()]} {new Date(match.datePlayed).getDate()}, {new Date(match.datePlayed).getFullYear()}
                  </td>
                <td style={tds}>{match.player_one}</td>
                <td style={tds}>{match.player_two}</td>
                <td style={tds}>{match.winner}</td>
              </tr>
          )}
          </tbody>
          </table>
          }

        </div>
      </div>
      }
      </div>
    );
  }
}

export default App;
