import React, {Component} from 'react';

import './App.css';

class App extends Component {
  state = {
    names: ["John", "Holly", "Vicky"],
    petName: "..."
  }

  changeNames = () => {
    this.setState({
      names: ["Peter", "Arthur", "Ann"]
    })
  }

  getPetName = (event) => {
    this.setState({
      petName: event.target.value
    })
  }

  render() {
    const namesList = this.state.names.map((name) =>{
      return <h1>My name is {name}</h1>
    })

    return(
      <div>
        {namesList}
        <div>
          <input onChange={this.getPetName} type="text" />
          <h2>Your pet name is {this.state.petName} </h2>
        </div>
        <button onClick={this.changeNames} className="btn">Change Names</button>
      </div>
    )
  }
}


export default App;
